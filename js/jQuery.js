//jQuery function to count to days until the wedding
$(document).ready(function() {
    var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
    var firstDate = new Date();
    var secondDate = new Date(2014,09,31);
     
    var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));

    $('h1').text("Aantal dagen tot de bruiloft: " + diffDays);
    $('.progress-bar').css("width", diffDays + "%");
    $('.progress-bar').text(diffDays + "%");
});

