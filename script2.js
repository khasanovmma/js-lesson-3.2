// togri yozilgan xaxaxaa
for (var i = 11; i > 10; i++) {
    var a = prompt('Введите число:');
    if (a <= 0) {
        alert('Не определено.')
    }
    else if (a % 2 == 0) {
        nalert('Введенное число четное.');
    }
    else if (a % 2 !== 0 && a >= 0) {
        alert('Введенное число нечетное.')
    }
    else {
        alert('Вы ввели не число (Вы ввели символ или не задали число).')
    }
}

