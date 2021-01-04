"use strict";
function Location(min, max, avgCookisperCus) {
  this.min = min;
  this.max = max;
  this.avgCookisperCus = avgCookisperCus;
  this.ruslt = [];
}

Location.prototype.custPerHr = function () {
  return Math.floor(Math.random() * (this.max - this.min) + this.min);
};
Location.prototype.CookiPurchased = function () {
  var calc = this.avgCookisperCus * this.custPerHr();
  return calc;
};
Location.prototype.ruslt2 = function () {
  var array = [];
  for (var i = 0; i < 17; i++) {
    array[i] = this.CookiPurchased();
  }
  this.ruslt = array;
};

// adding locations list by creating an object
var seattle = new Location("23", "65", "6.3");
var Tokyo = new Location("3", "24", "1.2");
var Dubai = new Location("11", "38", "3.7");
var Paris = new Location("20", "38", "2.3");
var Lima = new Location("2", "16", "4.6");

//here i will call the function
seattle.ruslt2();
Tokyo.ruslt2();
Dubai.ruslt2();
Paris.ruslt2();
Lima.ruslt2();
// here i will cconsol.log the ruslt
console.log(seattle.ruslt);
console.log(Tokyo.ruslt);
console.log(Dubai.ruslt);
console.log(Paris.ruslt);
console.log(Lima.ruslt);
console.log(seattle.max);
console.log(seattle.min);
console.log(seattle.avgCookisperCus);

//////////////////////////
/////////////////////////

var mainElement = document.getElementById("displayArray");

var article = document.createElement("article");
mainElement.appendChild(article);

var h1 = document.createElement("h1");
h1.textContent = "Welcom to the sale page ";
article.appendChild(h1);

// all the code under this comment it is for the table

///////////////////////////////
//  the header 
/////////////////////////
var table = document.createElement("table");
article.appendChild(table);

var tableFirstRow = document.createElement("tr");
table.appendChild(tableFirstRow);

var headerOne = document.createElement("th");

headerOne.textContent = "                    ";
tableFirstRow.appendChild(headerOne);

var headerTwo = document.createElement("th");

headerTwo.textContent = "6:00am";
tableFirstRow.appendChild(headerTwo);

var headerThree = document.createElement("th");

headerThree.textContent = "7:00 am";
tableFirstRow.appendChild(headerThree);

var header4 = document.createElement("th");
header4.textContent = "8:00 am";
tableFirstRow.appendChild(header4);

var header5 = document.createElement("th");
header5.textContent = "9:00 am";
tableFirstRow.appendChild(header5);

var header6 = document.createElement("th");
header6.textContent = "10:00 am";
tableFirstRow.appendChild(header6);

var header7 = document.createElement("th");
header7.textContent = "11:00 am";
tableFirstRow.appendChild(header7);

var header8 = document.createElement("th");
header8.textContent = "12:00 pm";
tableFirstRow.appendChild(header8);

var header9 = document.createElement("th");
header9.textContent = "1:00 pm";
tableFirstRow.appendChild(header9);

var header10 = document.createElement("th");
header10.textContent = "2:00 pm";
tableFirstRow.appendChild(header10);

var header11 = document.createElement("th");
header11.textContent = "3:00 pm";
tableFirstRow.appendChild(header11);

var header12 = document.createElement("th");
header12.textContent = "4:00 pm";
tableFirstRow.appendChild(header12);

var header13 = document.createElement("th");
header13.textContent = "5:00 pm";
tableFirstRow.appendChild(header13);

var header14 = document.createElement("th");
header14.textContent = "6:00 pm";
tableFirstRow.appendChild(header14);

var header15 = document.createElement("th");
header15.textContent = "7:00 pm";
tableFirstRow.appendChild(header15);

var header16 = document.createElement("th");
header16.textContent = "Daily Location Total";
tableFirstRow.appendChild(header16);


/////////////////////////////////
// the data inside the table 
/////////////////////////////////

var tableSecondRow = document.createElement("tr");
table.appendChild(tableSecondRow);

// the data inside the scand row
var dataCell1 = document.createElement("td");
dataCell1.textContent = "seattle";
tableSecondRow.appendChild(dataCell1);

for (var i = 0; i < 14; i++) {
  var dataCell2 = document.createElement("td");
  dataCell2.textContent = seattle.ruslt[i].toFixed(0);
  tableSecondRow.appendChild(dataCell2);
}
// calc the total cell in the scand row
var total = 0;
for (var i = 0; i < 14; i++) {
  total = total + seattle.ruslt[i];
}
var dataCellTotal = document.createElement("td");
dataCellTotal.textContent = total.toFixed(0);
tableSecondRow.appendChild(dataCellTotal);

