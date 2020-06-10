'use strict';


/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* 

First things first: lets add the header, main, and footers in the HTML and
then lets start assigning the sales.html elements: 

*/ 

var heading1 = document.createElement('h1');

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1am', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var heading1Text = document.createTextNode('SALES');

heading1.appendChild(heading1Text);

var salesH1 = document.getElementById('salesHeader');

salesH1.appendChild(heading1);

/* 

Then in Main we add the placeholder for the list per store in the html 

*/ 

var heading3 = document.createElement('h3');

var heading3Text = document.createTextNode('Stores:');

heading3.appendChild(heading3Text);

var salesH3 = document.getElementById('salesMain');

salesH3.appendChild(heading3);


/* 

Now lets make the Objects 

*/ 

// Create an store object:

var randomizer = function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
};

// gloval variable

var hoursOpen = 14;

// store Object 

var batchHour = [];

var peopleHour = [];

var grandTotal = [];

// store Object 






// Calling the functions for our object



// var rob = {

//   name: 'Rob',

//   coolness: 99,

// };


// function Person(fName, coolnesNum) {

//   this.name = fName;

//   this.coolness = coolnesNum;

// }

// var rob2 = new Person('Robert', 666);

// console.log(rob2);

var cookieStand = {
 
  standName: 'name',

  minHourlyCustomer: 0, 
 
  maxHourlyCustomer: 0, 
 
  customerAvgCookies: 0,
 
  cookiesPerHour: [],
 
  customerPerHour: [],

  totalCookies: 0,

};


function StoreBuilder(name, minC, maxC, avg, cPH, cuPH, tC){
 
  this.name = name;

  this.minHourlyCustomer = minC;

  this.maxHourlyCustomer = maxC;

  this.customerAvgCookies = avg;

  this.cookiesPerHour = cPH;

  cPH = [];

  this.customersPerHour = cuPH;

  cuPH = [];

  this.totalCookies = tC;

  tC = [];

  // calculates the people coming to the store per hour
   
  function calculateCustomersPerHour() {
  
    for(var i = 0; i < hoursOpen; i++) {
      
      var customers = randomizer(minC, maxC);
  
      peopleHour.push(customers);
  
    }

      
    return peopleHour;
  
  } 
  
  // calculates the cookies sold per hour
  
  function calculateCookiesPerHOur() {
  
    for(var i = 0; i < hoursOpen; i++) {
      
      var cookies = Math.ceil(peopleHour[i] * avg);

      batchHour.push(Math.ceil(cookies));
  
    }
  

  
    return batchHour;

  } 
  
  // calculates the total
  
  function calculateCookiesTotal() {
  
    var cookies = 0;
  
    for(var i = 0; i < hoursOpen; i++) {
      
      cookies += batchHour[i];

      
    }
 

    grandTotal.push(cookies);

    return grandTotal;
  
  }
  
  
  randomizer();
  calculateCustomersPerHour();
  calculateCookiesPerHOur();
  calculateCookiesTotal();

}



var Seattle = new StoreBuilder('Seattle', 23, 65, 6.3, peopleHour, batchHour, grandTotal);
// var Tokyo = new StoreBuilder('Tokyo', 3, 24, 1.2, peopleHour, batchHour, grandTotal);
// var Dubai = new StoreBuilder('Dubai', 11, 38, 3.7, peopleHour, batchHour, grandTotal);
// var Paris = new StoreBuilder('Paris', 20, 38, 2.3, peopleHour, batchHour, grandTotal);
// var Lima = new StoreBuilder('Lima', 2, 16, 4.6, peopleHour, batchHour, grandTotal);


// name, minC, maxC, avg, cPH, cuPH, tC
/* 
  
  
  Creating our Stores
  
  
  */



// var Seattle = storeBuilder('Seattle', 23, 65, 6.3);
// var Tokyo = storeBuilder('Tokyo', 3, 24, 1.2);
// var Dubai = storeBuilder('Dubai', 11, 38, 3.7);
// var Paris = storeBuilder('Paris', 20, 38, 2.3);
// var buildLima = storeBuilder('Lima', 2, 16, 4.6);



/* 
  
  
  Rendering
  
  
  */

