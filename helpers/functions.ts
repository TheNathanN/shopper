export const formatSlug = (slug: string) =>
  slug.replace("-", " ").toUpperCase();

export const pluralCheck = (num: number) => (num !== 1 ? "s" : "");

export const callPopup = (
  setPopup: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setPopup(true);
  console.log("true");
  setTimeout(() => {
    setPopup(false);
    console.log("false");
  }, 15000);
};
