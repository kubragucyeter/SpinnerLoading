const p = document.querySelector("#p");
const button = document.querySelector("#btn");
const loading = document.querySelector(".loading")
var sql = "SELECT * FROM DCAS.PPROTECCONT";



button.addEventListener("click", () => {

    loading.style.display = 'block';
    document.querySelector("#btn").style.display = 'none';

    p.innerHTML = "";

    deneme(
        sql,

        function (response) {

            p.innerHTML = response
            loading;
            button;
        },

        function (failure) {

            p.innerHTML = "İstek başarısızlığa düştü lütfen kontrol edin";
            loading;
            button;
        },

        function (error) {

            p.innerHTML = "İstek başarısız";
            loading;
            button;
        },
        loading,
        button


    );
});

