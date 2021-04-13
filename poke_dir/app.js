$(() => {

  // const helloThere = alert('You\'re finally ready to start your Pokemon journey! Let\'s go see Professor Oak to get started!')




  ////////////////POKEMON ABOUT////////////////////

  const $openAbout = $('#openAbout')
  const $modalAbout = $('#aboutPokemonText')
  const $closeAbout = $('#closeAbout')

  const openAbout = () => {
    $modalAbout.css('display', 'flex')
  }

  const closeAbout = () => {
    $modalAbout.css('display', 'none')
  }

  $openAbout.on('click', openAbout)
  $closeAbout.on('click', closeAbout)



  ////////////////POKEDEX/INPUT////////////////////

  const $pokeModal = $('<div>').attr('id', 'pokeModal')
  $('#pokemonForm').append($pokeModal)
  const $pokeModalText = $('<div>').attr('id', 'pokeModalText')
  $pokeModal.append($pokeModalText)

  const $pokedex = $('<div>')
  $pokeModalText.append($pokedex)
  const $pokedexText = $('<h2>').attr('id', 'pokedex').text('National Pokédex')
  $pokedex.append($pokedexText)

  const $pokeImg = $('<img>').attr('id', 'pokeImg')
  $pokeModalText.append($pokeImg)

  const $pokeInfo = $('<table>').attr('id', 'pokeInfo')
  $pokeModalText.append($pokeInfo)

  const $pokeRow1 = $('<tr>')
  $pokeInfo.append($pokeRow1)

  const $poke1 = $('<th>').text('MOVES')
  $pokeRow1.append($poke1)
  const $poke2 = $('<th>').text('NAME')
  $pokeRow1.append($poke2)
  const $poke3 = $('<th>').text('TYPE')
  $pokeRow1.append($poke3)
  const $poke4 = $('<th>').text('WEIGHT')
  $pokeRow1.append($poke4)
  const $poke5 = $('<th>').text('HEIGHT')
  $pokeRow1.append($poke5)
  const $poke6 = $('<th>').text('ID#')
  $pokeRow1.append($poke6)

  const $pokeRow2 = $('<tr>')
  $pokeInfo.append($pokeRow2)

  const $pokeMove1 = $('<td>').attr('id', 'pokeMove1')
  $pokeRow2.append($pokeMove1)
  const $pokeName = $('<td>').attr('id', 'pokeName')
  $pokeRow2.append($pokeName)
  const $pokeTypes = $('<td>').attr('id', 'pokeTypes')
  $pokeRow2.append($pokeTypes)
  const $pokeWeight = $('<td>').attr('id', 'pokeWeight')
  $pokeRow2.append($pokeWeight)
  const $pokeHeight = $('<td>').attr('id', 'pokeHeight')
  $pokeRow2.append($pokeHeight)
  const $pokeId = $('<td>').attr('id', 'pokeId')
  $pokeRow2.append($pokeId)

  const $pokeRow3 = $('<tr>')
  $pokeInfo.append($pokeRow3)

  const $pokeMove2 = $('<td>').attr('id', 'pokeMove2')
  $pokeRow3.append($pokeMove2)



  $('form').on('submit', (event) => {

    event.preventDefault()
    $('input').empty()

    const $userInput = $('input[type="text"]').val() || 6


    $.ajax({

    url: "https://pokeapi.co/api/v2/pokemon/" + $userInput

    }).then(
      (data) => {

      console.log(data)

      for (let i = 0; i < 2; i++) {
        const randomMove1 = Math.floor(Math.random() * data.moves.length)
        $('#pokeMove1').html(data.moves[randomMove1].move.name)
        const randomMove2 = Math.floor(Math.random() * data.moves.length)
        $('#pokeMove2').html(data.moves[randomMove2].move.name)
      }
      $('#pokeName').html(data.name)
      $('#pokeId').html(data.id)
      $('#pokeTypes').html(data.types[0].type.name)
      $('#pokeWeight').html(data.weight)
      $('#pokeHeight').html(data.height)
      $('#pokeImg').attr(`src`, `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${$userInput}.png`)

    },

      () => {

        console.log('bad request')

      }
    )

    $('form').trigger('reset')

  })



  ////////////////POKEMON JOURNEY////////////////////

  const $openJourney = $('#openJourney')
  const $modalJourney = $('#aboutJourneyText')
  const $closeJourney = $('#closeJourney')

  const openJourney = () => {
    $modalJourney.css('display', 'flex')
  }

  const closeJourney = () => {
    $modalJourney.css('display', 'none')
  }

  $openJourney.on('click', openJourney)
  $closeJourney.on('click', closeJourney)



  ////////////////POKEMON TOOLS////////////////////

  const $openTools = $('#openTools')
  const $modalTools = $('#aboutToolsText')
  const $closeTools = $('#closeTools')

  const openTools = () => {
    $modalTools.css('display', 'flex')
  }

  const closeTools = () => {
    $modalTools.css('display', 'none')
  }

  $openTools.on('click', openTools)
  $closeTools.on('click', closeTools)



  ////////////////Bulbasaur Modal////////////////////

  const $bulbaModal = $('<div>').attr('id', 'bulbaModal')
  $('.container').append($bulbaModal)
  const $bulbaModalText = $('<div>').attr('id', 'bulbaModalText')
  $bulbaModal.append($bulbaModalText)

  const $bulbaCloseBtn = $('<div>')
  $bulbaModalText.append($bulbaCloseBtn)
  const $closeBulbaModal = $('<button>').attr('id', 'closeBulbaModal').addClass('closeBtn').text('CLOSE')
  $bulbaCloseBtn.append($closeBulbaModal)

  const $bulbaImg = $('<img>').attr('src', 'https://i.imgur.com/igGCQRq.png').addClass('pokeImg')
  const $bulbaInfo = $('<table>').attr('id', 'bulbaInfo')
  $bulbaModalText.append($bulbaImg).append($bulbaInfo)

  const $bulbaRow1 = $('<tr>')
  $bulbaInfo.append($bulbaRow1)

  const $bulba1 = $('<th>').text('MOVES')
  const $bulba2 = $('<th>').text('NAME')
  const $bulba3 = $('<th>').text('TYPE')
  const $bulba4 = $('<th>').text('WEIGHT')
  const $bulba5 = $('<th>').text('HEIGHT')
  const $bulba6 = $('<th>').text('ID#')
  $bulbaRow1.append($bulba1).append($bulba2).append($bulba3).append($bulba4).append($bulba5).append($bulba6)

  const $bulbaRow2 = $('<tr>')
  $bulbaInfo.append($bulbaRow2)

  const $bulbaMove1 = $('<td>').attr('id', 'bulbaMove1')
  const $bulbaName = $('<td>').attr('id', 'bulbaName')
  const $bulbaTypes = $('<td>').attr('id', 'bulbaTypes')
  const $bulbaWeight = $('<td>').attr('id', 'bulbaWeight')
  const $bulbaHeight = $('<td>').attr('id', 'bulbaHeight')
  const $bulbaId = $('<td>').attr('id', 'bulbaId')
  $bulbaRow2.append($bulbaMove1).append($bulbaName).append($bulbaTypes).append($bulbaWeight).append($bulbaHeight).append($bulbaId)

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


  // $('#chooseBulba').on('click', () => {
  //
  // })



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



  ////////////////Charmander Modal////////////////////

  const $charModal = $('<div>').attr('id', 'charModal')
  $('.container').append($charModal)
  const $charModalText = $('<div>').attr('id', 'charModalText')
  $charModal.append($charModalText)

  const $charCloseBtn = $('<div>')
  $charModalText.append($charCloseBtn)
  const $closeCharModal = $('<button>').attr('id', 'closeCharModal').addClass('closeBtn').text('CLOSE')
  $charCloseBtn.append($closeCharModal)

  const $charImg = $('<img>').attr('src', 'https://i.imgur.com/DanoXt9.png').addClass('pokeImg')
  const $charInfo = $('<table>').attr('id', 'charInfo')
  $charModalText.append($charImg).append($charInfo)

  const $charRow1 = $('<tr>')
  $charInfo.append($charRow1)

  const $char1 = $('<th>').text('MOVES')
  const $char2 = $('<th>').text('NAME')
  const $char3 = $('<th>').text('TYPE')
  const $char4 = $('<th>').text('WEIGHT')
  const $char5 = $('<th>').text('HEIGHT')
  const $char6 = $('<th>').text('ID#')
  $charRow1.append($char1).append($char2).append($char3).append($char4).append($char5).append($char6)

  const $charRow2 = $('<tr>')
  $charInfo.append($charRow2)

  const $charMove1 = $('<td>').attr('id', 'charMove1')
  const $charName = $('<td>').attr('id', 'charName')
  const $charTypes = $('<td>').attr('id', 'charTypes')
  const $charWeight = $('<td>').attr('id', 'charWeight')
  const $charHeight = $('<td>').attr('id', 'charHeight')
  const $charId = $('<td>').attr('id', 'charId')
  $charRow2.append($charMove1).append($charName).append($charTypes).append($charWeight).append($charHeight).append($charId)

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


  // $('#chooseChar').on('click', () => {
  //
  // })



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



  ////////////////Squirtle Modal////////////////////

  const $squirtModal = $('<div>').attr('id', 'squirtModal')
  $('.container').append($squirtModal)
  const $squirtModalText = $('<div>').attr('id', 'squirtModalText')
  $squirtModal.append($squirtModalText)

  const $squirtCloseBtn = $('<div>')
  $squirtModalText.append($squirtCloseBtn)
  const $closeSquirtModal =
  $('<button>').attr('id','closeSquirtModal').addClass('closeBtn').text('CLOSE')
  $squirtCloseBtn.append($closeSquirtModal)

  const $squirtImg = $('<img>').attr('src', 'https://i.imgur.com/uu4vMmC.png').addClass('pokeImg')
  const $squirtInfo = $('<table>').attr('id', 'squirtInfo')
  $squirtModalText.append($squirtImg).append($squirtInfo)

  const $squirtRow1 = $('<tr>')
  $squirtInfo.append($squirtRow1)

  const $squirt1 = $('<th>').text('MOVES')
  const $squirt2 = $('<th>').text('NAME')
  const $squirt3 = $('<th>').text('TYPE')
  const $squirt4 = $('<th>').text('WEIGHT')
  const $squirt5 = $('<th>').text('HEIGHT')
  const $squirt6 = $('<th>').text('ID#')
  $squirtRow1.append($squirt1).append($squirt2).append($squirt3).append($squirt4).append($squirt5).append($squirt6)

  const $squirtRow2 = $('<tr>')
  $squirtInfo.append($squirtRow2)

  const $squirtMove1 = $('<td>').attr('id', 'squirtMove1')
  const $squirtName = $('<td>').attr('id', 'squirtName')
  const $squirtTypes = $('<td>').attr('id', 'squirtTypes')
  const $squirtWeight = $('<td>').attr('id', 'squirtWeight')
  const $squirtHeight = $('<td>').attr('id', 'squirtHeight')
  const $squirtId = $('<td>').attr('id', 'squirtId')
  $squirtRow2.append($squirtMove1).append($squirtName).append($squirtTypes).append($squirtWeight).append($squirtHeight).append($squirtId)

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


  // $('#chooseSquirt').on('click', () => {
  //
  // })



  $.ajax({

    url: "https://pokeapi.co/api/v2/pokemon/squirtle"

  }).then(
    (data) => {

      console.log(data)

      for (let i = 0; i < 2; i++) {
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



////////////////Goodluck Modal////////////////////

  const $luckModal = $('<div>').attr('id', 'luckModal')
  $('body').append($luckModal)

  const $luckModalText = $('<div>').attr('id', 'luckModalText')
  $luckModal.append($luckModalText)

  const $luckCloseBtn = $('<div>')
  $luckModalText.append($luckCloseBtn)
  const $closeLuckModal = $('<button>').attr('id', 'closeLuckModal').addClass('closeBtn').text('ON SECOND THOUGHT...')
  $luckCloseBtn.append($closeLuckModal)

  const $luckMain = $('<div>').attr('id', 'luckMain')
  const $luckText = $('<p>').text('Excellent choice! I can see you and your Pokémon are going to do great things together! Enter the tall grass to begin your journey!')
  const $oakImg = $('<img>').attr('src', 'https://i.imgur.com/wyX51xK.png').attr('id', 'oakPic2')
  $luckModalText.append($luckMain)
  $luckMain.append($luckText).append($oakImg)


  const $luckImg = $('<img>').attr('src', 'https://i.imgur.com/uMnKjfx.jpg').attr('id', 'luckImg')
  $luckModalText.append($luckImg)

  const $luckGo = $('<div>').attr('id', 'luckGo')
  $luckModalText.append($luckGo)
  const $luckLink = $('<a>').attr('target', '_blank').attr
  ('href', 'https://www.youtube.com/watch?v=6xKWiCMKKJg?autoplay=1').attr
  ('id', 'luckLink').addClass('goBtn').text('*ENTER THE TALL GRASS*')
  $luckGo.append($luckLink)


  const $openLuckBulba = $('#chooseBulba')
  const $openLuckChar = $('#chooseChar')
  const $openLuckSquirt = $('#chooseSquirt')
  const $modalLuck = $('#luckModal')
  const $closeModalLuck = $('#closeLuckModal')

  const openLuckModal = () => {
    $modalLuck.css('display', 'flex')
  }

  const closeLuckModal = () => {
    $modalLuck.css('display', 'none')
  }

  $openLuckBulba.on('click', openLuckModal)
  $openLuckChar.on('click', openLuckModal)
  $openLuckSquirt.on('click', openLuckModal)
  $closeModalLuck.on('click', closeLuckModal)

})
