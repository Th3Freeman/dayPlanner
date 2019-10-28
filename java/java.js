var currentDateAndTime = Date(Date.now());
var currentHour = new Date().getHours();

$(document).ready(function () {
    loadPlans();
});

$(".current_date").text(currentDateAndTime);

function colorTime(x) {
    if (currentHour > x) {
        $("#"+x).addClass("bg-secondary");
        $("#"+x).removeClass("bg-success bg-danger");
    }
    else if (currentHour < x) {
        $("#"+x).addClass("bg-success");
        $("#"+x).removeClass("bg-secondary bg-danger");
    }
    else if (currentHour = x) {
        $("#"+x).addClass("bg-danger");
        $("#"+x).removeClass("bg-secondary bg-success");
    };
};


function savePlans() {
    localStorage.am9 = $("#9").val();
    localStorage.am10 = $("#10").val();
    localStorage.am11 = $("#11").val();
    localStorage.pm12 = $("#12").val();
    localStorage.pm1 = $("#13").val();
    localStorage.pm2 = $("#14").val();
    localStorage.pm3 = $("#15").val();
    localStorage.pm4 = $("#16").val();
    localStorage.pm5 = $("#17").val();

};

function loadPlans() {
    $("#9").val(localStorage.am9);
    $("#10").val(localStorage.am10);
    $("#11").val(localStorage.am11);
    $("#12").val(localStorage.pm12);
    $("#13").val(localStorage.pm1);
    $("#14").val(localStorage.pm2);
    $("#15").val(localStorage.pm3);
    $("#16").val(localStorage.pm4);
    $("#17").val(localStorage.pm5);
};

function clearLocalStorage() {
    $("#9").val("");
    $("#10").val("");
    $("#11").val("");
    $("#12").val("");
    $("#13").val("");
    $("#14").val("");
    $("#15").val("");
    $("#16").val("");
    $("#17").val("");
    savePlans();
    return localStorage = null;
};


colorTime(9)
colorTime(10)
colorTime(11)
colorTime(12)
colorTime(13)
colorTime(14)
colorTime(15)
colorTime(16)
colorTime(17)
