//==========================================
function view_win(){
  var str = document.getElementById('txt').innerHTML = tinyMCE.activeEditor.getContent();
  $('#txt_vv').html(str);
  //-------------
  str = $('#zag').val();
  $('#txt_zag').html(str);
};
//==========================================
function load_win(ind){
  //---------------------------
  $.post("func.php",
       {type:'load',
        id: ind},
         function(data)
         {
           var obj = jQuery.parseJSON(data);

           document.getElementById('txt').innerHTML = tinyMCE.activeEditor.setContent('');
           document.getElementById('txt').innerHTML = tinyMCE.activeEditor.insertContent(obj[1].text);
           $('#sh').val(obj[1].sh);
           $('#dl').val(obj[1].dl);
           $('#zag').val(obj[1].name);
         });
   //--------------------------
  indV = ind;
};
//=========================================
function save_win(){
    var str = document.getElementById('txt').innerHTML = tinyMCE.activeEditor.getContent();
    var zag = $('#zag').val();
    var sh = $('#sh').val();
    var dl = $('#dl').val();
 //---------------------------
 $.post("func.php",
      {type:'save',
       txt: str,
       zag: zag,
       sh: sh,
       dl: dl,
       id: indV},
        function(data)
        {
            alert(data);
          });
  //--------------------------
};
