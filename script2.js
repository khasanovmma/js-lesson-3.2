// togri yozilgan xaxaxaa
for (var i = 1; i > 0; i++) {
    var a = prompt('Введите число:')
    if (a <= 0) {
        alert('Не определено.')
    }
    else if (a % 2 == 0) {
        alert('Введенное число четное.')
    }
    else if (a % 2 !== 0 && a >= 0) {
        alert('Введенное число нечетное.')
    }
    else {
        alert('Вы ввели не число (Вы ввели символ или не задали число).')
    }
}

