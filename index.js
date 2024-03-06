//TODO: İçinde overlay olan işlemler 
// const button = document.querySelector("#btn");

// button.addEventListener("click", () => {
//     const selectedColumnId = "column1";

//     // true: element içinde
//     //false: full ekran
//     // ""; : overlay yok
//     const isElementOverlay = true; // Seçili sütun içinde overlay olsun

//     const columnElement = document.querySelector(`#${selectedColumnId}`);
//     const columnLoading = document.createElement("div");
//     columnLoading.className = "loading";
//     columnElement.innerHTML = "";
//     columnElement.appendChild(columnLoading);

//     loadingApi(
//         "SELECT * FROM DCAS.PPROTECCONT",
//         function (response) {
//             const data = response;
//             columnElement.innerHTML = data;
//         },
//         function () {
//             columnElement.innerHTML = "401 (Unauthorized) hatası alıyorsunuz Token'i kontrol ediniz";
//         },
//         function () {
//             columnElement.innerHTML = "İstek başarısız";
//         },
//         selectedColumnId,
//         isElementOverlay
//     );
// });


const button = document.querySelector("#btn");

button.addEventListener("click", () => {
    const selectedColumnId = "column6";
    const columnElement = document.querySelector(`#${selectedColumnId}`);

    columnElement.innerHTML = "";

    // loadingApi(
    //     "SELECT * FROM DCAS.PPROTECCONT",
    //     function (response) {
    //         const data = response;
    //         columnElement.innerHTML = data;
    //     },
    //     function () {
    //         columnElement.innerHTML = "401 (Unauthorized) hatası alıyorsunuz Token'i kontrol ediniz";
    //     },
    //     function () {
    //         columnElement.innerHTML = "İstek başarısız";
    //     },
    //     button,
    //     selectedColumnId
    // );





    // sendTextToApi
    
    const textToSend = "Bu bir örnek metindir.";
    sendTextToAPI(
        textToSend,
        function (response) {
            columnElement.innerHTML = "Başarılı", textToSend;
        },
        function () {
            columnElement.innerHTML = "Yetki hatası: 401 (Unauthorized)";
        },
        function () {
            columnElement.innerHTML = "Başarısız istek veya hata oluştu.";
        }
    );
    button,
        selectedColumnId
});