document.addEventListener('DOMContentLoaded', function () {
    const buttonId = "btn";
    const columnId = "column9";

    const button = document.getElementById(buttonId);
    const columnElement = document.getElementById(columnId);



    button.addEventListener("click", () => {
        const loadingData = loadingButton(buttonId, columnId);

        // true: sütun içinde
        // false: full ekran
        // undefined: overlay yok
        const isOverlayActive = true;
        columnElement.innerHTML = "";

        loadingApiOverlay(
            "SELECT * FROM DCAS.PPROTECCONT",
            function () {
                columnElement.innerHTML = "401 (Unauthorized) hatası alıyorsunuz Token'i kontrol ediniz";
            },
            function () {
                columnElement.innerHTML = "İstek başarısızz";
            },
            columnId,
            isOverlayActive,
            buttonId
        );

        loadingApi(
            "SELECT * FROM DCAS.PPROTECCONT",
            function (response) {
                const data = response;
                columnElement.innerHTML = data;
            },
            function () {
                columnElement.innerHTML = "401 (Unauthorized) hatası alıyorsunuz Token'i kontrol ediniz";
            },
            function () {
                columnElement.innerHTML = "İstek başarısız";
            },
            button
        );

    });
});

//Kübra Güçyeter
//28.03.2024 