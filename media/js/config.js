$(document).ready(function(){
    resolucao();
	
	var SPMaskBehavior = function (val){ return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';},spOptions = { onKeyPress: function(val, e, field, options) { field.mask(SPMaskBehavior.apply({}, arguments), options);} };
    $('[mask=telefoneBr]').mask(SPMaskBehavior, spOptions); 
	
	$('form.formInscricao').submit(function(e){
		_this = $(this);
		 _this.find('button').hide();
		_this.find('.formEnviando').css('display','flex');
	});
	
	$('form select[name=segmento_de_negocio]').change(function(e){
		var numeroclientes = $('option:selected', this).attr('numeroclientes');
		if(numeroclientes == 1){
			$('form input[name=total_de_clientes]').prop('required', true).show();
		}else{
			$('form input[name=total_de_clientes]').prop('required', false).hide();
		}
		// console.log(numeroclientes);
		// console.log($(this).val());
		 
	});
	
	
	
	
}); 

$(window).resize(function(){ resolucao(); });

function resolucao(){
	if($(this).width() <= 1000){ $('html').addClass('_320'); }else{ $('html').removeClass('_320'); }
	if($(this).width() > 1000){ $('html').addClass('_1000');  }else{ $('html').removeClass('_1000'); }
}