const display = document.querySelector('.display')

function isNum(val) {

    return isNaN(val)
}

function clear() {

    display.value = '';
}

function del() {

    display.value = display.value.slice(0, -1);
}

function eq() {

    try {

        let conta = display.value;

        conta = eval(conta);

        if (isNum(conta)) {

            alert('Conta inválida');
            return;
        }

        display.value = conta;

        console.log(typeof conta);

    } catch (e) {

        alert('Conta inválida');
        return;

    }


}

function pressionaEnter () {

    display.addEventListener('keyup', e => {

        if (e.keyCode === 13) {

            eq();
        }

    });
}

document.addEventListener('click', function (e) {

    const el = e.target;

    if (el.classList.contains('btn-num')) {

        const contentButton = el.innerText;

        display.value += contentButton;

        display.focus();

    }

    if (el.classList.contains('btn-clear')) {

        clear();
        display.focus();

    }

    if (el.classList.contains('btn-del')) {

        del();
        display.focus();

    }

    if (el.classList.contains('btn-eq')) {

        eq();
        display.focus();

    }

});

pressionaEnter();
