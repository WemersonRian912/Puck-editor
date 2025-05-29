import { heroBannerSchema } from "./heroBanner";
import { HeroBanner } from "../components/HeroBanner";

export const puckComponents = {
    HeroBanner: {
        render: HeroBanner,
        schema: heroBannerSchema,
        category: "Banners",
    },
};
