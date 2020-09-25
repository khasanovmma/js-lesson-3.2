for (var i = 11; i > 10; i++) {
    var a = prompt('Введите число:');
    do {
        if (a <= 0) {
            var c = alert('Не определено.')
        }
        else if (a % 2 == 0) {
            var b = alert('Введенное число четное.');
        }
        else if (a % 2 !== 0 && a >= 0) {
            var c = alert('Введенное число нечетное.')
        }
        else {
            var d = alert('Вы ввели не число (Вы ввели символ или не задали число).')
        }
    } while (b || c || d)
}

