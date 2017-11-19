$(document).ready(function(){
    
    $('i').click(function() {
      // save search input
      var searchTerm = $('input').val();
      
      $.ajax({
        type: 'GET',
        url: "../php/index.php",
        dataType: 'JSON',
        data: {
          searchTerm: searchTerm
        },
        success: function(data) {
          console.log(data);
        }
      })
      
    })
});

























