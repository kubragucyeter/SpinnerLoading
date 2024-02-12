


function deneme() {

    var sql = "SELECT * FROM DCAS.PPROTECCONT"

    var sqlStr = { 'sql': '' + sql + '' };
    var returnDeger;

    $.ajax({
        type: "POST",
        url: 'http://10.16.17.5:91/api/GetDataJSON3',
        data: sqlStr,
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        dataType: "json",
        async: true,
        headers: { "Authorization": "Bearer LHcR3acemZ7d_EDfN0UdiIpnZwyNtnhsHPSH3HuanjD_1gC30UtE2tR60EaLjny1FrCszKfau8VIEkI-rmgRXetuY-GU32G88QxVNGNVMG8hnTDdPKybrBI0fehZzhoKSRp05zLG3XIqTodwmlMezqiDZ3VY9Hsb0vglO0xw-sN7IqUZ5GZ2WqV-mQoR6uRXbr8Q9UsvjROXE0nz1Iw3hHggtmxhbFI_As6kE3iFaR5JVuy-CJwq7koi7QplGtDHaa2sGfkEpBNRvB-YI_slanHkA0vUbz8HxIL5gYpMIny1cpS9hz2JouACIqXVa8wHdi_uSig07eGFiZIfr68Scg" },
        success: function (response) {
            console.log(JSON.stringify(response))
            returnDeger = JSON.stringify(response)
        },
        failure: function (failure) {
            returnDeger = failure
        },
        error: function (error) {
            returnDeger = error["statusText"]
        },

    });



    return returnDeger;

}




















