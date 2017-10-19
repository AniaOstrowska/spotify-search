
// no way to get access token on front end on localhost
$(document).ready(function () {

    $("#btnSubmit").click(function (event) {

        event.preventDefault();

        var data = $(this).serializeArray();

        data.push({name: "type", value: 'artist'});

        $.ajax({
            type: "GET",
            url: "https://api.spotify.com/v1/search",
            headers: {
                'Authorization': 'Bearer ' + accessToken
            },
            data: $.param(data),
            success: function (data) {
                console.log("SUCCESS : ", data);
            },
            error: function (e) {
                console.log("ERROR : ", e);
            }
        });

    });

});