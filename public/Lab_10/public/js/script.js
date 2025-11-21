// JS: pegar dados do formulário e apresentar na página de carros disponíveis
document.addEventListener('DOMContentLoaded', () => {
  const formRapido = document.getElementById('form-rapido');
  const lista = document.getElementById('lista-carros');

  if (formRapido && lista) {
    formRapido.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(formRapido));

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${data.marca}</td>
        <td>${data.modelo}</td>
        <td>${data.ano}</td>
        <td>${Number(data.preco).toFixed(2)}</td>
        <td><span class="muted">Simulação (não salvo no banco)</span></td>
      `;
      lista.prepend(tr);

      // Feedback visual
      formRapido.reset();
      tr.style.outline = '2px solid #22c55e';
      setTimeout(() => (tr.style.outline = 'none'), 1500);
    });
  }

  // JS: edição — exemplo de validação simples
  const formEdicao = document.getElementById('form-edicao');
  if (formEdicao) {
    formEdicao.addEventListener('submit', (e) => {
      const precoInput = formEdicao.querySelector('input[name="preco"]');
      if (precoInput && Number(precoInput.value) < 0) {
        e.preventDefault();
        alert('Preço não pode ser negativo.');
      }
    });
  }
});
