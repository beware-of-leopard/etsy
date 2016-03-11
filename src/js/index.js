// Javascript Entry Point


import $ from 'jquery';
import etsyData from './items';


//////////////define the problem

//////////////1. create the rough html needed for the items
//////////////2. define what pieces of data you need from the array/object (image, title, creator, price, currency code)


///////////Code for the html template

var itemLocation = $(document.querySelector(".products"));


function createItem(product){

		return `<div class="product">
					<i class="fa fa-heart"></i>
					<i class="fa fa-bars"></i>
		  			<img src="${product.Images[0].url_170x135}">
		  			<div class="productInfo">
			  			<div class="productTitle">${product.title}</div>
			  			<div class="makerAndPrice">
			  				<a class="maker" href="#">${product.Shop.shop_name}</a>
			  				<div class="price">$${product.price} ${product.currency_code}</div>
			  			</div>
		  			</div>
		  			
		  		</div>`

};

etsyData.results.forEach(function(product){
	itemLocation.append(createItem(product));
})

var numberOfSearchResults = $(".numberOfSearchResults");

numberOfSearchResults.append(etsyData.count);



