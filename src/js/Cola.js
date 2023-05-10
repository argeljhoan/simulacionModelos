

export function crearDivs(number) {

    console.log(" DIVS ");

    const container = document.querySelector('.container');
    container.innerHTML = '';
    const numero = parseInt(document.getElementById('numero').value);
    for (let i = 0; i < numero; i++) {
        const div = document.createElement('div');
        div.classList.add('item');
        div.textContent = 'Div ' + (i + 1);
        container.appendChild(div);
    }
}