/**
 * Convert JWT expiration date to a readable format
 * @param exp - JWT expiration timestamp
 * @returns Converted exp in days
 */

export function jwtExpirationDateConverter(exp: number): number{
  const currentTime = Math.floor(Date.now() / 1000);
  const secondsToExpiration = exp - currentTime;
  const secondsInADay = 86400; // 60 seconds * 60 minutes * 24 hours
  const daysToExpiration =secondsToExpiration / secondsInADay 
    return daysToExpiration
}
