"use server";

import { Resend } from "resend";

export async function submitContactForm(formData: FormData) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    const name = formData.get("name") as string;
    const company = formData.get("company") as string;
    const email = formData.get("email") as string;
    const industry = formData.get("industry") as string;
    const size = formData.get("size") as string;
    const challenge = formData.get("challenge") as string;
    const source = formData.get("source") as string;

    // Server-side validation
    if (!name || !company || !email || !industry || !size || !challenge) {
        return { success: false, error: "Please fill out all required fields." };
    }

    try {
        const { data, error } = await resend.emails.send({
            from: "SIAIEIN Website <onboarding@resend.dev>",
            to: ["hello@siaiein.com"],
            subject: `New AI Audit Request from ${name} at ${company}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Company:</strong> ${company}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Industry:</strong> ${industry}</p>
                <p><strong>Company Size:</strong> ${size}</p>
                <p><strong>Biggest Challenge:</strong><br/>${challenge}</p>
                <p><strong>Source:</strong> ${source || 'Not provided'}</p>
            `,
        });

        if (error) {
            console.error("Resend Error:", error);
            return { success: false, error: error.message };
        }

        return { success: true };
    } catch (e: any) {
        console.error("Server Error:", e);
        return { success: false, error: "Internal server error." };
    }
}
