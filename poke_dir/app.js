$(() => {

  // const helloThere = alert('You\'re finally ready to start your Pokemon journey! Let\'s go see Professor Oak to get started!')


  $.ajax({

  url: "https://pokeapi.co/api/v2/pokemon/bulbasaur"

  }).then(
    (data) => {

    console.log(data)

  },

    () => {

      console.log('bad request')

    }
  )


  $.ajax({

    url: "https://pokeapi.co/api/v2/pokemon/charmander"

  }).then(
    (data) => {

      console.log(data)

  },

    () => {

      console.log('bad request')

    }
  )


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

  const $squirtCloseBtn = $('<div>').addClass('closeBtn')
  $squirtModalText.append($squirtCloseBtn)
  const $closeSquirtModal = $('<a>').attr('href', '#').attr('id', 'closeSquirtModal').text('CLOSE')
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

  const $chooseSquirt = $('<button>').attr('id', 'chooseSquirt').text('I Choose You!')
  $squirtModalText.append($chooseSquirt)



  const $openModalSquirt = $('#openSquirtModal')
  const $modalSquirt = $('#squirtModal')
  const $closeModalSquirt = $('#closeSquirtModal')

  const openSquirtModal = () => {
    $squirtModal.css('display', 'block')
  }

  const closeSquirtModal = () => {
    $squirtModal.css('display', 'none')
  }

  $openModalSquirt.on('click', openSquirtModal)
  $closeModalSquirt.on('click', closeSquirtModal)

})
