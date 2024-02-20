
function deneme(sql, callback, error, failure, loading, button) {

    var sqlStr = { 'sql': '' + sql + '' };

    $.ajax({
        type: "POST",
        url: 'http://10.16.17.5:91/api/GetDataJSON3',
        data: sqlStr,
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        dataType: "json",
        async: true,
        headers: { "Authorization": "Bearer UL3VfIY6CU5dC2yJXf4dn_-G_mN6_vXzMYYQDzj2iEZb-IfdHqjZNKBKJGdS2xIkKtdWZUawkOJPRKAR4Li3e3xYkecrdHjyQOh2UI0RnEGbLZBFg6hC-YjESO2eK2e4RKR6_1U8gf6DsCimWYAmMthUtrJLmVzOgiEOOBQBxacohGTLLIJqnbsXTYdcpHGyjYTeOGfxbZSHuthPnEP6DbtocziUWTQ18xAT9ivddsKV9a6hbCImV3yYNd4lgGUb4OWEZb0jv5p-lPJVdTRcfdl29iZDh9RxOKxy9Dfyjz_igLhXEO9hY6zxr2z4n1ABR4C6mT2RKRfOHiuo8NgNVg" },

        success: function (response) {
            callback(response);

            loading.style.display = 'none';
            button.style.display = 'block';
        },

        failure: function () {
            failure();

            loading.style.display = 'none';
            button.style.display = 'block';
        },

        error: function () {
            error();

            loading.style.display = 'none';
            button.style.display = 'block';
        },

    });
}




















