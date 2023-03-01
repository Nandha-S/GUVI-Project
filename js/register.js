$(function () {

    $("button").click(function () {
        $.ajax({
            url: "php/register.php",
            type: 'post',
            data: {
                name: $('#name').val(),
                email: $('#email').val(),
                dob: $('#dob').val(),
                password: $('#password').val(),
            },
            success: function (data) {
                // window.location.href="display.php";
                console.log(data);
                if (data == 0) {
                    $('#status').text("Data Inserted Successfully");
                    $('#showmodal').modal('show');
                    window.location = "login.html";
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