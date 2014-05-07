var $form = $('#formulario'),
	$titulo = $('#titulo'),
	$url = $('#url'),
	$botton = $("#mostrar-form");
	$list = $('#contenido');
	$post = $('.item').first();

if(localStorage.getItem('autosave')){
	$titulo.val(sessionStorage.getItem('titulo'));
	$url.val(sessionStorage.getItem('url'));
}


function mostrarOcultarFormulario(){
	$form.slideToggle();
	$list.slideToggle();
	return false;
}

var id = setInterval(function(){
	sessionStorage.setItem('titulo', $titulo.val());
	sessionStorage.setItem('url', $url.val());
}, 1000);

function agregarPost(){
	var url = $url.val(),
		titulo = $titulo.val(),
		clone = $post.clone();

	clone.find('.titulo_item a')
		.text(titulo)
		.attr('href', url);

	clone.hide();

	$list.prepend(clone);
	mostrarOcultarFormulario();
	//clone.fadeIn();
	$titulo.val('');
	$url.val('');
	clone.slideDown();
	return false;
}

// Eventos
//$botton.click(mostrarFormulario);
$('#publicar_nav a').click( mostrarOcultarFormulario );
$form.on('submit', agregarPost)
//$(".item").click(function(){alert("ouch")});