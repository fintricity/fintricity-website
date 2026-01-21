"use client"

import * as React from "react"

export const Badge = ({ children, className = "", variant, ...props }: any) => {
  const baseClasses = "inline-flex items-center rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wider transition-colors";
  const variants: any = {
    default: "border-transparent bg-kendra-blue text-white",
    secondary: "border-transparent bg-gray-100 text-gray-900",
    outline: "border-kendra-blue/30 text-kendra-blue bg-kendra-blue/5",
    plum: "border-transparent bg-kendra-plum/10 text-kendra-plum",
  };
  const classes = `${baseClasses} ${variants[variant || "default"]} ${className}`;
  return <div className={classes} {...props}>{children}</div>;
};
