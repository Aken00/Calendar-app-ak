$(document).ready(function(){

// Moment.js date and time code variables 
    var tasks = moment().hours();

    function getDate(){
        $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    };

// // each time block is color-coded to indicate whether it is in the past, present, or future
    function hourColor(){
        $("textarea").each(function(){
            var blockHour = $(this).attr("id")
            var blockNumber =parseInt(blockHour);
            if (blockNumber === hour){
                $(this).addClass("present");
            } else if (blockNumber < hour){
                $(this).addClass("past");
            } else {
                $(this).addClass("future");
            };
        });
    };




// // Date and time code variables

// // Save button for saving to local storage

// // Click into a time block and enter an event

// // The text for that event is saved in local storage

// // The saved events persist.
