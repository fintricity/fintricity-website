"use client"

import * as React from "react"

export const Badge = ({ children, className = "", variant, ...props }: any) => {
  const baseClasses = "inline-flex items-center rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wider transition-colors";
  const variants: any = {
    default: "border-transparent bg-fintricity-navy text-white",
    secondary: "border-transparent bg-fintricity-teal text-white",
    outline: "border-fintricity-navy/30 text-fintricity-navy bg-fintricity-navy/5",
    teal: "border-transparent bg-fintricity-teal/10 text-fintricity-teal",
    cyan: "border-transparent bg-fintricity-cyan/10 text-fintricity-teal",
  };
  const classes = `${baseClasses} ${variants[variant || "default"]} ${className}`;
  return <div className={classes} {...props}>{children}</div>;
};
