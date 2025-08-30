// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let contador = 0
  for(let i = 0; i < birdsPerDay.length; i++) {
    contador += birdsPerDay[i]
  }
  return contador
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let contador = 0
  let i = week * 7 - 7
  let j = week * 7 
  for(i; i < birdsPerDay[j]; i++) {
    contador += birdsPerDay[i]
  }
  return contador
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {void} should not return anything
 */
export function fixBirdCountLog(birdsPerDay) {
  throw new Error('Remove this line and implement the function');
}
