<link rel="stylesheet" href="https://cdn.rawgit.com/rpatel4/teacableIntegrationTest/master/css/all-styles.css">
<script >
var locUrl=window.location.href;
if (locUrl.indexOf("stage-two")>-1|| locUrl.indexOf("stage-three")>-1|| locUrl.indexOf("stage-four")>-1){
document.getElementById("curriculum").style.display="none"
};
else{
document.getElementById("curriculum").style.display="block"
}


    $(document).ready(function() {
/*Homepage*/ 

            $("#corsecDesc1").on("click", function() {
                //alert("block1");
                $("#img1").css("display", "block");
                $("#img3").css("display", "none");
                $("#img2").css("display", "none");
                $("#corsecDesc3").css({
                    "color": "#000",
                    "border-left": "4px solid #000"
                });
                $("#corsecDesc1").css({
                    "color": "#fff",
                    "border-left": "4px solid #fff"
                });
                $("#corsecDesc2").css({
                    "color": "#000",
                    "border-left": "4px solid #000"
                });
            });
            $("#corsecDesc2").on("click", function() {
                //alert("block2");
                $("#img2").css("display", "block");
                $("#img1").css("display", "none");
                $("#img3").css("display", "none");
                $("#corsecDesc1").css({
                    "color": "#000",
                    "border-left": "4px solid #000"
                });
                $("#corsecDesc2").css({
                    "color": "#fff",
                    "border-left": "4px solid #fff"
                });
                $("#corsecDesc3").css({
                    "color": "#000",
                    "border-left": "4px solid #000"
                });

            });
            $("#corsecDesc3").on("click", function() {
                //alert("block3");
                $("#img3").css("display", "block");
                $("#img1").css("display", "none");
                $("#img2").css("display", "none");
                $("#corsecDesc1").css({
                    "color": "#000",
                    "border-left": "4px solid #000"
                });
                $("#corsecDesc3").css({
                    "color": "#fff",
                    "border-left": "4px solid #fff"
                });
                $("#corsecDesc2").css({
                    "color": "#000",
                    "border-left": "4px solid #000"
                });

            });


            /*block_curicullum*/



            size_li = $(".section-list li").size();
            x = 3;
            $('.section-list li:lt(' + x + ')').show();
            $('#loadMore').click(function() {
                x = (x + 15 <= size_li) ? x + 15 : size_li;
                $('.section-list li:lt(' + x + ')').show();
                $('#loadMore').hide();
                $('#showLess').show();
            });
            $('#showLess').click(function() {
                x = (x - 15 < 0) ? 3 : x - 2;
                $('.section-list li').not(':lt(' + x + ')').hide();
                $('#showLess').hide();
                $('#loadMore').show();
            });

            /*footer*/
            //Check to see if the window is top if not then display button

            $(window).scroll(function(){

            		if ($(this).scrollTop() > 100) {

            $('.scrollToTop').fadeIn();} 
            else {
            			$('.scrollToTop').fadeOut();}
            	
            });
            	
            //Click event to scroll to top
            	$('.scrollToTop').click(function(){
            $('html, body').animate({scrollTop : 0},800);
            return false;
            });

            });

 </script>


  
  
  