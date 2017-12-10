$(document).ready(function () {

  $('#hideH1').click(function () {
    $('h1').hide();
  });

  $('#showH1').click(function () {
    $('h1').show();
  });

  $('#modifyH1').click(function () {
    $('h1').attr('class', 'changed-text');
  });

  $('#removeH1').click(function () {
    $('h1').remove();
  });

  $('#hideH2').click(function () {
    $('h2').hide();
  });

  $('#showH2').click(function () {
    $('h2').show();
  });

  $('#modifyH2').click(function () {
    $('h2').attr('class', 'changed-text');
  });

  $('#removeH2').click(function () {
    $('h2').remove();
  });

  $('#hideP').click(function () {
    $('p').hide();
  });

  $('#showP').click(function () {
    $('p').show();
  });

  $('#modifyP').click(function () {
    $('p').attr('class', 'changed-text');
  });

  $('#removeP').click(function () {
    $('p').remove();
  });

  $('#hideTable').click(function () {
    $('table').hide();
  });

  $('#showTable').click(function () {
    $('table').show();
  });

  $('#modifyTable').click(function () {
    $('table').attr('class', 'changed-text');
  });

  $('#removeTable').click(function () {
    $('table').remove();
  });

  $('#addNewElements').click(function () {
    var H1 = '<h1>Nuevo elemento H1</h1>';
    var H2 = '<h2>Nuevo elemento H1</h2>';
    var p = '<p>Nuevo elemento p</p>';
    $('h1').after(H1);
    $('p').after(H2);
    $('p').after(p);
  });

  $('*', document.body).each(function () {
    $(this).prepend(document.createTextNode('Padre : <' +
      $(this).parent().get(0).tagName + '> elemento : <' + $(this).get(0).tagName + '> valor: '));
  });

});
