function buttonClicked(){

    var brand = document.getElementById("brand_input").value
    var product_type = document.getElementById("product_type").value
  
    fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`)
    .then((response) => response.json())
    .then((data) => {
  
      console.log(data);
  
      for(var i =0; i<data.length; i++){
        if(data[i].product_type == product_type){
          console.log(data[i].name)
          var newItem = document.createElement('li');
          newItem.innerHTML = `💖Product Name: ${data[i].name}, 💖Category: ${data[i].category}, 💖Price: ${data[i].price}, 💖Rating: ${data[i].rating}, 💖Description: ${data[i].description}`
          //newItem.innerHTML = "Product Name : " + data[i].name + "\nProduct Description: " + data[i].description + "\nProduct Price: RM " + data[i].price;
          document.getElementById("list").appendChild(newItem);
          //document.getElementById("list").innerHTML = "Product Name : " + data[i].name + "\nProduct Description: " + data[i].description + "\nProduct Price: RM " + data[i].price;
        } 
      }
    })
  }