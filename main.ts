let pakman = game.createSprite(2, 2)
let janaria = game.createSprite(4, 4)
let mamua = game.createSprite(2, 2)
pakman.set(LedSpriteProperty.Blink, 100)
mamua.set(LedSpriteProperty.Brightness, 50)
janaria.set(LedSpriteProperty.Brightness, 10)
basic.forever(function () {
    mamua.move(1)
    basic.pause(500)
    mamua.ifOnEdgeBounce()
})
basic.forever(function () {
    if (input.acceleration(Dimension.X) > 200) {
        pakman.change(LedSpriteProperty.X, 1)
    }
    if (input.acceleration(Dimension.X) < 200) {
        pakman.change(LedSpriteProperty.X, -1)
    }
    if (input.acceleration(Dimension.Y) > 200) {
        pakman.change(LedSpriteProperty.X, 1)
    }
    if (input.acceleration(Dimension.Y) < 200) {
        pakman.change(LedSpriteProperty.X, -1)
    }
})
