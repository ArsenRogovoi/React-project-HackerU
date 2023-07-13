const normalizeName = (name) => {
  if (name.middle) return `${name.first} ${name.middle} ${name.last}`;
  return `${name.first} ${name.last}`;
};
export default normalizeName;
