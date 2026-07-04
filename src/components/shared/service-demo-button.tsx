"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import { DemoModal, DemoConfig } from "@/components/shared/demo-modal";

interface ServiceDemoButtonProps {
    config: DemoConfig;
}

export function ServiceDemoButton({ config }: ServiceDemoButtonProps) {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <>
            <Button
                variant="outline"
                className="gap-2"
                onClick={() => setIsOpen(true)}
            >
                <PlayCircle className="w-4 h-4" />
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
