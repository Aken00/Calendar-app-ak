$(document).ready(function(){

    // Moment.js date and time code variables 
    var hours = moment().hours();

    function getDate(){
        $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    };
    setInterval(getDate,1000);

    // // each time block is color-coded to indicate whether it is in the past, present, or future
    function hourColor(){
        $("textarea").each(function(){
            var blockHour = $(this).attr("id")
            var blockNumber =parseInt(blockHour);
            if (blockNumber === hours){
                $(this).addClass("present");
            } else if (blockNumber < hours){
                $(this).addClass("past");
            } else {
                $(this).addClass("future");
            };
        });
    };
    hourColor();
    setInterval(hourColor,1000);

    // // The text for that event is saved in local storage
    function renderStoredInputs(){
        $(".description").each(function(){
            var textareaId = $(this).attr("id")
            $(this).val(localStorage.getItem(textareaId));
        });
    };
    renderStoredInputs();

    // // The saved events persist
    $(".saveBtn").click(function(){
        var scheduleInputs = $(this).siblings(".textarea").val();
        var inputsLocation = $(this).siblings(".textarea").attr("id");
        localStorage.setItem(inputsLocation,scheduleInputs);
    });


});