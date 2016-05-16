$(document).ready(function() {
			
    $.getJSON('contributors.json', function(jd) {
		
		jd.sort(function(a, b){
        return b.contributions - a.contributions;	
        });				
				
		for (var a = 0; a < jd.length; a++) {   
            $('.tbody-contr').append('<tr><td>' + jd[a].nickname + '</td>' + '<td>' + jd[a].team + '</td>' 
			+ '<td>' + jd[a].contributions + '</td></tr>');
		}
    }); // end getJSON	
   
   
    $("#nickname1").click(function(event){
	  
	  $.getJSON('contributors.json', function(jd) {	
	  $(".tbody-contr").empty();	
	  
		jd.sort(function(i, j){
        return j.nickname - i.nickname;	
        });

		for (var e = 0; e < jd.length; e++) {   
            $('.tbody-contr').append('<tr><td>' + jd[e].nickname + '</td>' + '<td>' + jd[e].team + '</td>' 
			+ '<td>' + jd[e].contributions + '</td></tr>');
		}	
      }); // end getJSON			
    }); // end nickname1
	
    $("#team1").click(function(event){
	  
	  $.getJSON('contributors.json', function(jd) {	
	  $(".tbody-contr").empty();	
	  
		jd.sort(function(i, j){
        return j.team - i.team;	
        });

		for (var h = 0; h < jd.length; h++) {   
            $('.tbody-contr').append('<tr><td>' + jd[h].nickname + '</td>' + '<td>' + jd[h].team + '</td>' 
			+ '<td>' + jd[h].contributions + '</td></tr>');
		}	
      }); // end getJSON			
    }); // end nickname1

    $("#contributions1").click(function(event){
	  
	  $.getJSON('contributors.json', function(jd) {	
	  $(".tbody-contr").empty();	
	  
		jd.sort(function(i, j){
        return j.contributions - i.contributions;	
        });

		for (var k = 0; k < jd.length; k++) {   
            $('.tbody-contr').append('<tr><td>' + jd[k].nickname + '</td>' + '<td>' + jd[k].team + '</td>' 
			+ '<td>' + jd[k].contributions + '</td></tr>');
		}	
      }); // end getJSON			
    }); // end nickname1
	
	
	$("#button-repos").bind('click', function(){
		$(".one").css("display", "none");
		$(".two").css("display", "inline-block");
	});
	
	$("#button-contr").bind('click', function(){
	    $(".two").css("display", "none");
		$(".one").css("display", "inline-block");
	});
});
