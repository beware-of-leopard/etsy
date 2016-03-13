// Javascript Entry Point


import $ from 'jquery';
import etsyData from './items';


///////////Code for the html template. This is how the items were displayed before dynamically doing it with the API below.



// function createItem(product){

// 		return `<div class="product">
// 					<i class="fa fa-heart"></i>
// 					<i class="fa fa-bars"></i>
// 		  			<img src="${product.Images[0].url_170x135}">
// 		  			<div class="productInfo">
// 			  			<div class="productTitle">${product.title}</div>
// 			  			<div class="makerAndPrice">
// 			  				<a class="maker" href="#">${product.Shop.shop_name}</a>
// 			  				<div class="price">$${product.price} ${product.currency_code}</div>
// 			  			</div>
// 		  			</div>
		  			
// 		  		</div>`

// };

// etsyData.results.forEach(function(product){
// 	itemLocation.append(createItem(product));
// })


var itemLocation = $(document.querySelector(".products"));


var numberOfSearchResults = $(".numberOfSearchResults");

numberOfSearchResults.append(etsyData.count);

/////////////////API stuff below.

// var etsyURL = 'https://openapi.etsy.com/v2/listings/active?api_key=rwvlbwv0tyao50u0twhkb5oh';
var etsyURL = 'https://openapi.etsy.com/v2/listings/active.js?callback=getData&api_key=rwvlbwv0tyao50u0twhkb5oh&keywords=leather+bound+books&includes=Images,Shop';
var handmadeSearch = 'https://openapi.etsy.com/v2/listings/active.js?callback=getData&api_key=rwvlbwv0tyao50u0twhkb5oh&min-price=10&keywords=leather+bound+books&includes=Images,Shop';


$.ajax({
    url: etsyURL,
    dataType: 'jsonp',
    success: function(data) {
        if (data.ok) {
            
            data.results.forEach(function(datum){

            	itemLocation.append(

            		`<div class="product">
					<i class="fa fa-heart"></i>
					<i class="fa fa-bars"></i>
		  			<img src="${datum.Images[0].url_170x135}">
		  			<div class="productInfo">
			  			<div class="productTitle">${datum.title}</div>
			  			<div class="makerAndPrice">
			  				<a class="maker" href="#">${datum.Shop.shop_name}</a>
			  				<div class="price">$${datum.price} ${datum.currency_code}</div>
			  			</div>
		  			</div>
		  			
		  		</div>`
		  		);
            })            

        }
    }});




////Couldn't get the click event to do anything but display the same products the generic search was giving me.

$('#handmade').click(function(){

	itemLocation.html("");

	$.ajax({
    async: true,
    url: handmadeSearch,
    dataType: 'jsonp',
    success: function(data) {
        if (data.ok) {

        	
     
	            data.results.forEach(function(datum){

	            	itemLocation.append(

	            		`<div class="product">
						<i class="fa fa-heart"></i>
						<i class="fa fa-bars"></i>
			  			<img src="${datum.Images[0].url_170x135}">
			  			<div class="productInfo">
				  			<div class="productTitle">${datum.title}</div>
				  			<div class="makerAndPrice">
				  				<a class="maker" href="#">${datum.Shop.shop_name}</a>
				  				<div class="price">$${datum.price} ${datum.currency_code}</div>
				  			</div>
			  			</div>
			  			
			  		</div>`
			  		);
            })

      
            

        }
    }})
});

