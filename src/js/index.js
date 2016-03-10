// Javascript Entry Point


import $ from 'jquery';
import etsyData from './items';

var items = etsyData.results;

var five = 5;

//////////////define the problem

//////////////1. create the rough html needed for the items
//////////////2. define what pieces of data you need from the array/object (image, title, creator, price, currency code)


///////////Code for the html template

// var itemLocation = $(document.querySelector("main"));

// // var itemLocation = document.querySelector("main");


// function itemMarkup(array){
// 	array.reduce(function(memo,item){

// 	var firstImage = item.Images[0].url_170x135;

// 					return memo +=`<div class="item">

// 					  			<img src="${firstImage}">
// 					  			<div class="itemTitle"></div>
// 					  			<div class="makerAndPrice">
// 					  				<div class="maker"></div>
// 					  				<div class="price"></div>
// 					  			</div>
					  			
// 					  		</div>`;

// },"")};

// itemLocation.append(itemMarkup(items));


var itemLocation = $(document.querySelector("main"));


function createItem(product){

	var productImg = product.Images[0].url_170x135;

		return `<div class="product">

		  			<img src="${productImg}">
		  			<div class="productTitle">${product.title}</div>
		  			<div class="makerAndPrice">
		  				<a class="maker" href="#">${product.Shop.shop_name}</a>
		  				<div class="price">$${product.price} ${product.currency_code}</div>
		  			</div>
		  			
		  		</div>`

};

items.forEach(function(product){
	itemLocation.append(createItem(product));
})



