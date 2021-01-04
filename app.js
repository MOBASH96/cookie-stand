"use strict";

var Seattle = {
  min: 23,
  max: 65,
  avgCookisperCus: 6.3,
  custPerHr: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  },
  CookiPurchased: function () {
    var calc = 6.3 * this.custPerHr(23, 65);
    return calc;
  },
  ruslt2: [],
  ruslt: function () {
    var array = [];
    for (var i = 0; i < 17; i++) {
      array[i] = this.CookiPurchased();
    }
    this.ruslt2 = array;
  },
};
// console.log(Seattle.custPerHr(23, 65));
// console.log(Seattle.CookiPurchased());
// console.log(Seattle.ruslt());

var Tokyo = {
  min: 3,
  max: 24,
  avgCookisperCus: 1.2,
  custPerHr: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  },
  CookiPurchased: function () {
    var calc = 1.2 * this.custPerHr(3, 24);
    return calc;
  },
  ruslt2: [],
  ruslt: function () {
    var array = [];
    for (var i = 0; i < 17; i++) {
      array[i] = this.CookiPurchased();
    }
    this.ruslt2 = array;
  },
};
// console.log(Seattle.custPerHr(3, 24));
// console.log(Seattle.CookiPurchased());
// console.log(Seattle.ruslt());

var Dubai = {
  min: 11,
  max: 38,
  avgCookisperCus: 3.7,
  custPerHr: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  },
  CookiPurchased: function () {
    var calc = 3.7 * this.custPerHr(11, 38);
    return calc;
  },
  ruslt2: [],
  ruslt: function () {
    var array = [];
    for (var i = 0; i < 17; i++) {
      array[i] = this.CookiPurchased();
    }
    this.ruslt2 = array;
  },
};
// console.log(Seattle.custPerHr(11, 38));
// console.log(Seattle.CookiPurchased());
// console.log(Seattle.ruslt());

var Paris = {
  min: 20,
  max: 38,
  avgCookisperCus: 2.3,
  custPerHr: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  },
  CookiPurchased: function () {
    var calc = 2.3 * this.custPerHr(20, 38);
    return calc;
  },
  ruslt2: [],
  ruslt: function () {
    var array = [];
    for (var i = 0; i < 17; i++) {
      array[i] = this.CookiPurchased();
    }
    this.ruslt2 = array;
  },
};
// console.log(Seattle.custPerHr(20, 38));
// console.log(Seattle.CookiPurchased());
// console.log(Seattle.ruslt());

var Lima = {
  min: 2,
  max: 16,
  avgCookisperCus: 4.6,
  custPerHr: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  },
  CookiPurchased: function () {
    var calc = 4.6 * this.custPerHr(2, 16);
    return calc;
  },
  ruslt2: [],
  ruslt: function () {
    var array = [];
    for (var i = 0; i < 17; i++) {
      array[i] = this.CookiPurchased();
    }
    this.ruslt2 = array;
  },
};
// console.log(Seattle.custPerHr(2, 16));
// console.log(Seattle.CookiPurchased());
// console.log(Seattle.ruslt());
//////////////////////

var mainElement = document.getElementById("displayArray");

var article = document.createElement("article");
mainElement.appendChild(article);

var h1 = document.createElement("h1");
h1.textContent = "Welcom to the sale page ";
article.appendChild(h1);
// seattle part
var h4 = document.createElement("h2");
h4.textContent = "Seattle :";
article.appendChild(h4);

var hour = [
  "6am",
  "7am",
  "8am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
];
var unOrder = document.createElement("ul");
article.appendChild(unOrder);

