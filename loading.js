function displayFlag(flagImageUrl) {
    document.querySelector('.loading').style.display = 'none';
    document.querySelector('#flag').style.backgroundImage = `url(${flagImageUrl})`;

}

const btnElement = document.querySelector("#btn");

if (btnElement) {
    btnElement.addEventListener("click", () => {
        document.querySelector('.loading').style.display = 'block';
        document.querySelector('#btn').style.display = 'none';


        setTimeout(() => {
            fetch('https://mainfacts.com/media/images/coats_of_arms/tr.png', {
                method: 'GET'
            })
                .then(response => {
                    console.log("API response:", response);

                    if (!response.ok) {
                        console.error(`HTTP error! Hatası: ${response.status}`);
                        return Promise.reject(`HTTP error! Hatası: ${response.status}`);
                    }

                    return response.blob();
                })
                .then(blob => {
                    const imageUrl = URL.createObjectURL(blob);
                    console.log("Blob data:", blob);


                    const imgElement = document.createElement('img');
                    imgElement.src = imageUrl;
                    document.body.appendChild(imgElement);


                })
                .catch(error => {
                    console.error("API isteğinde bir hata oluştu:", error);
                })
                .finally(() => {
                    document.querySelector('.loading').style.display = 'none';

                });
        }, 6000);

    });

}

