
const p = document.querySelector("#p");
const button = document.querySelector("#btn");




button.addEventListener("click", () => {

    document.querySelector(".loading").style.display = 'block';
    document.querySelector("#btn").style.display = 'none';

    // deger = deneme();

    deneme((deger) => {

        p.innerHTML = deger;
        document.querySelector(".loading").style.display = 'none'
    });


});








