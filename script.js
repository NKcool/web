
const msg = [" hi !", " good morning !", " make me admin "," hi harsh !", " yes what is it"];

document.querySelector(".ri-message-2-line").addEventListener("click",function(){
    $('#div').toggleClass('dark'); 
    $('#heading').text("All Chat");
    $( "#listItem li" ).each(function(index) {
        
        $( this ).text(msg[index])
    });

})
document.querySelector(".ri-contacts-line").addEventListener("click",function(){
    $('#div').toggleClass('dark');
    $('#heading').text("All participants");

    $( "#listItem li" ).each(function(index) {
        index = index+1;
        $( this ).text("participants "+index)
    });

})


document.querySelector(".ri-arrow-up-s-line").addEventListener("click",function(dets){
    $('#div2').toggleClass('dark'); 
   

})