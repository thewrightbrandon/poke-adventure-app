$(() => {

  // const helloThere = alert('You\'re finally ready to start your Pokemon journey! Let\'s go see Professor Oak to get started!')




  ////////////////About Modal////////////////////

  const $openModalAbout = $('#openAboutModal')
  const $modalAbout = $('#aboutPokemonText')
  const $closeModalAbout = $('#closeAboutModal')

  const openAboutModal = () => {
    $modalAbout.css('display', 'flex')
  }

  const closeAboutModal = () => {
    $modalAbout.css('display', 'none')
  }

  $openModalAbout.on('click', openAboutModal)
  $closeModalAbout.on('click', closeAboutModal)



  ////////////////Journey Modal////////////////////

  const $openModalJourney = $('#openJourneyModal')
  const $modalJourney = $('#aboutJourneyText')
  const $closeModalJourney = $('#closeJourneyModal')

  const openJourneyModal = () => {
    $modalJourney.css('display', 'flex')
  }

  const closeJourneyModal = () => {
    $modalJourney.css('display', 'none')
  }

  $openModalJourney.on('click', openJourneyModal)
  $closeModalJourney.on('click', closeJourneyModal)



  ////////////////Tools Modal////////////////////

  const $openModalTools = $('#openToolsModal')
  const $modalTools = $('#aboutToolsText')
  const $closeModalTools = $('#closeToolsModal')

  const openToolsModal = () => {
    $modalTools.css('display', 'flex')
  }

  const closeToolsModal = () => {
    $modalTools.css('display', 'none')
  }

  $openModalTools.on('click', openToolsModal)
  $closeModalTools.on('click', closeToolsModal)



  ////////////////Bulbasaur Modal////////////////////

  $.ajax({

  url: "https://pokeapi.co/api/v2/pokemon/bulbasaur"

  }).then(
    (data) => {

    console.log(data)

    for (let i = 0; i < 2; i++) {
      const randomMove1 = Math.floor(Math.random() * data.moves.length)
      $('#bulbaMove1').html(data.moves[randomMove1].move.name)
      const randomMove2 = Math.floor(Math.random() * data.moves.length)
      $('#bulbaMove2').html(data.moves[randomMove2].move.name)
    }
    $('#bulbaName').html(data.name)
    $('#bulbaId').html(data.id)
    $('#bulbaTypes').html(data.types[0].type.name)
    $('#bulbaWeight').html(data.weight)
    $('#bulbaHeight').html(data.height)

  },

    () => {

      console.log('bad request')

    }
  )


  const $bulbaModal = $('<div>').attr('id', 'bulbaModal')
  $('.container').append($bulbaModal)
  const $bulbaModalText = $('<div>').attr('id', 'bulbaModalText')
  $bulbaModal.append($bulbaModalText)

  const $bulbaCloseBtn = $('<div>')
  $bulbaModalText.append($bulbaCloseBtn)
  const $closeBulbaModal = $('<button>').attr('id', 'closeBulbaModal').addClass('closeBtn').text('CLOSE')
  $bulbaCloseBtn.append($closeBulbaModal)

  const $bulbaImg = $('<img>').attr('src', 'https://i.imgur.com/igGCQRq.png').addClass('pokeImg')
  $bulbaModalText.append($bulbaImg)

  const $bulbaInfo = $('<table>').attr('id', 'bulbaInfo')
  $bulbaModalText.append($bulbaInfo)

  const $bulbaRow1 = $('<tr>')
  $bulbaInfo.append($bulbaRow1)

  const $bulba1 = $('<th>').text('MOVES')
  $bulbaRow1.append($bulba1)
  const $bulba2 = $('<th>').text('NAME')
  $bulbaRow1.append($bulba2)
  const $bulba3 = $('<th>').text('TYPE')
  $bulbaRow1.append($bulba3)
  const $bulba4 = $('<th>').text('WEIGHT')
  $bulbaRow1.append($bulba4)
  const $bulba5 = $('<th>').text('HEIGHT')
  $bulbaRow1.append($bulba5)
  const $bulba6 = $('<th>').text('ID')
  $bulbaRow1.append($bulba6)

  const $bulbaRow2 = $('<tr>')
  $bulbaInfo.append($bulbaRow2)

  const $bulbaMove1 = $('<td>').attr('id', 'bulbaMove1')
  $bulbaRow2.append($bulbaMove1)
  const $bulbaName = $('<td>').attr('id', 'bulbaName')
  $bulbaRow2.append($bulbaName)
  const $bulbaTypes = $('<td>').attr('id', 'bulbaTypes')
  $bulbaRow2.append($bulbaTypes)
  const $bulbaWeight = $('<td>').attr('id', 'bulbaWeight')
  $bulbaRow2.append($bulbaWeight)
  const $bulbaHeight = $('<td>').attr('id', 'bulbaHeight')
  $bulbaRow2.append($bulbaHeight)
  const $bulbaId = $('<td>').attr('id', 'bulbaId')
  $bulbaRow2.append($bulbaId)

  const $bulbaRow3 = $('<tr>')
  $bulbaInfo.append($bulbaRow3)

  const $bulbaMove2 = $('<td>').attr('id', 'bulbaMove2')
  $bulbaRow3.append($bulbaMove2)

  const $chooseBulba = $('<button>').attr('id', 'chooseBulba').text('I CHOOSE YOU!')
  $bulbaModalText.append($chooseBulba)



  const $openModalBulba = $('#openBulbaModal')
  const $modalBulba = $('#bulbaModal')
  const $closeModalBulba = $('#closeBulbaModal')

  const openBulbaModal = () => {
    $modalBulba.css('display', 'block')
  }

  const closeBulbaModal = () => {
    $modalBulba.css('display', 'none')
  }

  $openModalBulba.on('click', openBulbaModal)
  $closeModalBulba.on('click', closeBulbaModal)



  ////////////////Charmander Modal////////////////////

  $.ajax({

    url: "https://pokeapi.co/api/v2/pokemon/charmander"

  }).then(
    (data) => {

      console.log(data)

      for (let i = 0; i < 2; i++) {
        const randomMove1 = Math.floor(Math.random() * data.moves.length)
        $('#charMove1').html(data.moves[randomMove1].move.name)
        const randomMove2 = Math.floor(Math.random() * data.moves.length)
        $('#charMove2').html(data.moves[randomMove2].move.name)
      }
      $('#charName').html(data.name)
      $('#charId').html(data.id)
      $('#charTypes').html(data.types[0].type.name)
      $('#charWeight').html(data.weight)
      $('#charHeight').html(data.height)

  },

    () => {

      console.log('bad request')

    }
  )


  const $charModal = $('<div>').attr('id', 'charModal')
  $('.container').append($charModal)
  const $charModalText = $('<div>').attr('id', 'charModalText')
  $charModal.append($charModalText)

  const $charCloseBtn = $('<div>')
  $charModalText.append($charCloseBtn)
  const $closeCharModal = $('<button>').attr('id', 'closeCharModal').addClass('closeBtn').text('CLOSE')
  $charCloseBtn.append($closeCharModal)

  const $charImg = $('<img>').attr('src', 'https://i.imgur.com/DanoXt9.png').addClass('pokeImg')
  $charModalText.append($charImg)

  const $charInfo = $('<table>').attr('id', 'charInfo')
  $charModalText.append($charInfo)

  const $charRow1 = $('<tr>')
  $charInfo.append($charRow1)

  const $char1 = $('<th>').text('MOVES')
  $charRow1.append($char1)
  const $char2 = $('<th>').text('NAME')
  $charRow1.append($char2)
  const $char3 = $('<th>').text('TYPE')
  $charRow1.append($char3)
  const $char4 = $('<th>').text('WEIGHT')
  $charRow1.append($char4)
  const $char5 = $('<th>').text('HEIGHT')
  $charRow1.append($char5)
  const $char6 = $('<th>').text('ID')
  $charRow1.append($char6)

  const $charRow2 = $('<tr>')
  $charInfo.append($charRow2)

  const $charMove1 = $('<td>').attr('id', 'charMove1')
  $charRow2.append($charMove1)
  const $charName = $('<td>').attr('id', 'charName')
  $charRow2.append($charName)
  const $charTypes = $('<td>').attr('id', 'charTypes')
  $charRow2.append($charTypes)
  const $charWeight = $('<td>').attr('id', 'charWeight')
  $charRow2.append($charWeight)
  const $charHeight = $('<td>').attr('id', 'charHeight')
  $charRow2.append($charHeight)
  const $charId = $('<td>').attr('id', 'charId')
  $charRow2.append($charId)

  const $charRow3 = $('<tr>')
  $charInfo.append($charRow3)

  const $charMove2 = $('<td>').attr('id', 'charMove2')
  $charRow3.append($charMove2)

  const $chooseChar = $('<button>').attr('id', 'chooseChar').text('I CHOOSE YOU!')
  $charModalText.append($chooseChar)



  const $openModalChar = $('#openCharModal')
  const $modalChar = $('#charModal')
  const $closeModalChar = $('#closeCharModal')

  const openCharModal = () => {
    $modalChar.css('display', 'block')
  }

  const closeCharModal = () => {
    $modalChar.css('display', 'none')
  }

  $openModalChar.on('click', openCharModal)
  $closeModalChar.on('click', closeCharModal)



  ////////////////Squirtle Modal////////////////////

  $.ajax({

    url: "https://pokeapi.co/api/v2/pokemon/squirtle"

  }).then(
    (data) => {

      console.log(data)

      for (let i = 0; i < 2; i++) {
    // console.log(data.moves[i].move.name);
        const randomMove1 = Math.floor(Math.random() * data.moves.length)
        $('#squirtMove1').html(data.moves[randomMove1].move.name)
        const randomMove2 = Math.floor(Math.random() * data.moves.length)
        $('#squirtMove2').html(data.moves[randomMove2].move.name)
      }
      $('#squirtName').html(data.name)
      $('#squirtId').html(data.id)
      $('#squirtTypes').html(data.types[0].type.name)
      $('#squirtWeight').html(data.weight)
      $('#squirtHeight').html(data.height)

    },

      () => {

        console.log('bad request')

    }
  )


  const $squirtModal = $('<div>').attr('id', 'squirtModal')
  $('.container').append($squirtModal)
  const $squirtModalText = $('<div>').attr('id', 'squirtModalText')
  $squirtModal.append($squirtModalText)

  const $squirtCloseBtn = $('<div>')
  $squirtModalText.append($squirtCloseBtn)
  const $closeSquirtModal = $('<button>').attr('id', 'closeSquirtModal').addClass('closeBtn').text('CLOSE')
  $squirtCloseBtn.append($closeSquirtModal)

  const $squirtImg = $('<img>').attr('src', 'https://i.imgur.com/uu4vMmC.png').addClass('pokeImg')
  $squirtModalText.append($squirtImg)

  const $squirtInfo = $('<table>').attr('id', 'squirtInfo')
  $squirtModalText.append($squirtInfo)

  const $squirtRow1 = $('<tr>')
  $squirtInfo.append($squirtRow1)

  const $squirt1 = $('<th>').text('MOVES')
  $squirtRow1.append($squirt1)
  const $squirt2 = $('<th>').text('NAME')
  $squirtRow1.append($squirt2)
  const $squirt3 = $('<th>').text('TYPE')
  $squirtRow1.append($squirt3)
  const $squirt4 = $('<th>').text('WEIGHT')
  $squirtRow1.append($squirt4)
  const $squirt5 = $('<th>').text('HEIGHT')
  $squirtRow1.append($squirt5)
  const $squirt6 = $('<th>').text('ID')
  $squirtRow1.append($squirt6)

  const $squirtRow2 = $('<tr>')
  $squirtInfo.append($squirtRow2)

  const $squirtMove1 = $('<td>').attr('id', 'squirtMove1')
  $squirtRow2.append($squirtMove1)
  const $squirtName = $('<td>').attr('id', 'squirtName')
  $squirtRow2.append($squirtName)
  const $squirtTypes = $('<td>').attr('id', 'squirtTypes')
  $squirtRow2.append($squirtTypes)
  const $squirtWeight = $('<td>').attr('id', 'squirtWeight')
  $squirtRow2.append($squirtWeight)
  const $squirtHeight = $('<td>').attr('id', 'squirtHeight')
  $squirtRow2.append($squirtHeight)
  const $squirtId = $('<td>').attr('id', 'squirtId')
  $squirtRow2.append($squirtId)

  const $squirtRow3 = $('<tr>')
  $squirtInfo.append($squirtRow3)

  const $squirtMove2 = $('<td>').attr('id', 'squirtMove2')
  $squirtRow3.append($squirtMove2)

  const $chooseSquirt = $('<button>').attr('id', 'chooseSquirt').text('I CHOOSE YOU!')
  $squirtModalText.append($chooseSquirt)



  const $openModalSquirt = $('#openSquirtModal')
  const $modalSquirt = $('#squirtModal')
  const $closeModalSquirt = $('#closeSquirtModal')

  const openSquirtModal = () => {
    $modalSquirt.css('display', 'block')
  }

  const closeSquirtModal = () => {
    $modalSquirt.css('display', 'none')
  }

  $openModalSquirt.on('click', openSquirtModal)
  $closeModalSquirt.on('click', closeSquirtModal)

})
