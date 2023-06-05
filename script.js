let a = ''
let b = ''
let sign = ''
// знак операций 
let finish = ''

let digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
const action = ['-', '+', 'X', '/']


const out = document.querySelector('.calc_screen p')

function clearAll() {
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    // нажата не кнопка
    if (!event.target.classList.contains('btn')) return;
    // нажата кнопка clearAll ac
    if (event.target.classList.contains('ac')) return;

    out.textContent = '';
    // получаю нажатую кнопку
    const key = event.target.textContent

    // если нажата от 0-9
    if (digit.includes(key)) {
        if (b === '' && sign === '') {
            a += key;
            // console.log(a, b, sign)
            out.textContent = a;
        }
        else if (a!=='' && b!== '' && finish) {
            b = key;
            finish = false;
            out.textContent = b; 
        }
        else{
            b += key;
            out.textContent = b;
        }
        console.table(a, b, sign)
        return 
    }

    // если нажата клавиша
    if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.table(a, b, sign)
        return
    }

    if (key === '=') {
        if (b === '') b = a;
        switch (sign) {
            case '+':
                a = (+a) + (+b);
                break;
            case '-':
                a = a - b;
                break;
            case 'X':
                a = a * b;
                break;
            case '/':
                if (b === '0') {
                    out.textContent = 'Ошибка';
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = a / b;
                break;d
        }
        finish = true;
        out.textContent = a;
        console.table(a, b, sign);
    }
}