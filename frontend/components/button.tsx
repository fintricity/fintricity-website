"use client"

import * as React from "react"
import Link from "next/link" // Keep Link import if Button can render as a link

// Utility to combine class names
const cn = (...classes: string[]) => classes.filter(Boolean).join(' ');

export const Button = ({ children, className = "", variant, size, asChild, ...props }: any) => {
  const baseClasses = "inline-flex items-center justify-center rounded-md text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background active:scale-95";
  const variants: any = {
    default: "bg-fintricity-navy hover:bg-fintricity-navy/90 text-white shadow-md",
    destructive: "bg-red-600 text-white hover:bg-red-700 shadow-lg",
    outline: "border-2 border-fintricity-navy text-fintricity-navy hover:bg-fintricity-navy hover:text-white",
    secondary: "bg-fintricity-teal text-white hover:bg-fintricity-teal/90 shadow-sm",
    ghost: "hover:bg-fintricity-light-gray hover:text-fintricity-navy",
    plum: "bg-fintricity-navy hover:bg-fintricity-navy/90 text-white shadow-md", // Keeping for compatibility
    cyan: "bg-fintricity-cyan hover:bg-fintricity-cyan/90 text-fintricity-navy shadow-md font-bold", // Primary CTA Accent
  };
  const sizes: any = {
    default: "h-10 px-4 py-2",
    sm: "h-9 px-3",
    lg: "h-11 px-8",
    icon: "h-10 w-10",
  };

  const classes = `${baseClasses} ${variants[variant || "default"]} ${sizes[size || "default"]} ${className}`;
  
  if (asChild) {
    // Assuming 'asChild' will pass a Link component or similar
    // We need to clone the child and apply our classes to it
    if (React.isValidElement(children)) {
      return React.cloneElement(children, { 
        className: cn((children as any).props.className, classes, "hover:scale-105 hover:shadow-lg"), 
        ...props 
      });
    }
    return children; // Fallback if children is not a valid React element
  }
  
  return <button className={`${classes} hover:scale-105 hover:shadow-lg`} {...props}>{children}</button>;
};