import { match } from "path-to-regexp";

export const getPackageInfoFromUrl = () => {
    const fn = match("/package/:name{/v/:version}");
    const result = fn(window.location.pathname);

    if (!result) return null;
    else {
        return {
            name: result.params.name,
            version: result.params.version || null,
            parsed:
                result.params.name +
                (result.params.version ? `@${result.params.version}` : "")
        };
    }
};
