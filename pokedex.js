$(document).ready(function(){

    console.log("JQuery is active");
    
    for (var i = 1; i <= 151; i++){
        
        $('#images').append("<img id =" + i + " src=http://pokeapi.co/media/img/" + i + ".png/>");
    }
    
    $('img').click(function(event){
        $.get("http://pokeapi.co/api/v1/pokemon/" + event.target.id + "/", function(result){
            console.log(result)
            
            $('#info').append("<br> <h1>" + result.sprites[0].name + "</h1>");
            
            $('#info').append("<img " + " src=http://pokeapi.co/media/img/" + event.target.id + ".png/>");
            
            var html_str = "";
            html_str += "<h4>Types:</h4>";
            html_str += "<ul>";
            for (var i = 0; i < result.types.length; i++){
                html_str += "<li>" + result.types[i].name + "</li>";
            }
            html_str += "</ul>";
            $('#info').append(html_str);
            
            var html_str = "";
            html_str += "<h4>Height:</h4>";
            html_str += "<ul>";
            html_str += "<li>" + result.height + "</li>";
            html_str += "</ul>";
            $('#info').append(html_str);
            
            var html_str = "";
            html_str += "<h4>Weight:</h4>";
            html_str += "<ul>";
            html_str += "<li>" + result.weight + "</li>";
            html_str += "</ul>";
            $('#info').append(html_str);
        }, 'json');
    })

});