document.addEventListener('DOMContentLoaded', function () {
    const servico = document.getElementById('servico');
    const subcategoria = document.getElementById('subcategoria');
    const subcategoriaSelecao = document.getElementById('subcategoria-selecao');
    const preco = document.getElementById('preco');
    const precoValor = document.getElementById('preco-valor');
    const horario = document.getElementById('horario');

    // Exibe subcategorias e preço de acordo com o serviço selecionado
    servico.addEventListener('change', function () {
        if (this.value === 'massagem') {
            subcategoria.classList.remove('hidden');
            subcategoriaSelecao.innerHTML = `
                <option value="relaxante">Relaxante</option>
                <option value="terapeutica">Terapêutica</option>
                <option value="pintura">Pintura</option>
                <option valeu=""
            `;
        } else {
            subcategoria.classList.add('hidden');
        }

        if (this.value) {
            preco.classList.remove('hidden');
            precoValor.value = 'R$ ' + calcularPreco(this.value);
        } else {
            preco.classList.add('hidden');
        }
    });

    // Carrega horários disponíveis para a data escolhida
    document.getElementById('data').addEventListener('change', function () {
        horario.innerHTML = `
            <option value="08:00">08:00</option>
            <option value="10:00">10:00</option>
            <option value="12:00">12:00</option>
            <option value= "14:00">14:00</option>
        `;
    });

    // Função fictícia para calcular preço do serviço
    function calcularPreco(servico) {
        const precos = {
            cabeleleira: 100,
            manicure: 50,
            sobrancelha: 40,
            massagem: 150,
            esteticista: 120
        };
        return precos[servico] || 0;
    }
});
//funcao para o usuario so digite 11 numeros
function validarCPF(input) {
    // Remove caracteres que não são dígitos
    input.value = input.value.replace(/\D/g, '');

    // Limita a 11 caracteres
    if (input.value.length > 11) {
        input.value = input.value.slice(0, 11);
    }
};
function validarFONE(input) {
    input.value = input.value.replace(/\D/g, '');
    
    if(input.value.length>11){
        input.value = input.value.slice(0,11);
    }

};