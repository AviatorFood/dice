input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    num = randint(1, 6)
})
let num = 0
num = 0
basic.forever(function () {
    basic.showNumber(num)
})
