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
  
  
  
  displayProducts(apiData)
  