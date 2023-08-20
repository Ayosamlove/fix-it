//importing module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';

// console.log(price, tq);
// addToCart('bread', 5);

console.log('importing module');

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);

import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('tea', 3);

console.log(cart);

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

const state = {
	cart: [
		{
			product: 'bread',
			quantity: 5,
		},
		{ product: 'tea', quantity: 3 },
	],
	user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateClone);
console.log(stateDeepClone);

if (module.hot) {
	module.hot.accept();
}

class Person {
	#greeting = 'Hey';
	constructor(name) {
		this.name = name;
		console.log(`${this.#greeting}, ${this.name}`);
	}
}

const sam = new Person('Sam');

console.log('Samuel' || null);

console.log(cart.find((el) => el.quantity >= 2));

Promise.resolve('TEST').then((x) => console.log(x));

import 'core-js/stable';

//polyfilling async function
// import 'regenerator-runtime/runtime';
