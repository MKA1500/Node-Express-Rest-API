         $(document).ready(function() {
			
            $("#driver").click(function(event){
               $.getJSON('contributors.json', function(jd) {
                  $('.tr').html('<td>' + jd[0].nickname + '</td>');
                  $('.tr').append('<td>' + jd[0].team+ '</td>');
                  $('.tr').append('<td>' + jd[0].contributions + '</td>');
               });
            });
				
         });
