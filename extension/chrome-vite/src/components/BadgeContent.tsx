import { getPackageInfoFromUrl } from "@/lib/utils";
import { FC } from "react";

const BadgeContent: FC = () => {
    const packageInfo = getPackageInfoFromUrl();

    return (
        <button
            title={`Security status for ${packageInfo?.parsed}`}
            style={{
                width: "300px",
                display: "block",
                cursor: "pointer",
                appearance: "none",
                border: "none",
                background: "none"
            }}
            onClick={() => {
                window.open(
                    `https://packageguard-jung-gent.vercel.app/package/${
                        packageInfo?.name
                    }/v/${packageInfo?.version || "latest"}`,
                    "_blank"
                );
                // chrome.runtime.sendMessage({
                //     action: "OPEN_SIDE_PANEL",
                //     packageInfo: packageInfo
                // });
            }}
        >
            <img
                src={`https://packageguard-jung-gent.vercel.app/badge/${
                    packageInfo?.name
                }/v/${packageInfo?.version || "latest"}/badge.svg`}
                style={{ width: "100%", display: "block" }}
            />
        </button>
    );
};

export default BadgeContent;
