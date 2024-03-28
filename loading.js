function loadingButton(buttonId, columnId) {

    const button = document.getElementById(buttonId);
    const columnElement = document.getElementById(columnId);

    const spinner = document.createElement("span");
    spinner.className = "spinner-border spinner-border-sm loading";
    spinner.setAttribute("role", "status");
    spinner.setAttribute("aria-hidden", "true");

    const loadingText = document.createElement("span");
    loadingText.className = "visually-hidden";
    loadingText.textContent = "Loading...";

    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;
    const loadingSize = Math.min(buttonWidth, buttonHeight) * 0.8;
    spinner.style.width = `${loadingSize}px`;
    spinner.style.height = `${loadingSize}px`;

    const loadingWrapper = document.createElement("div");
    loadingWrapper.appendChild(spinner);
    loadingWrapper.appendChild(loadingText);
    loadingWrapper.style.display = "none";

    columnElement.appendChild(loadingWrapper);

    const result = {
        columnElement: columnElement,
        loadingElement: loadingWrapper
    };

    return result;
}
function hideOverlay() {
    loadingData.loadingElement.style.display = 'none';

    if (isOverlayActive && overlay) {
        overlay.style.display = "none";
        overlay.remove();
    }
}

function hideOverlay(loadingData, isOverlayActive, overlay) {
    loadingData.loadingElement.style.display = 'none';

    if (isOverlayActive === false) {
        overlay.style.display = "none";
        overlay.remove();
    }
}

function loadingApiOverlay(sql, successCallback, failureCallback, columnId, isOverlayActive, buttonId) {
    var sqlStr = { 'sql': sql };

    const button = document.getElementById(buttonId);
    const columnElement = document.getElementById(columnId);
    const loadingData = loadingButton(buttonId, columnId);
    let overlay;

    if (isOverlayActive === true) {
        overlay = document.createElement("div");
        overlay.id = "overlay";
        overlay.className = "overlay";
        columnElement.appendChild(overlay);
        overlay.style.display = "block";
    } else if (isOverlayActive === false) {
        overlay = document.createElement("div");
        overlay.id = "overlay";
        overlay.className = "overlay";
        document.body.appendChild(overlay);
        overlay.style.display = "block";
    }

    loadingData.loadingElement.style.display = 'block';

    $.ajax({
        type: "POST",
        url: 'http://10.16.17.5:91/api/GetDataJSON3',
        data: sqlStr,
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        dataType: "json",
        headers: { "Authorization": "Bearer 1885EnBQ9b5t0kyoJ-PoR7RJ9UdCZk9VP6V4aLzLC2kQskbIcl1jcxie3Tv4_r_cu7fzWcIUMxzz6pqGfARGSdbnOmdiHUi8z2LH1dYH-aR_c42ssL3dEmDpzq5qXfI3DoT4-OL0_mUTlX-t17UtWPZKTCNvAP-sHP8Zkgx4BAoKWu9zlqnTuu8ly3rHHOlcWPa-FvIt7aOtNPmyJgAyuuOtfyeYRQlRiJ9HaNBZd_sVWLRSi3QQfeRU1Zf2uY1iAnIGvYocbecPLAZebaHXzwOtVFL0lYAtlg5_ymLNr_TK6Mf6jAfGFTQI4Uw-QqUW6cP4OlQrlOHEjUkl0HGjqQ" },
        success: function (response) {
            successCallback(response, loadingData.columnElement);
            button.innerHTML = "Tıklayınız";
            hideOverlay(loadingData, isOverlayActive, overlay); // Overlay'i gizle
        },
        failure: function () {
            failureCallback();
            hideOverlay(loadingData, isOverlayActive, overlay); // Overlay'i gizle
        },
        error: function () {
            failureCallback();
            hideOverlay(loadingData, isOverlayActive, overlay); // Overlay'i gizle
        }
    });
}



function loadingApi(sql, callback, error, failure, button,) {
    var sqlStr = { 'sql': sql };

    $.ajax({
        type: "POST",
        url: 'http://10.16.17.5:91/api/GetDataJSOlN3',
        data: sqlStr,
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        dataType: "json",
        headers: { "Authorization": "Bearer 1885EnBQ9b5t0kyoJ-PoR7RJ9UdCZk9VP6V4aLzLC2kQskbIcl1jcxie3Tv4_r_cu7fzWcIUMxzz6pqGfARGSdbnOmdiHUi8z2LH1dYH-aR_c42ssL3dEmDpzq5qXfI3DoT4-OL0_mUTlX-t17UtWPZKTCNvAP-sHP8Zkgx4BAoKWu9zlqnTuu8ly3rHHOlcWPa-FvIt7aOtNPmyJgAyuuOtfyeYRQlRiJ9HaNBZd_sVWLRSi3QQfeRU1Zf2uY1iAnIGvYocbecPLAZebaHXzwOtVFL0lYAtlg5_ymLNr_TK6Mf6jAfGFTQI4Uw-QqUW6cP4OlQrlOHEjUkl0HGjqQ" },
        success: function (response) {
            callback(response);
            button.innerHTML = "Tıklayınız";
        },
        failure: function () {
            failure();
            button.innerHTML = "Tıklayınız";
        },
        error: function () {
            error();
            button.innerHTML = "Tıklayınız";
        },
    });
}


function sendTextToApi(sqlStr, successCallback, failureCallback, errorCallback, buttonId, columnId) {
    var sqlStr = { 'sqlStr': sqlStr };

    const loadingData = loadingButton(buttonId, columnId);

    $.ajax({
        type: "POST",
        url: 'http://10.16.17.5:91/api/ExecuteSQL3',
        data: sqlStr,
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        dataType: "json",
        headers: {
            "Authorization": "Bearer 1885EnBQ9b5t0kyoJ-PoR7RJ9UdCZk9VP6V4aLzLC2kQskbIcl1jcxie3Tv4_r_cu7fzWcIUMxzz6pqGfARGSdbnOmdiHUi8z2LH1dYH-aR_c42ssL3dEmDpzq5qXfI3DoT4-OL0_mUTlX-t17UtWPZKTCNvAP-sHP8Zkgx4BAoKWu9zlqnTuu8ly3rHHOlcWPa-FvIt7aOtNPmyJgAyuuOtfyeYRQlRiJ9HaNBZd_sVWLRSi3QQfeRU1Zf2uY1iAnIGvYocbecPLAZebaHXzwOtVFL0lYAtlg5_ymLNr_TK6Mf6jAfGFTQI4Uw-QqUW6cP4OlQrlOHEjUkl0HGjqQ"
        },
        success: function (response) {
            successCallback(response);
            loadingData.loadingElement.style.display = 'none';
        },
        error: function (xhr, status, error) {
            if (xhr.status == 401) {
                failureCallback();
            } else {
                errorCallback();
            }
            loadingData.loadingElement.style.display = 'none';
        }
    });
}
