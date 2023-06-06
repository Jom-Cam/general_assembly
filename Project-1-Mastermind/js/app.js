
//Planner 

// Bonus 
// Menu selection -> vs AI or vs Player
// Menu Repeatable Colour Mode
// Longer Code Mode 
// vs AI -> Difficulty mode -> Tries Allowed
// vs Player -> Player 1 sets code -> Player 2 Guess code -> Points Tallied up ,rounds gone winner = 5 or score 
// Give up Option // New Game Option // Hints Option 
// How to Play Option


// Game Start 
// Grid and UI Generated 
// XXXX Game starts (/or New Game) -> Button is Pressed -> Start game
// -Here ATM-> Start Game -> AI Selects Random Code ------ Gotta Remove repeated pattern
// _BONUS_ Player Selects Code -> Places into Array -> Submit Button 
// XXXX Submit Button -> Comparison -> Results Statement shown -> 1 try lost
// XXXX Reset and Player tries again -> repeat until all tries is lost 
// If code is cracked score = 1 -> promt if Player want to try again

// UI Changes
// Start Game -> 4 hidden code placed 
// On Click of Color -> Place Color in order (1st press = 1st)
// On Clear -> Clear Array of Colour -> Clear Visuals 
// On Clear previous -> remove last placed -> Clear Visual
// On Submit -> Move array to Game Board -> Visual Change on Board 
// On Visual Change of Game Board -> Feedback pins Change on Board
// New Array Placed On top of old Array -> Visual movement on Board 
// On Final Try or Code Break -> Reveal Hidden Code

