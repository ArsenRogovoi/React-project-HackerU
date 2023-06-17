// file of algorithms that will help us
// to handle arrays and objects.

export const makeFirstLetterCapital = (string) => {
  const term = string.toLowerCase().trim();
  return term.charAt(0).toUpperCase() + term.slice(1);
};
