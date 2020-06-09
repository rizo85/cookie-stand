/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* 

First things first: lets add the header, main, and footers in the HTML and
then lets start assigning the sales.html elements: 

*/ 

var heading1 = document.createElement('h1');

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


var cookieStandSeattle = {
  minHourlyCustomer: 23, 
  maxHourlyCustomer: 65, 
  customerAvgCookies: 6.3,
  hoursOpen: 14,
  cookiesPerHour: []
};

var cookieStandParis = {
  minHourlyCustomer: 20, 
  maxHourlyCustomer: 38, 
  customerAvgCookies: 2.3,
  hoursOpen: 14,
  cookiesPerHour: []
};

var cookieStandLima = {
  minHourlyCustomer: 2, 
  maxHourlyCustomer: 16, 
  customerAvgCookies: 4.6,
  hoursOpen: 14,
  cookiesPerHour: []
};

var cookieStandDubai = {

  minHourlyCustomer: 11, 
  maxHourlyCustomer: 38, 
  customerAvgCookies: 3.7,
  hoursOpen: 14,
  cookiesPerHour: []

};

var cookieStandTokyo = {
  
  minHourlyCustomer: 3, 
  maxHourlyCustomer: 24, 
  customerAvgCookies: 1.2,
  hoursOpen: 14,
  cookiesPerHour: []
  
};




/* 

Seattle list

*/ 