function render(city){

  function row(){

    var tR2 = document.createElement('TR');

    tR2.setAttribute('id', 'myTr2');
  
    document.getElementById('myTable').appendChild(tR2);


  }


  function tableStart(){

    var tableDiv = document.createElement('div');
    tableDiv.setAttribute('class', 'myTableHolder');
    tableDiv.style.color = 'black'; 
    tableDiv.style.border = 'solid green 2px'; 
    tableDiv.style.textAlign = 'center';
    
  
    // Set Styles for table
  
    var tableTag = document.createElement('TABLE');
  
    tableTag.style.display= 'inlineBlock'; 


    tableTag.setAttribute('id', 'myTable');
    document.body.appendChild(tableDiv);
    tableDiv.appendChild(tableTag);
  
    /// First Row
    /// location
  
    var tH1 = document.createElement('TH');
    tH1.setAttribute('class', 'myTH1');
    document.getElementById('myTable').appendChild(tH1);
    var tH1Text = document.createTextNode(city.name);
    tH1.appendChild(tH1Text);
  
    //Total store cookies
  
    var tH5 = document.createElement('TH');
    tH5.setAttribute('class', 'myTH1');
    document.getElementById('myTable').appendChild(tH5);
    var tH5Text = document.createTextNode('Total Cookies Sold: ');
    tH5.appendChild(tH5Text);

  }


  

  // loop for hours: 
  function loopForFirstRow(){
  
    var tH5 = document.createElement('TH');
    tH5.setAttribute('class', 'myTH1');
    document.getElementById('myTable').appendChild(tH5);
    var tH5Text = document.createTextNode('=>' + grandTotal[0] + '<=');
    tH5.appendChild(tH5Text);
  
    for(let i = 0; i < hours.length; i++){

      var tH6 = document.createElement('TH');
      tH6.setAttribute('class', 'myTH1');
      document.getElementById('myTable').appendChild(tH6);
      var tH6Text = document.createTextNode(hours[i]);
      tH6.appendChild(tH6Text);

    }
  }

  function secondRow(){
    var td = document.createElement('TD');
    td.setAttribute('class', 'myTd1');
    document.getElementById('myTable').appendChild(td);
    var tdT = document.createTextNode('Cookies Sold Per Hour');
    td.appendChild(tdT);

    var td2 = document.createElement('TD');
    td2.setAttribute('class', 'myTd1');
    document.getElementById('myTable').appendChild(td2);
    var td2T = document.createTextNode('');
    td2.appendChild(td2T);

    var td2 = document.createElement('TD');
    td2.setAttribute('class', 'myTd1');
    document.getElementById('myTable').appendChild(td2);
    var td2T = document.createTextNode('');
    td2.appendChild(td2T);
  
    for(let i = 0; i < hours.length; i++){

      var td2 = document.createElement('TD');
      td2.setAttribute('class', 'myTd1');
      document.getElementById('myTable').appendChild(td2);
      var td2T = document.createTextNode(city.cookiesPerHour[i]);
      td2.appendChild(td2T);

    }
  }

  function thirdRow(){
    var td = document.createElement('TD');
    td.setAttribute('class', 'myTd1');
    document.getElementById('myTable').appendChild(td);
    var tdT = document.createTextNode('Customers per Hour');
    td.appendChild(tdT);

    var td2 = document.createElement('TD');
    td2.setAttribute('class', 'myTd1');
    document.getElementById('myTable').appendChild(td2);
    var td2T = document.createTextNode('');
    td2.appendChild(td2T);

    var td2 = document.createElement('TD');
    td2.setAttribute('class', 'myTd1');
    document.getElementById('myTable').appendChild(td2);
    var td2T = document.createTextNode('');
    td2.appendChild(td2T);
  
    for(let i = 0; i < hours.length; i++){

      var td2 = document.createElement('TD');
      td2.setAttribute('class', 'myTd1');
      document.getElementById('myTable').appendChild(td2);
      var td2T = document.createTextNode(city.customersPerHour[i]);
      td2.appendChild(td2T);

    }

  }

  tableStart();

  loopForFirstRow();

  row();

  secondRow();

  row();

  thirdRow();
 
  row();
  

  
}


render(Seattle);
// render(Tokyo);
// render(Paris);
// render(Dubai);
// render(Lima);

