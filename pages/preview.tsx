import React from "react";
import { Puck } from "@measured/puck";
import { puckComponents } from "../puck/schemas";

const initialContent = [
    {
        type: "HeroBanner",
        props: {
            title: "Bem-vindo ao Editor!",
            subtitle: "Este é o componente HeroBanner.",
            imageUrl: "https://via.placeholder.com/800x300",
        },
    },
];

export default function PreviewPage() {
    return (
        <div style={{ padding: "2rem" }}>
            <h2>Editor Puck</h2>
            <Puck
                config={{
                    components: puckComponents,
                }}
                data={{
                    content: initialContent,
                }}
            />
        </div>
    );
}
