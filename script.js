const apiData = [
    {
      id: 1,
      name: "Coffee",
      category: "Beverages",
      image_url: "coffee.jpeg",
      varieties: [
        { id: 101, name: "Small", price: 50 },
        { id: 102, name: "Medium", price: 100 },
        { id: 103, name: "Large", price: 150 }
      ]
    },
    {
        id: 2,
        name: "Tea",
        category: "Beverages",
        image_url: "tea.jpg",
        varieties: [
          { id: 201, name: "Small", price: 30 },
          { id: 202, name: "Medium", price: 60 },
          { id: 203, name: "Large", price: 90 }
        ]
      }
      
  ]
  
  let cart = []
  
  function displayProducts(list) {
    let box = document.getElementById('products')
    box.innerHTML = ''
    for (let i = 0; i < list.length; i++) {
      let p = list[i]
      let div = document.createElement('div')
      div.className = 'product'
      let select = ''
      for (let j = 0; j < p.varieties.length; j++) {
        select += `<option value="${p.varieties[j].id}">${p.varieties[j].name} - ₹${p.varieties[j].price}</option>`
      }
      div.innerHTML = `
        <img src="${p.image_url}">
        <h3>${p.name}</h3>
        <p>${p.category}</p>
        <select id="variety-${p.id}">${select}</select>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
      `
      box.appendChild(div)
    }
  }
  
  function addToCart(id) {
    let p = apiData.find(x => x.id === id)
    let sel = document.getElementById(`variety-${id}`)
    let vId = parseInt(sel.value)
    let v = p.varieties.find(x => x.id === vId)
    let item = {
      name: p.name + ' (' + v.name + ')',
      price: v.price
    }
    cart.push(item)
    updateCart()
  }
  
  function updateCart() {
    let cartBox = document.getElementById('cart')
    let totalBox = document.getElementById('total')
    cartBox.innerHTML = ''
    let sum = 0
    for (let i = 0; i < cart.length; i++) {
      let d = document.createElement('div')
      d.textContent = cart[i].name + ' - ₹' + cart[i].price
      cartBox.appendChild(d)
      sum += cart[i].price
    }
    totalBox.textContent = 'Total: ₹' + sum
  }
  
  /*document.getElementById('sort').addEventListener('change', function () {
    let val = this.value
    let arr = [...apiData]
    if (val === 'low') {
      arr.sort((a, b) => a.varieties[0].price - b.varieties[0].price)
    } else if (val === 'high') {
      arr.sort((a, b) => b.varieties[0].price - a.varieties[0].price)
    }
    displayProducts(arr)
  })
  
  document.getElementById('search').addEventListener('input', function () {
    let text = this.value.toLowerCase()
    let res = apiData.filter(p => p.name.toLowerCase().includes(text))
    displayProducts(res)
  })*/
  
  displayProducts(apiData)
  