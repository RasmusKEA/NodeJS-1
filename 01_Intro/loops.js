const favoriteThings = ["Cleo", 420, true];

favoriteThings.forEach((item, index, array) => {
    let replace = "Oh I like "
    array[index] = replace + item
})

console.log(favoriteThings)