function init() {

  const frodo = document.querySelector('#frodo')
  const sam = document.querySelector('#sam')
  const merry = document.querySelector('#merry')
  const pippin = document.querySelector('#pippin')
  const aragorn = document.querySelector('#aragorn')
  const legolas = document.querySelector('#legolas')
  const gimli = document.querySelector('#gimli')
  const boramir = document.querySelector('#boramir')
  const newGame = document.querySelector('#newGame')
  const submit = document.querySelector('#submit')
  const clearLast = document.querySelector('#clearLast')
  const clearAll = document.querySelector('#clearAll')
  const repeated = document.querySelector('#repeat')
  const fellowSize = document.querySelector('#codeLength')
  const opposition = document.querySelector('#competition')
  const backgroundSong = document.querySelector('#backgroundMusic')
  const grid = document.querySelector('.gridContainer')
  const preview0 = document.querySelector('#preview0')
  const preview1 = document.querySelector('#preview1')
  const preview2 = document.querySelector('#preview2')
  const preview3 = document.querySelector('#preview3')
  const mute = document.querySelector('#mute')
  const currentArray = document.getElementsByClassName('currentRowItem')
  const currentResults = document.getElementsByClassName('indicator')
  const hiddenReveal = document.getElementsByClassName('fellowshipHidden')
  const howToPlay = document.querySelector('#hotToPlay')


  // Query Selector All --> using not 

  let lives = 10
  let arrayLength = 4
  const divArray = []
  const indicatorArray = []

  const cellCount = arrayLength * lives

  for (let i = 0; i < 1; i++) {
    const cell = document.createElement('div')
    cell.className = 'cellContainer'
    cell.setAttribute('id', 'cellContainerLeft')
    cell.setAttribute('value', i)
    grid.appendChild(cell)

    for (let i = 0; i < cellCount; i++) {

      const cell2 = document.createElement('div')
      cell2.innerHTML = '<img src = "Pixel Fellowship/emptyPixel.png" >'
      // create class using if statement ---> using array.length 
      cell2.className = 'currentRowItem'
      cell2.setAttribute('id', `chosenOnes_${i}`)
      cell2.setAttribute('value', i)
      cell.appendChild(cell2)
      divArray.push(cell2)
    }
  }

  for (let i = 0; i < 1; i++) {
    const cell = document.createElement('div')
    cell.className = 'cellContainer'
    cell.setAttribute('id', 'cellContainerRight')
    cell.setAttribute('value', i)
    grid.appendChild(cell)

    for (let i = 0; i < cellCount; i++) {
      const cell2 = document.createElement('div')
      cell2.innerHTML = '<img src = "Pixel Fellowship/gandalfBlankPixel.png">'
      cell2.className = 'indicator'
      cell2.setAttribute('id', `indicator_${i}`)
      cell2.setAttribute('value', i)
      cell.appendChild(cell2)
      indicatorArray.push(cell2)
    }
  }



  // for (let i = 0; i < lives; i++){
  //   const cell = document.createElement('div')
  //   cell.className = 'outerlines'
  //   cell.setAttribute('id', `outerlines_${i}`)
  //   grid.appendChild(cell)
  //   // Makes Inner Box 1 
  //   for (let i = 0; i < 1; i++) { 
  //     const cell1 = document.createElement('div')

  //     cell1.className = 'lines'
  //     cell1.setAttribute('id', `line_${i}`)
  //     cell.appendChild(cell1) 
  //     // Makes Child of Inner Box 1
  //     for (let i = 0; i < arrayLength; i++) { 
  //       const cell2 = document.createElement('div')
  //       cell2.innerHTML = `<img src = " "> frodo goes here ${i}`
  //       cell2.className = 'fellowshipChosen'
  //       cell2.setAttribute('id', `chosenOnes_${i}`)
  //       cell1.appendChild(cell2) 
  //       divArray.push(cell2)
  //     } 
  //   }
  //   //makes Inner Box 2
  //   for (let i = 0; i < 1; i++) { 
  //     const cell1 = document.createElement('div')
  //     cell1.className = 'results'
  //     cell1.setAttribute('id', `result_${i}`)
  //     cell.appendChild(cell1) 
  //     //Makes Child of Inner Box 2
  //     for (let i = 0; i < arrayLength; i++) { 
  //       const cell2 = document.createElement('div')
  //       cell2.innerHTML = `<img src = " "> gandalf goes here ${i}`
  //       cell2.className = 'indicator'
  //       cell2.setAttribute('id', `indicator_${i}`)
  //       cell1.appendChild(cell2) 
  //       indicatorArray.push(cell2)
  //     } 
  //   }
  // }

  const myInitialAudio = setTimeout(() => {
    backgroundSong.play()
  }, 2000)

  const myInterval = setInterval(() => {
    backgroundSong.play()
  }, 1000 * 60 * 3)

  //Note for self, using while loop i = line number 
  //i = lives 
  //generated grid = value = i to match and move 

  // Available Colours to the selection

  let fellowshipCashe = ['frodo', 'sam', 'merry', 'pippin', 'aragorn', 'legolas', 'gimli', 'boramir']

  //Temp Colours chosen by Computer Generator
  //array generator can be changed to 4 , 6 or 8

  let hiddenFellowship = []

  //Temp colours chosen by the Player

  let selectedFellowship = []
  let selectedResults = []

  //Cashe of Saved Array 

  let savedArray0 = []
  let savedArray1 = []
  let savedArray2 = []
  let savedArray3 = []
  let savedArray4 = []
  let savedArray5 = []
  let savedArray6 = []
  let savedArray7 = []
  let savedArray8 = []
  let savedArray9 = []

  let savedGandalf0 = []
  let savedGandalf1 = []
  let savedGandalf2 = []
  let savedGandalf3 = []
  let savedGandalf4 = []
  let savedGandalf5 = []
  let savedGandalf6 = []
  let savedGandalf7 = []
  let savedGandalf8 = []
  let savedGandalf9 = []

  //Future Function for random colour generator ------ Have to Plan and stop repeats 
  function randomFellowship() {
    return fellowshipCashe[Math.floor(Math.random() * (fellowshipCashe.length))]
  }

  // Repeating Function needs works Must Check if array is repeated or not 
  //
  // function repeatCheck() {
  //   if (randomFellowship() === hiddenFellowship.filter((item) => {
  //     console.log(item)
  //     return item === randomFellowship()
  //   }))
  //     console.log('same colour chosen')
  // }

  // AI chosen Array of 4
  function howToPlayWindow() {

  }

  function playerVs(event) {
    if (event.target.value === 'pvp') {
      //console.log('player1 select code first before switching to pvp')
      hiddenFellowship = selectedFellowship
      selectedFellowship = []
    } else console.log('you have chosen pve')
  }

  function partySize(event) {
    arrayLength = parseInt(event.target.value)
  }

  function mutechecker() {
    if (mute.checked) {
      return true
    } else return false
  }

  function checker() {
    if (repeated.checked) {
      return true
    } else return false
  }

  function fellowshipLength() {
    if (selectedFellowship.length < 4) {
      window.alert('You Must Select 4 Fellowship Characters')
    }
  }

  function masterCode() {
    if (checker() === false) {
      hiddenFellowship = []
      masterCode2()
    } else {
      hiddenFellowship = []
      masterCode1()
    }
  }

  function masterCode1() {
    for (let i = 0; i < arrayLength; i++) {
      hiddenFellowship.push(randomFellowship())
      console.log(hiddenFellowship)
    }
  }

  function masterCode2() {
    resetCashe()
    if (hiddenFellowship.length <= 4) {
      for (let i = 0; i < arrayLength; i++) {
        resetBoard()
        const randomSelectedFellowship = randomFellowship()
        hiddenFellowship.push(randomSelectedFellowship)
        fellowshipCashe.splice(fellowshipCashe.indexOf(randomSelectedFellowship), 1)
        console.log(hiddenFellowship)
        lives = 10
      }
    } else location.reload()
  }

  // function to get feedback from pressing Colour
  // adds selected colour to an Array 

  function selectedColor(event) {
    if (selectedFellowship.length < 4 ){
      imageChange()
      const multiple = selectedFellowship.includes(event.target.id)

      console.log(selectedFellowship)
      console.log(event.target.id)
      console.log(selectedFellowship.includes(selectedFellowship[event.target.id]))
      console.log(checker())

      if ( multiple === false && checker() === false ){

        if (mutechecker() === false) {

          this.querySelector('audio').play()
          selectedFellowship.push(event.target.id)
          imageChange()

        } else

          selectedFellowship.push(event.target.id)
        imageChange()

      } else window.alert('Please Select Another Character')

    } else window.alert('A maximum of 4 Characters can be selected at a time')
  }

  function imageChange() {

    if (selectedFellowship.length === 0) {
      preview0.innerHTML = '<img src="Pixel Fellowship/emptyPixel.png"></img>'
      preview1.innerHTML = '<img src="Pixel Fellowship/emptyPixel.png"></img>'
      preview1.innerHTML = '<img src="Pixel Fellowship/emptyPixel.png"></img>'
      preview2.innerHTML = '<img src="Pixel Fellowship/emptyPixel.png"></img>'
      preview3.innerHTML = '<img src="Pixel Fellowship/emptyPixel.png"></img>'
    } else if (selectedFellowship.length === 1) {
      preview0.innerHTML = `<img src="Pixel Fellowship/${selectedFellowship[0]}Pixel.png"></img>`
      preview1.innerHTML = '<img src="Pixel Fellowship/emptyPixel.png"></img>'
      preview2.innerHTML = '<img src="Pixel Fellowship/emptyPixel.png"></img>'
      preview3.innerHTML = '<img src="Pixel Fellowship/emptyPixel.png"></img>'
    } else if (selectedFellowship.length === 2) {
      preview0.innerHTML = `<img src="Pixel Fellowship/${selectedFellowship[0]}Pixel.png"></img>`
      preview1.innerHTML = `<img src="Pixel Fellowship/${selectedFellowship[1]}Pixel.png"></img>`
      preview2.innerHTML = '<img src="Pixel Fellowship/emptyPixel.png"></img>'
      preview3.innerHTML = '<img src="Pixel Fellowship/emptyPixel.png"></img>'
    } else if (selectedFellowship.length === 3) {
      preview0.innerHTML = `<img src="Pixel Fellowship/${selectedFellowship[0]}Pixel.png"></img>`
      preview1.innerHTML = `<img src="Pixel Fellowship/${selectedFellowship[1]}Pixel.png"></img>`
      preview2.innerHTML = `<img src="Pixel Fellowship/${selectedFellowship[2]}Pixel.png"></img>`
      preview3.innerHTML = '<img src="Pixel Fellowship/emptyPixel.png"></img>'
    } else if (selectedFellowship.length === 4) {
      preview0.innerHTML = `<img src="Pixel Fellowship/${selectedFellowship[0]}Pixel.png"></img>`
      preview1.innerHTML = `<img src="Pixel Fellowship/${selectedFellowship[1]}Pixel.png"></img>`
      preview2.innerHTML = `<img src="Pixel Fellowship/${selectedFellowship[2]}Pixel.png"></img>`
      preview3.innerHTML = `<img src="Pixel Fellowship/${selectedFellowship[3]}Pixel.png"></img>`
    }

  }
  function resetCashe() {
    return fellowshipCashe = ['frodo', 'sam', 'merry', 'pippin', 'aragorn', 'legolas', 'gimli', 'boramir']
  }

  function resetBoard() {
  
    hiddenReveal[0].innerHTML = '<img src="Pixel Fellowship/emptyPixel.png"></img>'
    hiddenReveal[1].innerHTML = '<img src="Pixel Fellowship/emptyPixel.png"></img>'
    hiddenReveal[2].innerHTML = '<img src="Pixel Fellowship/emptyPixel.png"></img>'
    hiddenReveal[3].innerHTML = '<img src="Pixel Fellowship/emptyPixel.png"></img>'

    for (let i = 0; i < 40; i++) {
      currentArray[i].innerHTML = '<img src="Pixel Fellowship/emptyPixel.png"></img>'
      currentResults[i].innerHTML = '<img src="Pixel Fellowship/gandalfBlankPixel.png"></img>'
    }
  }

  //Submit Function 
  //Comapres the Sent code with selected code

  // function submitBoard(){

  //   // if lives = 10 do this 

  //   currentArray[0].innerHTML = `<img src="Pixel Fellowship/${savedArray0[0]}Pixel.png"></img>`
  //   currentArray[1].innerHTML = `<img src="Pixel Fellowship/${savedArray0[1]}Pixel.png"></img>`
  //   currentArray[2].innerHTML = `<img src="Pixel Fellowship/${savedArray0[2]}Pixel.png"></img>`
  //   currentArray[3].innerHTML = `<img src="Pixel Fellowship/${savedArray0[3]}Pixel.png"></img>`

  //   // if lives = 9 do this 

  //   // get current array and apply to the grid target values 4 - 7 

  //   console.log(document.getElementsByClassName('currentRowItem')[0].innerHTML)
  // }

  function submitCheck() {
    for (let i = 0; i < selectedFellowship.length; i++) {
      const gandalf = hiddenFellowship.includes(selectedFellowship[i])

      if (selectedFellowship[i] === hiddenFellowship[i]) {
        selectedResults.push('gandalfWhite')
      } else if (gandalf === true && selectedFellowship !== hiddenFellowship[i]) {
        selectedResults.push('gandalfGrey')
      } else selectedResults.push('gandalfBlank')

      console.log(selectedResults.sort())
    }
    // selectedFellowship.forEach((item) => {
    //   if (item === hiddenFellowship[0] ||
    //   item === hiddenFellowship[1] ||
    //   item === hiddenFellowship[2] ||
    //   item === hiddenFellowship[3] ) {
    //     // Loop through check value and index 
    //     if (selectedFellowship.indexOf(item) === hiddenFellowship.indexOf(item))  {
    //       console.log(selectedFellowship.indexOf(item))
    //       console.log(hiddenFellowship.indexOf(item))
    //       console.log(`${item} is in the correct spot`)
    //       return console.log('Gandalf The White')
    //     } 

    //     //console.log(selectedFellowship.indexOf(item))
    //     //console.log(hiddenFellowship.indexOf(item))
    //     // return console.log(`${item} is present in the code`)
    //     return console.log('Gandalf The Grey')
    //   } else 
    //     // return console.log(`${item} is not present`)
    //     return console.log('Empty Indicator')
    // })
  }

  // Function to Trigger the win condition, Comaprison Function and Array Clear 

  //sort method to change gandalf colour 
  function submitReset() {

    if (selectedFellowship.length === 4) {

      if (selectedFellowship.join() === hiddenFellowship.join()) {
        reveal()
        window.alert('You\'ve made it to Mount Doom!')
      }
      submitCheck()

      if (lives === 10) {
        savedArray0 = selectedFellowship
        savedGandalf0 = selectedResults

        currentArray[36].innerHTML = `<img src="Pixel Fellowship/${savedArray0[0]}Pixel.png"></img>`
        currentArray[37].innerHTML = `<img src="Pixel Fellowship/${savedArray0[1]}Pixel.png"></img>`
        currentArray[38].innerHTML = `<img src="Pixel Fellowship/${savedArray0[2]}Pixel.png"></img>`
        currentArray[39].innerHTML = `<img src="Pixel Fellowship/${savedArray0[3]}Pixel.png"></img>`

        currentResults[36].innerHTML = `<img src="Pixel Fellowship/${savedGandalf0[0]}Pixel.png"></img>`
        currentResults[37].innerHTML = `<img src="Pixel Fellowship/${savedGandalf0[1]}Pixel.png"></img>`
        currentResults[38].innerHTML = `<img src="Pixel Fellowship/${savedGandalf0[2]}Pixel.png"></img>`
        currentResults[39].innerHTML = `<img src="Pixel Fellowship/${savedGandalf0[3]}Pixel.png"></img>`

      } else if (lives === 9) {
        savedArray1 = selectedFellowship
        savedGandalf1 = selectedResults

        currentArray[32].innerHTML = `<img src="Pixel Fellowship/${savedArray1[0]}Pixel.png"></img>`
        currentArray[33].innerHTML = `<img src="Pixel Fellowship/${savedArray1[1]}Pixel.png"></img>`
        currentArray[34].innerHTML = `<img src="Pixel Fellowship/${savedArray1[2]}Pixel.png"></img>`
        currentArray[35].innerHTML = `<img src="Pixel Fellowship/${savedArray1[3]}Pixel.png"></img>`

        currentResults[32].innerHTML = `<img src="Pixel Fellowship/${savedGandalf1[0]}Pixel.png"></img>`
        currentResults[33].innerHTML = `<img src="Pixel Fellowship/${savedGandalf1[1]}Pixel.png"></img>`
        currentResults[34].innerHTML = `<img src="Pixel Fellowship/${savedGandalf1[2]}Pixel.png"></img>`
        currentResults[35].innerHTML = `<img src="Pixel Fellowship/${savedGandalf1[3]}Pixel.png"></img>`

      } else if (lives === 8) {
        savedArray2 = selectedFellowship
        savedGandalf2 = selectedResults

        currentArray[28].innerHTML = `<img src="Pixel Fellowship/${savedArray2[0]}Pixel.png"></img>`
        currentArray[29].innerHTML = `<img src="Pixel Fellowship/${savedArray2[1]}Pixel.png"></img>`
        currentArray[30].innerHTML = `<img src="Pixel Fellowship/${savedArray2[2]}Pixel.png"></img>`
        currentArray[31].innerHTML = `<img src="Pixel Fellowship/${savedArray2[3]}Pixel.png"></img>`

        currentResults[28].innerHTML = `<img src="Pixel Fellowship/${savedGandalf2[0]}Pixel.png"></img>`
        currentResults[29].innerHTML = `<img src="Pixel Fellowship/${savedGandalf2[1]}Pixel.png"></img>`
        currentResults[30].innerHTML = `<img src="Pixel Fellowship/${savedGandalf2[2]}Pixel.png"></img>`
        currentResults[31].innerHTML = `<img src="Pixel Fellowship/${savedGandalf2[3]}Pixel.png"></img>`

      } else if (lives === 7) {
        savedArray3 = selectedFellowship
        savedGandalf3 = selectedResults

        currentArray[24].innerHTML = `<img src="Pixel Fellowship/${savedArray3[0]}Pixel.png"></img>`
        currentArray[25].innerHTML = `<img src="Pixel Fellowship/${savedArray3[1]}Pixel.png"></img>`
        currentArray[26].innerHTML = `<img src="Pixel Fellowship/${savedArray3[2]}Pixel.png"></img>`
        currentArray[27].innerHTML = `<img src="Pixel Fellowship/${savedArray3[3]}Pixel.png"></img>`

        currentResults[24].innerHTML = `<img src="Pixel Fellowship/${savedGandalf3[0]}Pixel.png"></img>`
        currentResults[25].innerHTML = `<img src="Pixel Fellowship/${savedGandalf3[1]}Pixel.png"></img>`
        currentResults[26].innerHTML = `<img src="Pixel Fellowship/${savedGandalf3[2]}Pixel.png"></img>`
        currentResults[27].innerHTML = `<img src="Pixel Fellowship/${savedGandalf3[3]}Pixel.png"></img>`

      } else if (lives === 6) {
        savedArray4 = selectedFellowship
        savedGandalf4 = selectedResults

        currentArray[20].innerHTML = `<img src="Pixel Fellowship/${savedArray4[0]}Pixel.png"></img>`
        currentArray[21].innerHTML = `<img src="Pixel Fellowship/${savedArray4[1]}Pixel.png"></img>`
        currentArray[22].innerHTML = `<img src="Pixel Fellowship/${savedArray4[2]}Pixel.png"></img>`
        currentArray[23].innerHTML = `<img src="Pixel Fellowship/${savedArray4[3]}Pixel.png"></img>`

        currentResults[20].innerHTML = `<img src="Pixel Fellowship/${savedGandalf4[0]}Pixel.png"></img>`
        currentResults[21].innerHTML = `<img src="Pixel Fellowship/${savedGandalf4[1]}Pixel.png"></img>`
        currentResults[22].innerHTML = `<img src="Pixel Fellowship/${savedGandalf4[2]}Pixel.png"></img>`
        currentResults[23].innerHTML = `<img src="Pixel Fellowship/${savedGandalf4[3]}Pixel.png"></img>`

      } else if (lives === 5) {
        savedArray5 = selectedFellowship
        savedGandalf5 = selectedResults

        currentArray[16].innerHTML = `<img src="Pixel Fellowship/${savedArray5[0]}Pixel.png"></img>`
        currentArray[17].innerHTML = `<img src="Pixel Fellowship/${savedArray5[1]}Pixel.png"></img>`
        currentArray[18].innerHTML = `<img src="Pixel Fellowship/${savedArray5[2]}Pixel.png"></img>`
        currentArray[19].innerHTML = `<img src="Pixel Fellowship/${savedArray5[3]}Pixel.png"></img>`

        currentResults[16].innerHTML = `<img src="Pixel Fellowship/${savedGandalf5[0]}Pixel.png"></img>`
        currentResults[17].innerHTML = `<img src="Pixel Fellowship/${savedGandalf5[1]}Pixel.png"></img>`
        currentResults[18].innerHTML = `<img src="Pixel Fellowship/${savedGandalf5[2]}Pixel.png"></img>`
        currentResults[19].innerHTML = `<img src="Pixel Fellowship/${savedGandalf5[3]}Pixel.png"></img>`

      } else if (lives === 4) {
        savedArray6 = selectedFellowship
        savedGandalf6 = selectedResults

        currentResults[12].innerHTML = `<img src="Pixel Fellowship/${savedGandalf6[0]}Pixel.png"></img>`
        currentResults[13].innerHTML = `<img src="Pixel Fellowship/${savedGandalf6[1]}Pixel.png"></img>`
        currentResults[14].innerHTML = `<img src="Pixel Fellowship/${savedGandalf6[2]}Pixel.png"></img>`
        currentResults[15].innerHTML = `<img src="Pixel Fellowship/${savedGandalf6[3]}Pixel.png"></img>`

        currentArray[12].innerHTML = `<img src="Pixel Fellowship/${savedArray6[0]}Pixel.png"></img>`
        currentArray[13].innerHTML = `<img src="Pixel Fellowship/${savedArray6[1]}Pixel.png"></img>`
        currentArray[14].innerHTML = `<img src="Pixel Fellowship/${savedArray6[2]}Pixel.png"></img>`
        currentArray[15].innerHTML = `<img src="Pixel Fellowship/${savedArray6[3]}Pixel.png"></img>`

      } else if (lives === 3) {
        savedArray7 = selectedFellowship
        savedGandalf7 = selectedResults

        currentArray[8].innerHTML = `<img src="Pixel Fellowship/${savedArray7[0]}Pixel.png"></img>`
        currentArray[9].innerHTML = `<img src="Pixel Fellowship/${savedArray7[1]}Pixel.png"></img>`
        currentArray[10].innerHTML = `<img src="Pixel Fellowship/${savedArray7[2]}Pixel.png"></img>`
        currentArray[11].innerHTML = `<img src="Pixel Fellowship/${savedArray7[3]}Pixel.png"></img>`

        currentResults[8].innerHTML = `<img src="Pixel Fellowship/${savedGandalf7[0]}Pixel.png"></img>`
        currentResults[9].innerHTML = `<img src="Pixel Fellowship/${savedGandalf7[1]}Pixel.png"></img>`
        currentResults[10].innerHTML = `<img src="Pixel Fellowship/${savedGandalf7[2]}Pixel.png"></img>`
        currentResults[11].innerHTML = `<img src="Pixel Fellowship/${savedGandalf7[3]}Pixel.png"></img>`

      } else if (lives === 2) {
        savedArray8 = selectedFellowship
        savedGandalf8 = selectedResults

        currentArray[4].innerHTML = `<img src="Pixel Fellowship/${savedArray8[0]}Pixel.png"></img>`
        currentArray[5].innerHTML = `<img src="Pixel Fellowship/${savedArray8[1]}Pixel.png"></img>`
        currentArray[6].innerHTML = `<img src="Pixel Fellowship/${savedArray8[2]}Pixel.png"></img>`
        currentArray[7].innerHTML = `<img src="Pixel Fellowship/${savedArray8[3]}Pixel.png"></img>`

        currentResults[4].innerHTML = `<img src="Pixel Fellowship/${savedGandalf8[0]}Pixel.png"></img>`
        currentResults[5].innerHTML = `<img src="Pixel Fellowship/${savedGandalf8[1]}Pixel.png"></img>`
        currentResults[6].innerHTML = `<img src="Pixel Fellowship/${savedGandalf8[2]}Pixel.png"></img>`
        currentResults[7].innerHTML = `<img src="Pixel Fellowship/${savedGandalf8[3]}Pixel.png"></img>`

      } else if (lives === 1) {
        savedArray9 = selectedFellowship
        savedGandalf9 = selectedResults

        currentArray[0].innerHTML = `<img src="Pixel Fellowship/${savedArray9[0]}Pixel.png"></img>`
        currentArray[1].innerHTML = `<img src="Pixel Fellowship/${savedArray9[1]}Pixel.png"></img>`
        currentArray[2].innerHTML = `<img src="Pixel Fellowship/${savedArray9[2]}Pixel.png"></img>`
        currentArray[3].innerHTML = `<img src="Pixel Fellowship/${savedArray9[3]}Pixel.png"></img>`

        currentResults[0].innerHTML = `<img src="Pixel Fellowship/${savedGandalf9[0]}Pixel.png"></img>`
        currentResults[1].innerHTML = `<img src="Pixel Fellowship/${savedGandalf9[1]}Pixel.png"></img>`
        currentResults[2].innerHTML = `<img src="Pixel Fellowship/${savedGandalf9[2]}Pixel.png"></img>`
        currentResults[3].innerHTML = `<img src="Pixel Fellowship/${savedGandalf9[3]}Pixel.png"></img>`

      } else gameOver()

      selectedFellowship = []
      selectedResults = []
      lives = lives - 1
      gameOver()
      // submitBoard()
      imageChange()

    } else window.alert('You Must Select 4 Characters before Submiting')

  }

  function reveal() {
    hiddenReveal[0].innerHTML = `<img src="Pixel Fellowship/${hiddenFellowship[0]}Pixel.png"></img>`
    hiddenReveal[1].innerHTML = `<img src="Pixel Fellowship/${hiddenFellowship[1]}Pixel.png"></img>`
    hiddenReveal[2].innerHTML = `<img src="Pixel Fellowship/${hiddenFellowship[2]}Pixel.png"></img>`
    hiddenReveal[3].innerHTML = `<img src="Pixel Fellowship/${hiddenFellowship[3]}Pixel.png"></img>`
  }

  function gameOver() {
    if (lives === 0) {
      reveal()
      window.alert('You Just Lost!')
    }
  }

  function clearLastColor() {

    imageChange()
    selectedFellowship.pop()

    imageChange()

    console.log(selectedFellowship)
  }

  function clearAllColor() {
    imageChange()
    selectedFellowship = []
    console.log(selectedFellowship)
    imageChange()
  }


  // Event Listeners

  //Coloured Buttons Cashe

  frodo.addEventListener('click', selectedColor)
  sam.addEventListener('click', selectedColor)
  merry.addEventListener('click', selectedColor)
  pippin.addEventListener('click', selectedColor)
  aragorn.addEventListener('click', selectedColor)
  legolas.addEventListener('click', selectedColor)
  gimli.addEventListener('click', selectedColor)
  boramir.addEventListener('click', selectedColor)

  newGame.addEventListener('click', masterCode)
  submit.addEventListener('click', submitReset)
  clearLast.addEventListener('click', clearLastColor)
  clearAll.addEventListener('click', clearAllColor)

  repeated.addEventListener('change', checker)
  mute.addEventListener('change', checker)
  // fellowSize.addEventListener('input', partySize)
  opposition.addEventListener('input', playerVs)
  // howToPlay.addEventListener('click', howToPlayWindow)


  const modal = document.getElementById('myModal')
  const  btn = document.getElementById('myBtn')
  const span = document.getElementsByClassName('close')[0]

  // When the user clicks the button, open the modal 
  btn.onclick = function () {
    modal.style.display = 'block'
  }
  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = 'none'
  }
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none'
    }
  }

}

window.addEventListener('DOMContentLoaded', init)



// using forEach comapare each new array to hidden array return true or false 