// the Tokyo row
var tableSecondRow = document.createElement("tr");
table.appendChild(tableSecondRow);

var dataCell1 = document.createElement("td");
dataCell1.textContent = "Tokyo";
tableSecondRow.appendChild(dataCell1);

for (var i = 0; i < 14; i++) {
  var dataCell2 = document.createElement("td");
  dataCell2.textContent = Tokyo.ruslt[i].toFixed(0);
  tableSecondRow.appendChild(dataCell2);
}
var total = 0;
for (var i = 0; i < 14; i++) {
  total = total + Tokyo.ruslt[i];
}
var dataCellTotal = document.createElement("td");
dataCellTotal.textContent = total.toFixed(0);
tableSecondRow.appendChild(dataCellTotal);

// Dubai row

var tableSecondRow = document.createElement("tr");
table.appendChild(tableSecondRow);

var dataCell1 = document.createElement("td");
dataCell1.textContent = "Dubai";
tableSecondRow.appendChild(dataCell1);

for (var i = 0; i < 14; i++) {
  var dataCell2 = document.createElement("td");
  dataCell2.textContent = Dubai.ruslt[i].toFixed(0);
  tableSecondRow.appendChild(dataCell2);
}
var total = 0;
for (var i = 0; i < 14; i++) {
  total = total + Dubai.ruslt[i];
}
var dataCellTotal = document.createElement("td");
dataCellTotal.textContent = total.toFixed(0);
tableSecondRow.appendChild(dataCellTotal);

// Paris row
var tableSecondRow = document.createElement("tr");
table.appendChild(tableSecondRow);

var dataCell1 = document.createElement("td");
dataCell1.textContent = "Paris";
tableSecondRow.appendChild(dataCell1);

for (var i = 0; i < 14; i++) {
  var dataCell2 = document.createElement("td");
  dataCell2.textContent = Paris.ruslt[i].toFixed(0);
  tableSecondRow.appendChild(dataCell2);
}
var total = 0;
for (var i = 0; i < 14; i++) {
  total = total + Paris.ruslt[i];
}
var dataCellTotal = document.createElement("td");
dataCellTotal.textContent = total.toFixed(0);
tableSecondRow.appendChild(dataCellTotal);

// Lima row
var tableSecondRow = document.createElement("tr");
table.appendChild(tableSecondRow);

var dataCell1 = document.createElement("td");
dataCell1.textContent = "Lima";
tableSecondRow.appendChild(dataCell1);

for (var i = 0; i < 14; i++) {
  var dataCell2 = document.createElement("td");
  dataCell2.textContent = Lima.ruslt[i].toFixed(0);
  tableSecondRow.appendChild(dataCell2);
}
var total = 0;
for (var i = 0; i < 14; i++) {
  total = total + Lima.ruslt[i];
}
var dataCellTotal = document.createElement("td");
dataCellTotal.textContent = total.toFixed(0);
tableSecondRow.appendChild(dataCellTotal);

///////////////////////////////////
//this is for the footer 
//////////////////////////////////


  // the total row
var tableSecondRow = document.createElement("tr");
table.appendChild(tableSecondRow);

var dataCell1 = document.createElement("td");
dataCell1.textContent = "Total";
tableSecondRow.appendChild(dataCell1);

for (var i = 0; i < 14; i++) {
  var hoursTotal =
    seattle.ruslt[i] +
    Tokyo.ruslt[i] +
    Dubai.ruslt[i] +
    Paris.ruslt[i] +
    Lima.ruslt[i];

  var dataCellTotal = document.createElement("td");
  dataCellTotal.textContent = hoursTotal.toFixed(0);
  tableSecondRow.appendChild(dataCellTotal);
}

//  the td for the total of daily hours  total

var total = 0;
for (var i = 0; i < 14; i++) {
  var dailyTotal =
    seattle.ruslt[i] +
    Tokyo.ruslt[i] +
    Dubai.ruslt[i] +
    Paris.ruslt[i] +
    Lima.ruslt[i];
  total = total + dailyTotal;
}

var dataCellTotal = document.createElement("td");
dataCellTotal.textContent = total.toFixed(0);
tableSecondRow.appendChild(dataCellTotal);

