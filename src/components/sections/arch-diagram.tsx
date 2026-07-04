import * as React from "react";
import { cn } from "@/lib/utils";

export type ArchNodeType = "source" | "process" | "action" | "output";

export interface ArchNode {
    id: string;
    label: string;
    sublabel: string;
    type: ArchNodeType;
}

const nodeStyles: Record<ArchNodeType, string> = {
    source:  "bg-stone-800/60  border-stone-600/50  text-stone-300",
    process: "bg-orange-500/10 border-orange-500/30 text-orange-200",
    action:  "bg-white/[0.04] border-white/[0.10]  text-stone-300",
    output:  "bg-orange-500/20 border-orange-500/50 text-white",
};

const dotStyles: Record<ArchNodeType, string> = {
    source:  "bg-stone-500",
    process: "bg-orange-500",
    action:  "bg-stone-400",
    output:  "bg-orange-400",
};

interface ArchDiagramProps {
    nodes: ArchNode[];
    className?: string;
}

export function ArchDiagram({ nodes, className }: ArchDiagramProps) {
    return (
        <div className={cn("relative w-full overflow-x-auto", className)}>
            {/* Background grid pattern */}
            <div className="absolute inset-0 rounded-2xl"
                style={{
                    backgroundImage: "radial-gradient(circle, rgba(249,115,22,0.06) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                }}
            />
            <div className="relative flex flex-col sm:flex-row items-center gap-0 min-w-max mx-auto p-8">
                {nodes.map((node, i) => (
                    <React.Fragment key={node.id}>
                        {/* Node */}
                        <div className={cn(
                            "flex flex-col items-center text-center px-5 py-4 rounded-2xl border min-w-[130px] max-w-[160px] transition-all duration-300 hover:scale-105",
                            nodeStyles[node.type]
                        )}>
                            {/* Indicator dot */}
                            <div className={cn("w-2 h-2 rounded-full mb-3", dotStyles[node.type])} />
                            <p className="text-xs font-bold leading-tight">{node.label}</p>
                            <p className="text-[10px] opacity-50 mt-1.5 leading-tight">{node.sublabel}</p>
                        </div>

                        {/* Arrow connector */}
                        {i < nodes.length - 1 && (
                            <div className="flex sm:flex-row flex-col items-center shrink-0">
                                {/* Horizontal line */}
                                <div className="w-6 sm:w-8 h-px sm:h-px sm:w-8 h-6 w-px bg-gradient-to-r from-orange-500/20 to-orange-500/60" />
                                {/* Arrowhead */}
                                <div className="w-0 h-0
                                    border-l-[5px] border-r-[5px] border-t-[7px] border-b-0
                                    border-l-transparent border-r-transparent border-t-orange-500/60 border-b-transparent
                                    sm:border-t-[5px] sm:border-b-[5px] sm:border-l-[7px] sm:border-r-0
                                    sm:border-t-transparent sm:border-b-transparent sm:border-l-orange-500/60 sm:border-r-transparent" />
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}
