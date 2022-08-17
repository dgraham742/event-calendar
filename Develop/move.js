var todayDate = moment().format('MM DD YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function () {
    $(".saveBtn").on("click", function (event) {
        debugger
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    
    });

    function timeTracker() {
        var timeNow = moment().hours();
        //loop over time block until
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").spit("hour")[1]);
            if (timeNow > blockTime) {
                $(this).removeClass("future")
            }
        })
    }
});
