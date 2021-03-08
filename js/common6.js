(function(){ 
	$("#groupName").focusout(function(){
		var nickname = $(this).val();
		$.post( "js.php", { nickname: nickname } )
			.done(function( data ){
				if (data != "") {
					data = $.parseJSON(data);
					var arrays = $("#group").children();
					for (var i = 0; i < arrays.length; i++) {
						arrays[i].text = data[i];
					}
				}
			})
	});
}())

function checkprice() {
	var msg = $('#form').serialize();
	$.ajax({
		type: 'POST',
		url: 'https://freddstudio.ru/lite/donate/buy.php',
		data: msg+'&checkprice=1',
		success: function(data) {
			$('#buyclick').html(data);
			$('#buyclick1').html(data);
		}
	});
};

$('#donatebuy').on('show.bs.modal', function (event) {
	var button = $(event.relatedTarget)
	var img = button.data('img')
	var name = button.data('name')
	var price = button.data('price')
	var recipient = button.data('group')
	var modal = $(this)
	$('#setNick').html('<input type="text" class="form-control" style="border-radius: 20px;" name="nickname" placeholder="Введите свой ник с сервера" required>')
	$('#setPromo').html('<input type="text" class="form-control" style="margin-top: 10px; border-radius: 20px;" name="promocode" placeholder="Введите промокод (Если есть)">')
	modal.find('.modal-body #group').val(recipient)
	modal.find('.modal-body #nickname').val('')
	$('#img').html('<div style="width: 120px; height: 106px; margin: 10 auto; background: url(img/other/' + img + ') no-repeat; background-size: auto 106px; background-position: center;"></div>')
	$('#result').html('<h4 class="modal-title" id="exampleModalLabel"><font color=#c8c8c8><i class="fa fa-cart-arrow-down"></i> Покупка "' + name + '"</font></h4>')
	$('#buyclick').html('<br><a><font color=#c8c8c8>Заполните данные</font></a>')
	$('#buyclick1').html('<br><a><font color=#c8c8c8>Заполните данные</font></a>')
})

$('#modalOp').on('show.bs.modal', function (event) {
	var button = $(event.relatedTarget)
	var header = button.data('header')
	var recipient = button.data('description')
	var modal = $(this)
	$('#header').html('<font color=#c8c8c8><h5 class="modal-title" id="exampleModalLabel"><i class="fas fa-gem"></i><font color=#c8c8c8> Описание товара "' + header + '"</font></h5></font>')
	$('#description').html(recipient)
})