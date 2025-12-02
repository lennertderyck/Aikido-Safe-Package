export const getPackageNameFromSlugArray = <T extends string[]>(slug: T, ignoreItemsFromRight: number = 0): string => {
  return slug.slice(0, slug.length - ignoreItemsFromRight).join('/')
}