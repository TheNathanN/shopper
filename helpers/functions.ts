export const formatSlug = (slug: string) =>
  slug.replace("-", " ").toUpperCase();

export const pluralCheck = (num: number) => (num !== 1 ? "s" : "");