function seattle(){

  var totalCookies = 0;

  var storeName = document.createElement('h4');

  var storeNameText = document.createTextNode('Seattle');
  
  storeName.appendChild(storeNameText);
  
  var storeStats = document.getElementById('salesMain');
  
  storeStats.appendChild(storeName);

  var storeHour = 0;

  var storeList = document.createElement('ul');

  var storeListItem = document.createElement('li');

  var storeListItemTextAM = document.createTextNode(storeHour + ' am: ' + cookies + 'cookies');

  var storeListItemTextPM = document.createTextNode(storeHour + ' pm: ' + cookies + 'cookies');

  function hourlyCookie(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  var cookies = 0;

  storeStats.appendChild(storeList);

  //am cookies

  for (var i = 0; i < 6; i++) {



    cookies = hourlyCookie(cookieStandSeattle.minHourlyCustomer, cookieStandSeattle.maxHourlyCustomer);

    storeListItemTextAM = document.createTextNode((storeHour + 6 + i) + ' am: ' + cookies + ' cookies');

    storeList.appendChild(storeListItemTextAM);

    var breakDeclaration = document.createElement('br');

    storeList.appendChild(breakDeclaration);

    totalCookies += cookies;
    
  }
  
  //noon cookies

  for (var j = 0; j < 1; j++) {

    cookies = hourlyCookie(cookieStandSeattle.minHourlyCustomer, cookieStandSeattle.maxHourlyCustomer);

    storeListItemTextAM = document.createTextNode((storeHour + 12 ) + ' pm: ' + cookies + ' cookies');

    storeList.appendChild(storeListItemTextAM);

    breakDeclaration = document.createElement('br');

    storeList.appendChild(breakDeclaration);

    totalCookies += cookies;

  }
 
  //afternoon cookies

  for (var k = 0; k < 7; k++) {

    cookies = hourlyCookie(cookieStandSeattle.minHourlyCustomer, cookieStandSeattle.maxHourlyCustomer);

    storeListItemTextAM = document.createTextNode((storeHour + k + 1) + ' pm: ' + cookies + ' cookies');

    storeList.appendChild(storeListItemTextAM);

    breakDeclaration = document.createElement('br');

    storeList.appendChild(breakDeclaration);

    totalCookies += cookies;

  }

  console.log(totalCookies + 'for Seattle');

  var storeListItemTotal = document.createTextNode(totalCookies + ' cookies!');

  storeList.appendChild(storeListItemTotal);

  breakDeclaration = document.createElement('br');

  storeList.appendChild(breakDeclaration);

}

seattle();

/* 

tokyo list

*/ 

function tokyo(){

  var storeName = document.createElement('h4');

  var storeNameText = document.createTextNode('Tokyo');
  
  storeName.appendChild(storeNameText);
  
  var storeStats = document.getElementById('salesMain');
  
  storeStats.appendChild(storeName);

  var storeHour = 0;

  var cookies = 0;

  var storeList = document.createElement('ul');

  var storeListItem = document.createElement('li');

  var storeListItemTextAM = document.createTextNode(storeHour + ' am: ' + cookies + 'cookies');

  var storeListItemTextPM = document.createTextNode(storeHour + ' pm: ' + cookies + 'cookies');

  var totalCookies = 0;

  storeStats.appendChild(storeList);

  function hourlyCookie(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  storeStats.appendChild(storeList);

  //am cookies

  for (var i = 0; i < 6; i++) {



    cookies = hourlyCookie(cookieStandTokyo.minHourlyCustomer, cookieStandTokyo.maxHourlyCustomer);

    storeListItemTextAM = document.createTextNode((storeHour + 6 + i) + ' am: ' + cookies + ' cookies');

    storeList.appendChild(storeListItemTextAM);

    var breakDeclaration = document.createElement('br');

    storeList.appendChild(breakDeclaration);

    totalCookies += cookies;
    
  }
  
  //noon cookies

  for (var j = 0; j < 1; j++) {

    cookies = hourlyCookie(cookieStandTokyo.minHourlyCustomer, cookieStandTokyo.maxHourlyCustomer);

    storeListItemTextAM = document.createTextNode((storeHour + 12 ) + ' pm: ' + cookies + ' cookies');

    storeList.appendChild(storeListItemTextAM);

    breakDeclaration = document.createElement('br');

    storeList.appendChild(breakDeclaration);

    totalCookies += cookies;

  }
 
  //afternoon cookies

  for (var k = 0; k < 7; k++) {

    cookies = hourlyCookie(cookieStandTokyo.minHourlyCustomer, cookieStandTokyo.maxHourlyCustomer);

    storeListItemTextAM = document.createTextNode((storeHour + k + 1) + ' pm: ' + cookies + ' cookies');

    storeList.appendChild(storeListItemTextAM);

    breakDeclaration = document.createElement('br');

    storeList.appendChild(breakDeclaration);

    totalCookies += cookies;

  }

  console.log(totalCookies + 'for Tokyo');

  var storeListItemTotal = document.createTextNode(totalCookies + ' cookies!');

  storeList.appendChild(storeListItemTotal);

  breakDeclaration = document.createElement('br');

  storeList.appendChild(breakDeclaration);

}

tokyo();

/* 

dubai list

*/ 

function dubai(){

  var storeName = document.createElement('h4');

  var storeNameText = document.createTextNode('Dubai');
  
  storeName.appendChild(storeNameText);
  
  var storeStats = document.getElementById('salesMain');
  
  storeStats.appendChild(storeName);

  var storeHour = 0;

  var cookies = 0;

  var storeList = document.createElement('ul');

  var storeListItem = document.createElement('li');

  var storeListItemTextAM = document.createTextNode(storeHour + ' am: ' + cookies + 'cookies');

  var storeListItemTextPM = document.createTextNode(storeHour + ' pm: ' + cookies + 'cookies');

  var totalCookies = 0;

  storeStats.appendChild(storeList);

  function hourlyCookie(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  storeStats.appendChild(storeList);

  //am cookies

  for (var i = 0; i < 6; i++) {



    cookies = hourlyCookie(cookieStandDubai.minHourlyCustomer, cookieStandDubai.maxHourlyCustomer);

    storeListItemTextAM = document.createTextNode((storeHour + 6 + i) + ' am: ' + cookies + ' cookies');

    storeList.appendChild(storeListItemTextAM);

    var breakDeclaration = document.createElement('br');

    storeList.appendChild(breakDeclaration);

    totalCookies += cookies;
    
  }
  
  //noon cookies

  for (var j = 0; j < 1; j++) {

    cookies = hourlyCookie(cookieStandDubai.minHourlyCustomer, cookieStandDubai.maxHourlyCustomer);

    storeListItemTextAM = document.createTextNode((storeHour + 12 ) + ' pm: ' + cookies + ' cookies');

    storeList.appendChild(storeListItemTextAM);

    breakDeclaration = document.createElement('br');

    storeList.appendChild(breakDeclaration);

    totalCookies += cookies;

  }
 
  //afternoon cookies

  for (var k = 0; k < 7; k++) {

    cookies = hourlyCookie(cookieStandDubai.minHourlyCustomer, cookieStandDubai.maxHourlyCustomer);

    storeListItemTextAM = document.createTextNode((storeHour + k + 1) + ' pm: ' + cookies + ' cookies');

    storeList.appendChild(storeListItemTextAM);

    breakDeclaration = document.createElement('br');

    storeList.appendChild(breakDeclaration);

    totalCookies += cookies;

  }

  console.log(totalCookies + 'for Dubai');

  var storeListItemTotal = document.createTextNode(totalCookies + ' cookies!');

  storeList.appendChild(storeListItemTotal);

  breakDeclaration = document.createElement('br');

  storeList.appendChild(breakDeclaration);

}

dubai();

/* 

Paris list

*/ 

function paris(){

  var storeName = document.createElement('h4');

  var storeNameText = document.createTextNode('Paris');
  
  storeName.appendChild(storeNameText);
  
  var storeStats = document.getElementById('salesMain');
  
  storeStats.appendChild(storeName);

  var storeHour = 0;

  var cookies = 0;

  var storeList = document.createElement('ul');

  var storeListItem = document.createElement('li');

  var storeListItemTextAM = document.createTextNode(storeHour + ' am: ' + cookies + 'cookies');

  var storeListItemTextPM = document.createTextNode(storeHour + ' pm: ' + cookies + 'cookies');

  var totalCookies = 0;

  storeStats.appendChild(storeList);

  function hourlyCookie(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  storeStats.appendChild(storeList);

  //am cookies

  for (var i = 0; i < 6; i++) {



    cookies = hourlyCookie(cookieStandParis.minHourlyCustomer, cookieStandParis.maxHourlyCustomer);

    storeListItemTextAM = document.createTextNode((storeHour + 6 + i) + ' am: ' + cookies + ' cookies');

    storeList.appendChild(storeListItemTextAM);

    var breakDeclaration = document.createElement('br');

    storeList.appendChild(breakDeclaration);

    totalCookies += cookies;
    
  }
  
  //noon cookies

  for (var j = 0; j < 1; j++) {

    cookies = hourlyCookie(cookieStandParis.minHourlyCustomer, cookieStandParis.maxHourlyCustomer);

    storeListItemTextAM = document.createTextNode((storeHour + 12 ) + ' pm: ' + cookies + ' cookies');

    storeList.appendChild(storeListItemTextAM);

    breakDeclaration = document.createElement('br');

    storeList.appendChild(breakDeclaration);

    totalCookies += cookies;

  }
 
  //afternoon cookies

  for (var k = 0; k < 7; k++) {

    cookies = hourlyCookie(cookieStandParis.minHourlyCustomer, cookieStandParis.maxHourlyCustomer);

    storeListItemTextAM = document.createTextNode((storeHour + k + 1) + ' pm: ' + cookies + ' cookies');

    storeList.appendChild(storeListItemTextAM);

    breakDeclaration = document.createElement('br');

    storeList.appendChild(breakDeclaration);

    totalCookies += cookies;

  }

  console.log(totalCookies + 'for Paris');

  var storeListItemTotal = document.createTextNode(totalCookies + ' cookies!');

  storeList.appendChild(storeListItemTotal);

  breakDeclaration = document.createElement('br');

  storeList.appendChild(breakDeclaration);

}

paris();


/* 

Lima list

*/ 

function lima(){

  var storeName = document.createElement('h4');

  var storeNameText = document.createTextNode('Lima');
  
  storeName.appendChild(storeNameText);
  
  var storeStats = document.getElementById('salesMain');
  
  storeStats.appendChild(storeName);

  var storeHour = 0;

  var cookies = 0;

  var storeList = document.createElement('ul');

  var storeListItem = document.createElement('li');

  var storeListItemTextAM = document.createTextNode(storeHour + ' am: ' + cookies + 'cookies');

  var storeListItemTextPM = document.createTextNode(storeHour + ' pm: ' + cookies + 'cookies');

  var totalCookies = 0;

  storeStats.appendChild(storeList);

  function hourlyCookie(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  storeStats.appendChild(storeList);

  //am cookies

  for (var i = 0; i < 6; i++) {



    cookies = hourlyCookie(cookieStandLima.minHourlyCustomer, cookieStandLima.maxHourlyCustomer);

    storeListItemTextAM = document.createTextNode((storeHour + 6 + i) + ' am: ' + cookies + ' cookies');

    storeList.appendChild(storeListItemTextAM);

    var breakDeclaration = document.createElement('br');

    storeList.appendChild(breakDeclaration);

    totalCookies += cookies;
    
  }
  
  //noon cookies

  for (var j = 0; j < 1; j++) {

    cookies = hourlyCookie(cookieStandLima.minHourlyCustomer, cookieStandLima.maxHourlyCustomer);

    storeListItemTextAM = document.createTextNode((storeHour + 12 ) + ' pm: ' + cookies + ' cookies');

    storeList.appendChild(storeListItemTextAM);

    breakDeclaration = document.createElement('br');

    storeList.appendChild(breakDeclaration);

    totalCookies += cookies;

  }
 
  //afternoon cookies

  for (var k = 0; k < 7; k++) {

    cookies = hourlyCookie(cookieStandLima.minHourlyCustomer, cookieStandLima.maxHourlyCustomer);

    storeListItemTextAM = document.createTextNode((storeHour + k + 1) + ' pm: ' + cookies + ' cookies');

    storeList.appendChild(storeListItemTextAM);

    breakDeclaration = document.createElement('br');

    storeList.appendChild(breakDeclaration);

    totalCookies += cookies;

  }

  console.log(totalCookies + 'for Seattle');

  var storeListItemTotal = document.createTextNode(totalCookies + ' cookies!');

  storeList.appendChild(storeListItemTotal);

  breakDeclaration = document.createElement('br');

  storeList.appendChild(breakDeclaration);

}

lima();





console.log(cookieStandSeattle);

console.log(cookieStandTokyo);

console.log(cookieStandParis);

console.log(cookieStandDubai);

console.log(cookieStandLima);

function randomCustomerNum(){

}

function randomMaxPeople(){

}

function customerAvgCookies(){

}


