console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {
var middleEarth =  document.createElement('section')
middleEarth.id = 'middle-earth'
lands.forEach(function(land){
var landArticle = document.createElement('article')
var landTitle = document.createElement('h1')
landTitle.textContent = land
landArticle.appendChild(landTitle)
middleEarth.appendChild(landArticle)
})
body.appendChild(middleEarth)
  // create a section tag with an id of middle-earth
  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
}

makeMiddleEarth();


// Part 2

function makeHobbits() {
var theShire = document.querySelectorAll('article')[0]
var hobbitList = document.createElement('ul')
hobbits.forEach(function(name){
  var hobbitName = document.createElement('li')
  hobbitName.textContent = name
  hobbitName.classList += "hobbit"
  hobbitList.appendChild(hobbitName)
})

theShire.appendChild(hobbitList)


  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  // give each hobbit a class of hobbit
}
makeHobbits();
// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo

var div = document.createElement('div')
div.id = 'the-ring'
div.classList += 'magic-imbued-jewelry'
div.addEventListener('click', nazgulScreech)
var frodo = document.querySelectorAll('li')[0]
frodo.appendChild(div)
}
keepItSecretKeepItSafe()
// Part 4


function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell

  var theRivendell = document.querySelectorAll('article')[1]
  var buddiesList = document.createElement('ul')
  var aside = document.createElement('aside')
  buddies.forEach(function(name){
    var buddiesName = document.createElement('li')
    buddiesName.textContent = name
    buddiesList.appendChild(buddiesName)
    aside.appendChild(buddiesList)
  })

  theRivendell.appendChild(aside)

}
makeBuddies()

// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  var rivendell = document.querySelectorAll('article')[1]
  var strider =  rivendell.querySelectorAll('li')[3]
  strider.textContent = 'Aragorn'
}
beautifulStranger()

// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell

var theShire = body.querySelectorAll('article')[0]
var hobbitList = theShire.querySelector('ul')
var removed = theShire.removeChild(hobbitList)
var theRivendell = body.querySelectorAll('article')[1]
theRivendell.appendChild(removed)

}
leaveTheShire()




// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
var rivendell = document.querySelectorAll('article')[1]
var fellowship = document.createElement('div')
rivendell.appendChild(fellowship)
var members = document.querySelectorAll('li')
members.forEach(function(name){
  fellowship.appendChild(name)
// alert(name.textContent)
})
}
forgeTheFellowShip()

// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
  var rivendell = document.querySelectorAll('article')[1]
  var gandalf =  rivendell.querySelectorAll('li')[0]
  gandalf.textContent = 'Gandalf the White'
  gandalf.style.backgroundColor = 'white'
  gandalf.style.border = 'grey 3px solid'

}
theBalrog()

// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
// alert ("Horn of gondor has been blown. Boromir's been killed by the Urak-hai!")
var rivendell = document.querySelectorAll('article')[1]
var boromir =  rivendell.querySelectorAll('li')[4]
boromir.style.textDecoration = "line-through"
var boromirFellowship = rivendell.querySelector('div')
boromirFellowship.removeChild(boromir)

}
hornOfGondor()

// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
  var rivendell = document.querySelectorAll('article')[1]
  var frodo =  rivendell.querySelectorAll('li')[4]
  var sam =  rivendell.querySelectorAll('li')[5]
  var fellowship = rivendell.querySelector('div')
  var removeFrodo = fellowship.removeChild(frodo)
  var removeSam = fellowship.removeChild(sam)

  var mordor = document.querySelectorAll('article')[2]
  mordor.appendChild(frodo)
  mordor.appendChild(sam)

  var div = document.createElement('div')
  div.id = 'mount-doom'
  mordor.appendChild(div)

}
itsDangerousToGoAlone()

// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
  var div = document.createElement('div')
  div.id = 'gollum'
  var mordor = document.querySelectorAll('article')[2]
  mordor.appendChild(div)
  var frodo = mordor.querySelectorAll('li')[0]
  var ring = frodo.querySelector('#the-ring')
  var frodoNoRing = frodo.removeChild(ring)
  div.appendChild(frodoNoRing)
  var mountDoom = mordor.querySelector('#mount-doom')
  mountDoom.appendChild(div)
}
weWantsIt()
// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
  var mordor = document.querySelectorAll('article')[2]
  var rivendell = document.querySelectorAll('article')[1]
  var theShire = document.querySelectorAll('article')[0]
  var gollum = document.querySelector('#gollum')
  gollum.parentElement.removeChild(gollum);
  var hobbits = document.querySelectorAll('.hobbit')
  hobbits.forEach(function(name){theShire.appendChild(name)})
  var fellowship = rivendell.querySelectorAll('li')
  fellowship.forEach(function(name){
    name.parentElement.removeChild(name)
  })

}
thereAndBackAgain()
