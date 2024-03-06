//TODO: İçinde overlay olazn işlemler 

// function getColumnLoadingElement(columnId) {
//     return document.querySelector(`#${columnId} .loading`);
// }

// function loadingApi(sql, callback, error, failure, columnId, isElementOverlay) {
//     var sqlStr = { 'sql': '' + sql + '' };

//     const columnLoading = getColumnLoadingElement(columnId);
//     let overlay;

//     // Element içinde overlay olacaksa ve sütun içinde loading elementi bulunamazsa
//     // hata mesajı yazdır
//     if (isElementOverlay === true && !columnLoading) {
//         console.error(`Sütun ${columnId} için loading elementi bulunamadı.`);
//         return;
//     }

//     // Element içinde overlay olacaksa ve loading elementi varsa
//     // overlay oluştur ve ekrana yerleştir
//     if (isElementOverlay === true && columnLoading) {
//         overlay = document.createElement("div");
//         overlay.id = "overlay";
//         overlay.className = "overlay";
//         const columnElement = document.querySelector(`#${columnId}`);
//         columnElement.appendChild(overlay);

//         overlay.style.display = "block";
//     }

//     // Full ekranda overlay olacaksa
//     if (isElementOverlay === false && columnLoading) {
//         overlay = document.createElement("div");
//         overlay.id = "overlay";
//         overlay.className = "overlay";
//         document.body.appendChild(overlay);

//         overlay.style.display = "block";
//     }

//     // Loading elementi varsa görünür yap
//     if (columnLoading) {
//         columnLoading.style.display = 'block';
//     }

//     $.ajax({
//         type: "POST",
//         url: 'http://10.16.17.5:91/api/GetDataJSON3',
//         data: sqlStr,
//         contentType: "application/x-www-form-urlencoded; charset=utf-8",
//         dataType: "json",
//         headers: { "Authorization": "Bearer gD5aFDdmItmovC6hxVFQ3JtKd-TzqHURjuWYGEEcTI-vmhgKKPMF8RsKlbyOzi38jNb4nxPqdcg46I9xIji5rZyXT4SynnuQHkXCz1etlRt8Kc9TMrD4fcm0PJI4DZV0yZCZnpK1QkDEbCR0Md78mF8YCY2fkiLeYORwT0BBOllykWKcp28ef4ADG4W_2YJsigOR8fa73hd5GFFghNBxwIjJi4qCpEJDFrvtW2SCLKRbu3rwEhGT6TyqYw7AkGoLYbkKwX7VOSBauTJ007pDfxYUHwUS3UgSwdzJ9fYqlxwd3GjgAhI6PinlZCLs8GcVHQUbZGTno8YIFJRurKP2DQ" },
//         success: function (response) {
//             callback(response);
//             if (columnLoading) {
//                 columnLoading.style.display = 'none';
//             }
//             if (isElementOverlay === true && overlay) {
//                 overlay.style.display = "none";
//             }
//             if (isElementOverlay === false && overlay) {
//                 overlay.style.display = "none";
//             }
//         },
//         failure: function () {
//             failure();
//             if (columnLoading) {
//                 columnLoading.style.display = 'none';
//             }
//             if (isElementOverlay === true && overlay) {
//                 overlay.style.display = "none";
//             }
//             if (isElementOverlay === false && overlay) {
//                 overlay.style.display = "none";
//             }
//         },
//         error: function () {
//             error();
//             if (columnLoading) {
//                 columnLoading.style.display = 'none';
//             }
//             if (isElementOverlay === true && overlay) {
//                 overlay.style.display = "none";
//             }
//             if (isElementOverlay === false && overlay) {
//                 overlay.style.display = "none";
//             }
//         },
//     });



// function loadingApi(sql, callback, error, failure, button, columnId) {
//     var sqlStr = { 'sql': '' + sql + '' };

//     const columnElement = document.querySelector(`#${columnId}`);

//     // Buton içinde loading göstergesi oluştur
//     const spinner = document.createElement("span");
//     spinner.className = "spinner-border spinner-border-sm";
//     spinner.setAttribute("role", "status");
//     spinner.setAttribute("aria-hidden", "true");

