input.onSound(DetectedSound.Loud, function () {
    lit = !(lit)
})
input.onButtonPressed(Button.B, function () {
    lit = true
})
let flicker = 0
let lit = false
lit = true
basic.forever(function () {
    if (lit) {
        lit = true
        basic.showLeds(`
            . . # . .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
        flicker = randint(1, 3)
        if (flicker != 2) {
            led.unplot(2, 0)
            led.plot(flicker, 0)
        }
        basic.pause(200)
    } else {
        basic.clearScreen()
    }
})