// this loop for the unorder list for seattle
Seattle.ruslt();
for (var i = 0; i < Seattle.ruslt2.length; i++) {
  var listItem = document.createElement("li");
  listItem.textContent =
    hour[i] + ":" + " " + Seattle.ruslt2[i].toFixed(0) + " " + "cookies";
  unOrder.appendChild(listItem);
}
// this loop for the total
var total = 0;
for (var i = 0; i < Seattle.ruslt2.length; i++) {
  total = total + Seattle.ruslt2[i];
  listItem.textContent =
    "Total" + ":" + " " + total.toFixed(0) + " " + "cookies";
  unOrder.appendChild(listItem);
}

// Tokyo part
var h4 = document.createElement("h2");
h4.textContent = "Tokyo :";
article.appendChild(h4);


var unOrder = document.createElement("ul");
article.appendChild(unOrder);

// this loop for the unorder list
Tokyo.ruslt();
for (var i = 0; i < Tokyo.ruslt2.length; i++) {
  var listItem = document.createElement("li");
  listItem.textContent =
    hour[i] + ":" + " " + Tokyo.ruslt2[i].toFixed(0) + " " + "cookies";
  unOrder.appendChild(listItem);
}
// this loop for the total
var total = 0;
for (var i = 0; i < Tokyo.ruslt2.length; i++) {
  total = total + Tokyo.ruslt2[i];
  listItem.textContent =
    "Total" + ":" + " " + total.toFixed(0) + " " + "cookies";
  unOrder.appendChild(listItem);
}

// Dubai part
var h4 = document.createElement("h2");
h4.textContent = "Dubai :";
article.appendChild(h4);


var unOrder = document.createElement("ul");
article.appendChild(unOrder);

// this loop for the unorder list for seattle
Dubai.ruslt();
for (var i = 0; i < Dubai.ruslt2.length; i++) {
  var listItem = document.createElement("li");
  listItem.textContent =
    hour[i] + ":" + " " + Dubai.ruslt2[i].toFixed(0) + " " + "cookies";
  unOrder.appendChild(listItem);
}
// this loop for the total
var total = 0;
for (var i = 0; i < Dubai.ruslt2.length; i++) {
  total = total + Dubai.ruslt2[i];
  listItem.textContent =
    "Total" + ":" + " " + total.toFixed(0) + " " + "cookies";
  unOrder.appendChild(listItem);
}

// Paris part

var h4 = document.createElement("h2");
h4.textContent = "Paris :";
article.appendChild(h4);


var unOrder = document.createElement("ul");
article.appendChild(unOrder);

// this loop for the unorder list for seattle
Paris.ruslt();
for (var i = 0; i < Paris.ruslt2.length; i++) {
  var listItem = document.createElement("li");
  listItem.textContent =
    hour[i] + ":" + " " + Paris.ruslt2[i].toFixed(0) + " " + "cookies";
  unOrder.appendChild(listItem);
}
// this loop for the total
var total = 0;
for (var i = 0; i < Paris.ruslt2.length; i++) {
  total = total + Paris.ruslt2[i];
  listItem.textContent =
    "Total" + ":" + " " + total.toFixed(0) + " " + "cookies";
  unOrder.appendChild(listItem);
}

// Lima

var h4 = document.createElement("h2");
h4.textContent = "Lima :";
article.appendChild(h4);


var unOrder = document.createElement("ul");
article.appendChild(unOrder);

// this loop for the unorder list for seattle
Lima.ruslt();
for (var i = 0; i < Lima.ruslt2.length; i++) {
  var listItem = document.createElement("li");
  listItem.textContent =
    hour[i] + ":" + " " + Lima.ruslt2[i].toFixed(0) + " " + "cookies";
  unOrder.appendChild(listItem);
}
// this loop for the total
var total = 0;
for (var i = 0; i < Lima.ruslt2.length; i++) {
  total = total + Lima.ruslt2[i];
  listItem.textContent =
    "Total" + ":" + " " + total.toFixed(0) + " " + "cookies";
  unOrder.appendChild(listItem);
}

//
var backImg = document.createElement('img');
backImg .setAttribute('src', 'img/'+ '');
body.appendChild(backImg );

