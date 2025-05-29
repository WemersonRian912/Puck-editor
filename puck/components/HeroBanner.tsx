import React from "react";

type HeroBannerProps = {
    title: string;
    subtitle: string;
    imageUrl: string;
};

export const HeroBanner = ({ title, subtitle, imageUrl }: HeroBannerProps) => (
    <section style={{ padding: "2rem", textAlign: "center", background: "#f9f9f9" }}>
        <img src={imageUrl} alt="" style={{ maxWidth: "100%", height: "auto" }} />
        <h1>{title}</h1>
        <p>{subtitle}</p>
    </section>
);
