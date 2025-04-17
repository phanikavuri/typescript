"use strict";
// classes
// by default access specifier is public
// private - only accessible within the class itself
// protected - only accessible within the class itself and in child classes
// readonly - only accessible within the class itself and in child classes, cannot be changed outside of the class
// static - only accessible within the class itself, not in child classes
// interface - only used to define the shape of an object, cannot be instantiated
// abstract - cannot be instantiated, only used as a base class for other classes
// final - cannot be extended, cannot be used as a base class for other classes
// sealed - cannot be extended, cannot be used as a base class for other classes, cannot be instantiated    
// classes
var Invoice = /** @class */ (function () {
    // readonly client: string;
    // private details: string;
    // public amount: number;
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes \u00A3" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice('mario', 'work on the mario website', 250);
var invTwo = new Invoice('luigi', 'work on the luigi website', 300);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(function (inv) {
    console.log(inv.client, /*inv.details,*/ inv.amount, inv.format());
});
var form = document.querySelector('.new-item-form');
console.log(form.children);
// inputs
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
