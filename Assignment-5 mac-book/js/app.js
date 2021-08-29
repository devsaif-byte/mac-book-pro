// get total cost
function getTotalValue() {
	const value = parseFloat(document.getElementById("totalCost").innerText);
	return value;
}

// get product cost
function priceCalculation(eventBtn, productId, prices) {
	document.getElementById(eventBtn).addEventListener("click", function (event) {

		const productCalcParse = Number(
			(document.getElementById(productId).innerText = prices)
		);
		const again = event.target.eventBtn = productCalcParse + getTotalValue();
		console.log(again);
		// // set total cost
		let setTotalCost = document.getElementById("totalCost").innerText =
			again;
		console.log(setTotalCost);
		return setTotalCost;
	});
}

// // Extra memory
let values1 = priceCalculation("16gbSelector", "memoryCost", 180);
let values2 = priceCalculation("8gbSelector", "memoryCost", 0);

// Extra storage
let values3 = priceCalculation("256gbStorage", "storageCost", 0);
let values4 = priceCalculation("512gbStorage", "storageCost", 100);
let values5 = priceCalculation("1tbStorage", "storageCost", 180);

// Delivery cost
let values6 = priceCalculation("freeDelivery", "deliveryCost", 0);
let values7 = priceCalculation("costingDelivery", "deliveryCost", 20);


// promo code


const promoBtn = document.getElementById('promo-btn');
const promo = document.getElementById('input-field').addEventListener('keyup', function (event) {
	if (event.target.value=='stevekaku') {
		promoBtn.removeAttribute('disabled')
		promoBtn.style.backgroundColor = '#00D53D'
	} else {
		promoBtn.setAttribute('disabled', true)
		promoBtn.style.backgroundColor = '#CD5C5C'
	}
})

function disc() {
	promoBtn.addEventListener('click', function () {
		let disCountSet = Number(document.getElementById('totalCost').innerText);
		let disCountDiv = disCountSet / 20;
		disCountSet = disCountSet - disCountDiv;
		console.log(disCountSet);
		return disCountSet;
	})
}
