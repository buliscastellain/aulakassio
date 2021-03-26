$(function(){
    $(':input').css('backgroundColor','yellow');
    $(':text').css('backgroundColor', 'gray');
    $(':password').css('backgroundColor', 'green');
    $(':radio').parent().css('backgroundColor', '#ff00ff');
    $(':checkbox:checked').parent().css('backgroundColor', 'red');
    //$('#txt').val($('#coisa option:selected').text()); // com ID
    $('#txt').val($('[name="sl"] option:selected').text()); //com name
});