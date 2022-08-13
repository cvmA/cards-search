let containerBx = document.querySelector('.container')
let list = [
    {
        name: 'Jordan',
        size: '42',
        color: 'green',
        image: 'https://assets.codepen.io/4164355/shoes.png'
    },
    {
        name: 'Air Force',
        size: '43',
        color:'white'
    },
]


// imgBxElement.innerHTML= `${list[0].image}`
containerBx.innerHTML= `${list.map(function (item) {
    return `<div class="card">
    <div class="imgBx">
    <img src="${item.image}">
    </div>
    <div class="contentBx">
      <h2></h2>
    </div>
  </div>`
})}`
