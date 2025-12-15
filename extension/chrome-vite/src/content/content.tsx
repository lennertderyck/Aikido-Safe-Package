// Content script that embeds an image on npmjs.com package pages
import BadgeContent from "@/components/BadgeContent";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./content.css";

const getContainer = () => {
    const selector = "#top > div.w-100.ph0-l.ph3.ph4-m";
    const holder = document.querySelector(selector) as HTMLElement | null;
    const container = document.createElement("div");

    if (holder) {
        holder.style.position = "relative";
    }

    container.id = "aikido-safe-package-badge-container";
    container.style.position = "absolute";
    container.style.top = "50%";
    container.style.transform = "translateY(-50%)";
    container.style.right = "0px";

    return holder?.appendChild(container);
};

const container = getContainer();

if (!container) {
    console.log("Could not find container to insert package badge");
} else {
    createRoot(container).render(
        <StrictMode>
            <BadgeContent />
        </StrictMode>
    );
}
