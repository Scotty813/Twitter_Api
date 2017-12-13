$(document).ready(function(){
  
  // function generateTweets(data) {
  //   var html = '';
  //   //response objects
  //   var tweets = data.statuses;
  //   
  //   html += '<ul class="tweets-list">';
  //   //grab text in each tweet
  //   for(var i = 0; i <tweets.length; i++) {
  //     html += '<li>' + tweets[i].text + '</li>';
  //   }
  //   html+= '</ul>';
  //   return html;
  // }
  
  function getData(data) {
    var tweets = []; 
    
    data.statuses.forEach(function(val) {
      tweets.push(val);
    })
    
    return tweets;
  }
  
  
  $('i').click(function() {
    //animates input to top of screen
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
        console.log(data);
        // $('.overlay').append(generateTweets(data));
        console.log(getData(data));
      }
    }) //end ajax
    
  })  //end click 
});

























