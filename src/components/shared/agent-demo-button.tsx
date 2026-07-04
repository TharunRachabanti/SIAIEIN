"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import { DemoModal } from "@/components/shared/demo-modal";
import { agentDemos } from "@/lib/data/demos";

interface AgentDemoButtonProps {
    demoId: string;
}

export function AgentDemoButton({ demoId }: AgentDemoButtonProps) {
    const [isOpen, setIsOpen] = React.useState(false);
    const config = agentDemos[demoId];

    if (!config) return null;

    return (
        <>
            <Button
                variant="outline"
                className="gap-2"
                onClick={() => setIsOpen(true)}
            >
                <PlayCircle className="w-4 h-4" />
                Watch Live Demo
            </Button>

            <DemoModal
                config={config}
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
        </>
    );
}
