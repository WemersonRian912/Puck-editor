export const heroBannerSchema = {
    type: "object",
    label: "Banner Principal",
    fields: [
        {
            type: "text",
            name: "title",
            label: "Título",
        },
        {
            type: "text",
            name: "subtitle",
            label: "Subtítulo",
        },
        {
            type: "image",
            name: "imageUrl",
            label: "Imagem de Fundo",
        },
    ],
};
