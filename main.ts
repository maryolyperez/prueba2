let y = 0
let x = 0
input.onButtonPressed(Button.A, function () {
    y = 0
    x = 4
    for (let index = 0; index < 5; index++) {
        for (let index = 0; index < 6; index++) {
            y = x + y
        }
    }
    basic.showNumber(y)
})
basic.forever(function () {
	
})
