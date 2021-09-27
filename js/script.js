import $ from 'jquery'
import Principal from './classes/principal';

//Instanciando classe com funções
const principal = new Principal();

//Evento de levantar label ao clicar no input
const inputemail = document.querySelector('#email');
inputemail.addEventListener('focus', () => principal.levantarLabel('label[for="email"]', 'input_ativo'))
const inputsenha = document.querySelector('#senha');
inputsenha.addEventListener('focus', () => principal.levantarLabel('label[for="senha"]', 'input_ativo'))

//Aplicar validação para voltar input ao normal
principal.retirarLabelAtivo('email', 'input_ativo')
principal.retirarLabelAtivo('senha', 'input_ativo')

    
$('[data-modal="container"]').on('click', function(elem){
    console.log($(this))
    const data = elem.target.dataset.modal
    if (data == 'container' || data == 'fechar'){
        $(this).hide();
    }
})

$('[data-corpo="abrirmodal"').on('click', function(){
    $('[data-modal="container"]').show();
})

