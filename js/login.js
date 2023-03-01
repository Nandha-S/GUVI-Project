$(function () {

    $("button").click(function () {
        $.ajax({
            url: "php/login.php",
            type: 'post',
            data: {
                email: $('#email').val(),
                password: $('#password').val(),
            },
            success: function (data) {
                // window.location.href="display.php";
                console.log(data);
                if (data == 0) {
                    $('#status').text("Logged In Successfully");
                    $('#showmodal').modal('show');
                    window.location = "profile.html";
                } else {
                    $('#status').text("Error");
                    $('#showmodal').modal('show');
                }
            }
        });
    });

});
function hideModal() {
    $('#showmodal').modal('hide');
}