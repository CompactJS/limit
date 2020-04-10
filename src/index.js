export const limit = (value, max) => {
  if (typeof value !== 'number')
    throw 'limit: Parameter "value" needs to be a number.';
  if (typeof max !== 'number' || max <= 0)
    throw 'limit: Parameter "max" needs to be a positive number.';
  return (value % max) + (value < 0 ? max : 0);
};
