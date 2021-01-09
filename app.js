"use strict";
var arrayOverall = [];
///////////////////////////
///////location  constrctor//////////

function Location(locationName, min, max, avgCookisperCus) {
  this.locationName = locationName;
  this.min = min;
  this.max = max;
  this.avgCookisperCus = avgCookisperCus;
  this.ruslt = [];
  arrayOverall.push(this);
  // console.log(arrayOverall);
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

/////////////////////
/////////////////////
// adding locations list by creating an object
var seattle = new Location("seattle", "23", "65", "6.3");
var Tokyo = new Location("Tokyo", "3", "24", "1.2");
var Dubai = new Location("Dubai", "11", "38", "3.7");
var Paris = new Location("Paris", "20", "38", "2.3");
var Lima = new Location("Lima", "2", "16", "4.6");
/////////////////
/////////////////

//here i will call the function

for(var i=0;i<arrayOverall.length;i++){ ////////////////////////////i think here is my problem//////////////
   arrayOverall[i].ruslt2();                      ///////////////////im not calling the newloc.ruslt2();///////////////////////
}                                                ///////////////////but the function dose not work///////
// seattle.ruslt2();
// Tokyo.ruslt2();
// Dubai.ruslt2();
// Paris.ruslt2();
// Lima.ruslt2();

//////////////////////////
/////////////////////////

///////////////////////////////
//  create the table
/////////////////////////

var mainElement = document.getElementById("displayArray");

var article = document.createElement("article");
mainElement.appendChild(article);

var table = document.createElement("table");
article.appendChild(table);

headFun(); // calling the head of the table
dataFun(); // calling the calculation data inside the table

////////////////////////////////////////////////////////////////
////////////////////////////////
///the event
////////////////////////////////
//////////////////////////////////////////////////////////////////
var locationForm = document.getElementById("newLocationForm");
locationForm.addEventListener("submit", newRender);
function newRender(event) {
  alert("form submitted!");
  event.preventDefault();

//////////////////to delet the last total to add the new location
  table.deleteRow(-1); // the -1 indecate to the last row in the table 

  var loName = event.target.locationName.value;
  var min = event.target.min.value;
  var max = event.target.max.value;
  var avg = event.target.avg.value;

  var newLoc = new Location(loName, min, max, avg);
  console.log(newLoc);
  newLoc.ruslt2();
  // newLocation.ruslt2();

  var tableSecondRow = document.createElement("tr");
  table.appendChild(tableSecondRow);

  var dataCell1 = document.createElement("td");
  dataCell1.textContent = loName;

  tableSecondRow.appendChild(dataCell1);

  for (var i = 0; i < 14; i++) {
    var dataCell2 = document.createElement("td");
    dataCell2.textContent = newLoc.ruslt[i].toFixed(0);
    tableSecondRow.appendChild(dataCell2);
  }
  var total = 0;
  for (var i = 0; i < 14; i++) {
    total = total + newLoc.ruslt[i];
  }
  var dataCellTotal = document.createElement("td");
  dataCellTotal.textContent = total.toFixed(0);
  tableSecondRow.appendChild(dataCellTotal);


// Delete second row
// table.deleteRow(-1);


  footer(); 
}
footer(); // calling the calculate the total

/////////////////////////////////////////////here is the functions bodys ///////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
//
//
//
//
//
////////////////////////////////////////////////////////////////
/////////////////////////////////
// the table header   function
///////////////////////////////////
////////////////////////////////////////////////////////////////
function headFun() {
  var tableFirstRow = document.createElement("tr");
  table.appendChild(tableFirstRow);

  var headerArray = [
    " ",
    "6:00am",
    "7:00am",
    "8:00am",
    "9:00am",
    "10:00am",
    "11:00am",
    "12:00pm",
    "1:00pm",
    "2:00pm",
    "3:00pm",
    "4:00pm",
    "5:00pm",
    "6:00pm",
    "7:00pm",
    "Daily Location Total",
  ];
  for (var i = 0; i < headerArray.length; i++) {
    var headerOne = document.createElement("th");

    headerOne.textContent = headerArray[i];
    tableFirstRow.appendChild(headerOne);
  }
}
////////////////////////////////////////////////////////////////
/////////////////////////////////
// the data inside the table  function
///////////////////////////////////
////////////////////////////////////////////////////////////////
function dataFun() {
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
}

//////
///////////////////////////////////
//this is for the footer  function
//////////////////////////////////

// the total row
function footer() {
  var tableLastRow = document.createElement("tr");
  table.appendChild(tableLastRow);

  var dataCell1 = document.createElement("td");
  dataCell1.textContent = "Total";
  tableLastRow.appendChild(dataCell1);

  for (var i = 0; i < 14; i++) {
    var hoursTotal = 0;
    console.log(arrayOverall)
    for (var j = 0; j < arrayOverall.length; j++) {
      // console.log(arrayOverall[j]);
      hoursTotal = hoursTotal + arrayOverall[j].ruslt[i];
    }
    var dataCellTotal = document.createElement("td");
    dataCellTotal.textContent = hoursTotal.toFixed(0);
    tableLastRow.appendChild(dataCellTotal);
  }

  //  the td for the total of daily hours  total

  // var total = 0;
  var dailyTotal = 0;

  for (var i = 0; i < 14; i++) {
  
 for (var z = 0; z < arrayOverall.length; z++) {
   dailyTotal = dailyTotal + arrayOverall[z].ruslt[i];
 }
    
}
var dataCellTotal = document.createElement("td");
dataCellTotal.textContent = dailyTotal.toFixed(0);
tableLastRow.appendChild(dataCellTotal);  
}
