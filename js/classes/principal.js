import $ from 'jquery';
export default class Principal {
    constructor(){
        
    }

    retirarLabelAtivo(id_input, classe_label) {
        $('body').on('click', function(elem){
            const id_item = elem.target.getAttribute('id')
            if ( id_item != id_input){
                if ($('#'+id_input).parent().find('label').hasClass(classe_label)
                    && $('#'+id_input).val() == '') {
                    $('#'+id_input).parent().find('label').removeClass(classe_label)
                }
            }
    
        })
    }

    levantarLabel(label_input, classe){
        const label = document.querySelector(label_input);
        label.classList.add(classe);
    }
}