"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import { DemoModal, DemoConfig } from "@/components/ui/demo-modal";

interface ServiceDemoButtonProps {
    config: DemoConfig;
}

export function ServiceDemoButton({ config }: ServiceDemoButtonProps) {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <>
            <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-lg font-bold border-emerald-500/50 text-rose-400 hover:bg-emerald-500/10 hover:border-rose-400 transition-colors w-full sm:w-auto gap-2"
                onClick={() => setIsOpen(true)}
            >
                <PlayCircle className="w-5 h-5" />
                See Live Demo
            </Button>

            <DemoModal
                config={config}
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
        </>
    );
}
