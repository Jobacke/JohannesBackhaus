import { cn } from "../../lib/utils";
import { ArrowRight } from "lucide-react";

export const BentoCard = ({
    className,
    children,
    header,
    icon,
    title,
    description,
    href,
    ...props
}) => {
    const Component = href ? "a" : props.onClick ? "button" : "div";

    return (
        <Component
            href={href}
            {...props}
            className={cn(
                "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-neutral-900 border border-white/10 justify-between flex flex-col space-y-4 shadow-none relative overflow-hidden",
                className
            )}
        >
            {header}
            <div className="group-hover/bento:translate-x-2 transition duration-200">
                {icon}
                <div className="font-display font-bold text-xl text-gradient-nature mb-2 mt-2">
                    {title}
                </div>
                <div className="font-sans font-normal text-neutral-400 text-xs text-balance">
                    {description}
                </div>
                {children}
            </div>

            {href && (
                <div className="pointer-events-none absolute bottom-4 right-4 opacity-0 group-hover/bento:opacity-100 transition-opacity">
                    <ArrowRight className="text-neutral-400 w-5 h-5" />
                </div>
            )}

            {/* Subtle hover gradient overlay */}
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover/bento:opacity-10 transition-opacity pointer-events-none" />
        </Component>
    );
};
