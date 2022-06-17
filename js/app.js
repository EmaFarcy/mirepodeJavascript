// const product = document.querySelector(".product");
//const imgDef = document.querySelector(".imgDef");
// const title = document.querySelector(".title");
// const model = document.querySelector(".model");
// const price = document.querySelector(".price");

const contGrid= document.querySelector(".contGrid");
const tablaCarr= document.querySelector('.tablaCarr');
const btnC= document.querySelector(".btn-success");
const btnD= document.querySelector(".btn-danger");


try {
    fetch("../productos/elements.json")
    .then(respuesta => {
        return respuesta.json()
    })
    .then(datos => {
        let contador= 0;
        while(datos.length > contador) {

            let producto = document.createElement("div")

            let imgCont = document.createElement("div")
            let img = document.createElement("img") 

            let contenido= document.createElement("div")

            let title= document.createElement("h2")
            let model= document.createElement("h3")
            let price= document.createElement("p")

            let addCarr = document.createElement("button")

            producto.setAttribute("class", "producto")

            imgCont.setAttribute("class", "imgCont")
            img.setAttribute("src", datos[contador].img)
            img.setAttribute("alt", "first image")

            contenido.setAttribute("class", "contenido")

            title.setAttribute("class", "title")
            model.setAttribute("class", "model")
            price.setAttribute("class", "price")

            title.innerHTML= datos[contador].title;
            model.innerHTML= datos[contador].model;
            price.innerHTML= datos[contador].price+ "US$";

            addCarr.setAttribute("class", "btnAddCarr")
            addCarr.setAttribute('value', contador)
            addCarr.innerHTML= "Add to Cart"

            producto.appendChild(imgCont)
            imgCont.appendChild(img)
            producto.appendChild(contenido)
            contenido.appendChild(title)
            contenido.appendChild(model)
            contenido.appendChild(price)
            contenido.appendChild(addCarr)


            contGrid.appendChild(producto)

            addCarr.addEventListener('click', (e) => {
                e.preventDefault()

                const tr = document.createElement("tr")
                const tdOne= document.createElement("td")
                const tdTwo = document.createElement("td")

                tdOne.setAttribute("class", "obtjst")
                tr.setAttribute("class", "trJs")
                
                tdOne.innerHTML= datos[addCarr.value].model
                tdTwo.innerHTML= datos[addCarr.value].price

                const tdGen = document.querySelectorAll('.obtjst')

                if (tdGen.length == 0){

                    tr.appendChild(tdOne)
                    tr.appendChild(tdTwo)
                    tablaCarr.appendChild(tr)
                
                } else {
                    tdGen.forEach((elem, i) => {
                        console.log(elem);
                        if(elem.innerHTML== datos[addCarr.value].model){
                            Swal.fire({
                                title: "Item already added to cart",
                                imageUrl: 'https://cdn-icons-png.flaticon.com/512/70/70021.png',
                                imageWidth: 100,
                                imageHeight: 100,
                              })
                            tr.removeChild(tdOne)
                            tr.removeChild(tdTwo)
                            tablaCarr.removeChild(tr)
                        } else {
                            tr.appendChild(tdOne)
                            tr.appendChild(tdTwo)
                            tablaCarr.appendChild(tr)
                        }
                })
            }
        });

            contador++;
        }
    })

} catch (e) {
    console.log(e);
}

btnC.addEventListener("click", (e) => {
    const trJs= document.querySelectorAll(".trJs")

    if (trJs.length == 0){
        Swal.fire({icon: 'error',
                   title: 'Oops...',
                   text: "Your Cart is currently empty."})
    }else{
        trJs.forEach(elem => {
            elem.outerHTML = ""
        })
        Swal.fire("Congratulations!", "Your purchase was successful!", "success") 
    }

})