$(document).ready(function(){
  
  function getData(data) {
    var tweets = []; 

    data.statuses.forEach(function(val) {
      tweets.push(val);
    })
    
    return tweets;
  }
  
  function createTweets(tweets) {
    
    $('.box').each(function(i, obj) {
      var profileImage = tweets[i].user.profile_image_url;
      var name = tweets[i].user.name;
      var handle = tweets[i].user.screen_name;
      var  message = tweets[i].text;
      
      $(this).find('.header img').attr('src', profileImage);
      $(this).find('.name').text(name);
      $(this).find('.handle').text('@' + handle);
      $(this).find('.content').text(message);
    });
  }
  
  
  $('i').click(function() {
    //animates input to top of screen
    $('.input').addClass('input-transition');
    // $('input').val('');
    $('.input i').css({
      'bottom': '3px',
      'right': '20px'
    });
    //fadeIn tweets
    $('.tweets-container').css('height', '400px').addClass('tweets-animation');
    
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
        $('input').val('');
        createTweets(getData(data));
      }
    }) //end ajax
    
  })  //end click 
});

























