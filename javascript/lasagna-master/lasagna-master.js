/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(minutesRemaining) {
  if (minutesRemaining === undefined || minutesRemaining === null) {
    return 'You forgot to set the timer.'
  } else if (minutesRemaining === 0) {
    return 'Lasagna is done.'
  } else {
    return 'Not done, please wait.'
  }
}

export function preparationTime(layers, time = 2) {
  return layers.length * time
}

export function quantities(layers) {
  let sauce = 0
  let noodles = 0

  for (const layer of layers) {
    if (layer === 'noodles') {
      noodles += 50
    } else if (layer === 'sauce') {
      sauce += 0.2
    }
  }

  return {noodles: noodles, sauce: sauce}
}

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1])
}

export function scaleRecipe(recipe, desiredServings) {
  let newRecipe = {}

  for (const key of Object.keys(recipe)) {
    newRecipe[key] = recipe[key] / 2 * desiredServings
  }

  return newRecipe
}
