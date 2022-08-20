let containerBx = document.querySelector('.container')
let inputFilter = document.querySelector('.searchBar')
let list = [
  {
    name: 'Air Jordan 1',
    size: '42',
    color: 'White',
    image: 'https://cdn.shopify.com/s/files/1/0019/6093/5476/products/luckygreen2_1024x1024.png?v=1603651462'
  },
  {
    name: 'Air Force',
    size: '43',
    color: 'White',
    image: 'https://static.nike.com/a/images/t_default/752efdf6-b2b7-47fc-b137-5a70b5dd9423/air-force-1-07-mens-shoes-5xqQ6q.png',
  },
  {
    name: 'Air Force',
    size: '38',
    color: 'Orange',
    image: 'https://static.mybookcard.com/Content/uploads/static/a0b27ce6faca490c89893c7bd084cf17/_imgs/1fa38e37_2347_48ef_97d8_8ee898ee6cbc.png',
  },
  {
    name: 'Air Force',
    size: '41',
    color: 'Pink',
    image: 'https://static.nike.com/a/images/t_default/5fbee937-03a1-46ed-9a44-23c2b7073f81/air-force-1-older-shoes-w6PsF3.png',
  },
  {
    name: 'Air Jordan 1',
    size: '40',
    color: 'Purple',
    image: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/199/617/products/air-jordan-1-retro-high-og-court-purple-1-51-a239c4f1992bb093f815905248034889-640-0.png',
  },
  {
    name: 'Air Force',
    size: '37',
    color: 'Black',
    image: 'https://static.nike.com/a/images/t_default/28862ef5-d0f9-488c-9d37-702cd834ea2f/air-force-1-07-womens-shoes-GCkPzr.png',
  },
]

containerBx.innerHTML = `${list.map(function (item) {
  return `
  <div class="card">
    <div>
    <img class= "boxImg" src="${item.image}">
    </div>
    <div class="contentBx">
      <h2 class="cardName">${item.name}</h2>
      <h3 class="cardSize">Size: ${item.size}</h3>
    </div>
  </div>`
})}`
