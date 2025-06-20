
const c = (el) => {
    return document.querySelector(el)
}

const cs = (el) =>{
    return document.querySelectorAll(el)
}

camisaJson.map( (item, index) =>{
    let camisaItem = c('.models .camisa-item').cloneNode(true);

    //preencher
    camisaItem.setAttribute('data-key', index);   
    camisaItem.querySelector('.camisa-item--img img').src = item.img
    camisaItem.querySelector('.camisa-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`
    camisaItem.querySelector('.camisa-item--name').innerHTML = item.name
    camisaItem.querySelector('.camisa-item--desc').innerHTML = item.description

    camisaItem.querySelector('a').addEventListener('click', (e)=> {
        e.preventDefault();
        //e.target(tag) closest(sobe até encontrar elemento pai)
        let key = e.target.closest('.camisa-item').getAttribute('data-key')

        c('.camisaBig img').src = camisaJson[key].img;
        c('.camisaInfo h1').innerHTML = camisaJson[key].name;
        c('.camisaInfo--desc').innerHTML = camisaJson[key].description
        c('.camisaInfo--actualPrice').innerHTML = `R$ ${camisaJson[key].price.toFixed(2)}`


        c('.camisaWindowArea').style.opacity =  0;
        c('.camisaWindowArea').style.display =  'flex';
        setTimeout(()=>{
            c('.camisaWindowArea').style.opacity =  1;
        }, 200)
    })
    
    c('.camisa-area').append(camisaItem);

})

document.querySelectorAll('.camisa-item').forEach((el) => {
    el.addEventListener('click', (e) => {
        let key = e.target.closest('.camisa-item').getAttribute('data-key');
        console.log(`Você clicou na camisa: ${camisaJson[key].name}`);
    });
});