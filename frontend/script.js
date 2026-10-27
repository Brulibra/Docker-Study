function incluirProduto() {
    const nome = document.getElementById('nome').value;
    const preco =
   parseFloat(document.getElementById('preco').value);
    fetch('http://localhost:3000/cadprod', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome, preco })
    })
    .then(res => res.text())
    .then(msg => {
    alert(msg);
    listarProdutos(); // Atualiza a listagem após inclusão
    limparCampos();
    })
    .catch(err => {
    console.error('Erro ao incluir produto:', err);
    alert('Erro ao incluir produto. Verifique a conexão com a
   API.');
    });
   }
   function limparCampos() {
    document.getElementById('nome').value = '';
    document.getElementById('preco').value = '';
   }
   function listarProdutos() {
    fetch('http://localhost:3000/listprod')
    .then(res => res.json())
    .then(data => {
    const tbody = document.querySelector('#tabela tbody');
    tbody.innerHTML = '';
    data.forEach(prod => {
    const row =
   `<tr><td>${prod.id}</td><td>${prod.nome}</td><td>${prod.preco}
   </td></tr>`;
    tbody.innerHTML += row;
    });
    })
    .catch(err => {
    console.error('Erro ao listar produtos:', err);
    alert('Erro ao carregar lista de produtos.');
    });
   }
   // Carrega a listagem automaticamente ao entrar na página
window.onload = listarProdutos;