
$(() => {
  console.log($)
  console.log('is this thing on!?')



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

  },

  () => {

      console.log('bad request')

  }
)

})
