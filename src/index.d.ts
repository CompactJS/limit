declare module '@compactjs/limit';
/**
 * Limits value to max.
 * Values over max start with 0. Values below 0 begin with max.
 * @example limit(25, 24); // returns 1
 */
export function limit(value: number, max: number): number;
