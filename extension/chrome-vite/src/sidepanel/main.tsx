import { getPackageInfoFromUrl } from "@/lib/utils";
import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const App = () => {
    const [height, setHeight] = useState(0);

    const packageInfo = getPackageInfoFromUrl();

    return (
        <iframe
            src={`https://packageguard-jung-gent.vercel.app/package/${
                packageInfo?.name
            }/v/${packageInfo?.version || "latest"}`}
            style={{ width: "100%", height: height + "px", border: "none" }}
            onLoad={() => setHeight(window.document.body.clientHeight)}
        />
    );
};

createRoot(document.body!).render(
    <StrictMode>
        <App />
    </StrictMode>
);
