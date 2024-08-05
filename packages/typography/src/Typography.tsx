import React from "react";

type TypographyProps = {
    variant: "title" | "subtitle";
    variantColor: string;
    variantBold: "light" | "medium" | "bold"
    children: string;
}

export const Typography = ({ variant, children, variantColor, variantBold }: TypographyProps) => {
    const boldVariant = {
        light: 300,
        medium: 500,
        bold: 700
    }

    const headVariants = {
        title: <h1 style={{ color: variantColor, fontWeight: boldVariant[variantBold] }}>{children}</h1>,
        subtitle: <h3 style={{ color: variantColor, fontWeight: boldVariant[variantBold] }}>{children}</h3>
    }
    return headVariants[variant]
}