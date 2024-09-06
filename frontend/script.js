document.getElementById('formPessoa').addEventListener('submit', async (event) => {
    event.preventDefault();

    const CPF = document.getElementById('CPF').value;
    const Nome = document.getElementById('Nome').value;
    const Telefone = document.getElementById('Telefone').value;

    const pessoaData = {
        CPF,
        Nome,
        Telefone,
    };

    try {
        const response = await fetch('http://localhost:3000/pessoas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pessoaData)
        });

        const result = await response.json();

        if (response.ok) {
            document.getElementById('message').innerText = 'Pessoa adicionada com sucesso!';
            document.getElementById('formPessoa').reset();
        } else {
            document.getElementById('message').innerText = `Erro: ${result.message}`;
        }
    } catch (error) {
        document.getElementById('message').innerText = 'Erro na comunicação com o servidor.';
    }
});