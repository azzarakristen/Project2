const data = [
{
    "name": "Leo Dominguez",
    "arms": 2,
    "legs": 2,
    "nose": 1,
    "hat": 1,
    "shellColor": "n/a",
    "picture": "none"
},
{
    "name": "Mr. Snail",
    "arms": 0,
    "legs": 0,
    "nose": 0,
    "hat": 1,
    "shellColor": "cyan",
    "picture": "https://img.pixers.pics/pho_wat(s3:700/FO/63/25/88/41/700_FO63258841_82d512c8bae8a9b5eb726314987582d3.jpg,700,617,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,567,jpg)/posters-cute-snail-cartoon.jpg.jpg"
}
]

window.addEventListener('load', ()=> {
    init();
})


const init = function(){

    const dataShelf = document.getElementById("datashelf")

    data.map(function(kristen){
        const dataItem = buildDataItem(kristen);
        dataShelf.innerHTML = dataShelf.innerHTML + dataItem;
    })
}

const buildDataItem = function(kristen){
    return `
    <div>
    <h2>${kristen.name}</h2>
    <h3>${kristen.arms}</h3>
    <p class="legs">${kristen.legs}</p>
    </div>
    <img src=${kristen.picture}>
    `
}