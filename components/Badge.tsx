import React, { memo } from "react";
import clsx from "clsx";

export type BadgeProps = {
  text?: string;
  variant?: "green-to-cyan" | "pink-to-purple" | "pink-to-orange" | "transparan";
  size?: "small" | "medium" | "large" | "x-large" | "xx-large";
  sizeContainer?: "sm" | "md" | "lg" | "xl";
  border?: "border-laravel" | "border-tailwind" | "border-react" | "border-bootstrap" | "border-nextjs" | "border-postgresql" | "none";
};

const Badge = (props: BadgeProps) => {
  const { text, variant = "transparan", size = "medium", sizeContainer = "md", border = "none" } = props;

  const variantClasses = {
    "green-to-cyan": "bg-gradient-to-r from-green-400 to-cyan-500 text-white",
    "pink-to-purple": "bg-gradient-to-r from-pink-400 to-purple-500 text-white",
    "pink-to-orange": "bg-gradient-to-r from-pink-400 to-orange-500 text-white",
    "transparan": "bg-transparent",
  };

  const sizeClasses = {
    "small": "text-xs",
    "medium": "text-sm",
    "large": "text-lg",
    "x-large": "text-xl",
    "xx-large": "text-2xl",
  };

  const borderClasses = {
    "border-laravel": "border-2 border-[#F05340] text-[#F05340]",
    "border-tailwind": "border-2 border-[#38BDF8] text-[#38BDF8]",
    "border-react": "border-2 border-[#61DBFB] text-[#61DBFB]",
    "border-bootstrap": "border-2 border-[#563D7C] text-[#563D7C]",
    "border-nextjs": 'border-2 border-[#BDBDBD] text-[#BDBDBD]',
    "border-postgresql": "border-2 border-[#336791] text-[#336791]",
    "none": "",
  };

  const sizeContainerClasses = {
    sm: "px-2 py-0.5",
    md: "px-3 py-1",
    lg: "px-4 py-1",
    xl: "px-6 py-2",
  };

  return (
    <div className={clsx("font-semibold rounded-lg", variantClasses[variant], borderClasses[border], sizeContainerClasses[sizeContainer], sizeClasses[size])}>
      {text}
    </div>
  );
};

export default memo(Badge);