/**
 * Limits value to max.
 * Values over max start with 0. Values below 0 begin with max.
 * @example limit(25, 24); // returns 1
 */
export function limit(value: number, max: number): number {
  if (typeof value !== 'number')
    throw 'limit: Parameter "value" needs to be a number.';
  if (typeof max !== 'number' || max <= 0)
    throw 'limit: Parameter "max" needs to be a positive number.';
  return (value % max) + (value < 0 ? max : 0);
}
