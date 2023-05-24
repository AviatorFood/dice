input.onGesture(Gesture.Shake, function () {
    num = randint(1, 6)
})
let num = 0
num = 0
basic.forever(function () {
    if (num < 0) {
        basic.showNumber(num)
    } else {
        basic.clearScreen()
    }
})