//     const loadingText = document.createElement("span");
//     loadingText.className = "visually-hidden";
//     loadingText.textContent = "Loading...";
//     button.innerHTML = "";
//     button.appendChild(spinner);
//     button.appendChild(loadingText);

//     // Loading göstergesinin boyutunu butona göre ayarla
//     const buttonWidth = button.offsetWidth;
//     const buttonHeight = button.offsetHeight;
//     const loadingSize = Math.min(buttonWidth, buttonHeight) * 0.8; // 80% of the smaller dimension
//     spinner.style.width = `${loadingSize}px`;
//     spinner.style.height = `${loadingSize}px`;

//     $.ajax({
//         type: "POST",
//         url: 'http://10.16.17.5:91/api/GetDataJSON3',
//         data: sqlStr,
//         contentType: "application/x-www-form-urlencoded; charset=utf-8",
//         dataType: "json",
//         headers: { "Authorization": "Bearer gD5aFDdmItmovC6hxVFQ3JtKd-TzqHURjuWYGEEcTI-vmhgKKPMF8RsKlbyOzi38jNb4nxPqdcg46I9xIji5rZyXT4SynnuQHkXCz1etlRt8Kc9TMrD4fcm0PJI4DZV0yZCZnpK1QkDEbCR0Md78mF8YCY2fkiLeYORwT0BBOllykWKcp28ef4ADG4W_2YJsigOR8fa73hd5GFFghNBxwIjJi4qCpEJDFrvtW2SCLKRbu3rwEhGT6TyqYw7AkGoLYbkKwX7VOSBauTJ007pDfxYUHwUS3UgSwdzJ9fYqlxwd3GjgAhI6PinlZCLs8GcVHQUbZGTno8YIFJRurKP2DQ" },
//         success: function (response) {
//             callback(response);
//             button.innerHTML = "Tıklayınız";
//         },
//         failure: function () {
//             failure();
//             button.innerHTML = "Tıklayınız";
//         },
//         error: function () {
//             error();
//             button.innerHTML = "Tıklayınız";
//         },
//     });
// }


function sendTextToAPI(text, successCallback, failureCallback, errorCallback) {
    var sqlStr = { 'sqlStr': sqlStr };

    // Buton içinde loading göstergesi oluştur
    const spinner = document.createElement("span");
    spinner.className = "spinner-border spinner-border-sm";
    spinner.setAttribute("role", "status");
    spinner.setAttribute("aria-hidden", "true");

    const loadingText = document.createElement("span");
    loadingText.className = "visually-hidden";
    loadingText.textContent = "Loading...";
    button.innerHTML = "";
    button.appendChild(spinner);
    button.appendChild(loadingText);

    // Loading göstergesinin boyutunu butona göre ayarla
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;
    const loadingSize = Math.min(buttonWidth, buttonHeight) * 0.8; // 80% of the smaller dimension
    spinner.style.width = `${loadingSize}px`;
    spinner.style.height = `${loadingSize}px`;

    $.ajax({
        type: "POST",
        url: 'http://10.16.17.5:91/api/ExecuteSQL3',
        data: sqlStr,
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        dataType: "json",
        headers: {
            "Authorization": "Bearer w1lCPp13VUvnjHdedphYW09gL-OBGe1a6hfbw_83Qc_77_WSFz-1LrBG5dZBDb4qPRhwapvejmMXEWkhT-3lq87n8cTFZTi-nbGIGn0PfnVvZwaVsdKVNsNZutumJxsTGAkV_Mzt3oxXOaUalTojQotAI2z1wnwpxOM1Lu1Y3jLRvdS-oHJL1Gabbv-N4_KTftBgFZW1rIqkaAmr7esG3YnViZ9T7rKEoAq70NgrU2BCZGflE4DpKGTvovbs4nwwSdRxclFoT_3wbwmz2NcQMjcJG4KL6bL9k0NSjIULtmH195k436twLvb--etIuAb6UPsRFMo6gG8iroV75rTPqg"
        },
        success: function (response) {
            successCallback(response);
            button.innerHTML = "Tıklayınız";
        },
        error: function (xhr, status, error) {
            if (xhr.status == 401) { // Unauthorized
                failureCallback();
                button.innerHTML = "Tıklayınız";
            } else {
                errorCallback();
                button.innerHTML = "Tıklayınız";
            }
        }
    });
}


