$(document).ready(function(){
    
    $('i').click(function() {
        var search = $('input').val();
        
        $.ajax({
            url: "https://api.twitter.com/1.1/search/tweets.json",
            data: {
                q: search
            },
            success: function(response){
                console.log(response);
            }
        })
    });
    
    
    
});

























