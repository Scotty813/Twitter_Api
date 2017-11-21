$(document).ready(function(){
  
  function generateTweets(data) {
    var html = '';
    //response objects
    var tweets = data.statuses;
    
    html += '<ul class="tweets-list">';
    //grab text in each tweet
    for(var i = 0; i <tweets.length; i++) {
      html += '<li>' + tweets[i].text + '</li>';
    }
    html+= '</ul>';
    return html;
  }
  
  $('i').click(function() {
    $('.input').addClass('input-transition');
    $('i').addClass('i-transition');
    
    // save search arguments
    var search = {
      q: $('input').val(),
      count: 3,
      type: "popular"
    }
    
    $.ajax({
      url: "php/getTweets.php",
      type: 'GET',
      dataType: 'json',
      data: {
        q: search.q,
        count: search.count,
        result_type: search.type
      },
      success: function(data) {
        $('.overlay').append(generateTweets(data));
      }
    }) //end ajax
    
  })  //end click 
});

























