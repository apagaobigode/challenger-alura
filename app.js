let amigos = [];

function adicionarAmigo() {
    const nomeAmigo = document.getElementById('amigo').value.trim();

    if (nomeAmigo) {
        if (amigos.includes(nomeAmigo)) {
            alert('Este amigo já foi adicionado.');
        } else {
            amigos.push(nomeAmigo);
            atualizarLista();
            document.getElementById('amigo').value = '';
        }
    } else {
        alert('Por favor, digite o nome de um amigo!');
    }
}

function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.textContent = '';

    amigos.forEach((amigo, index) => {
        const item = document.createElement('li');
        item.textContent = amigo;

        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = '❌';
        botaoRemover.classList.add('btn-remove');
        botaoRemover.onclick = () => removerAmigo(index);

        item.appendChild(botaoRemover);
        lista.appendChild(item);
    });
}

function removerAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('É necessário pelo menos dois amigos para sortear.');
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const nomeSorteado = amigos[indiceSorteado];

    document.getElementById('nomeSorteado').textContent = `O amigo secreto é: ${nomeSorteado}`;
}

function limparLista() {
    amigos = [];
    atualizarLista();
    document.getElementById('nomeSorteado').textContent = '';
}
