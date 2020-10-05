//wraping the list inside IIFE
var interstellarGiants = (function () { 
    // var giantsList = [
    //  { name:  'GQ Lupi b' ,type: 'exoplanet', distanceLY: 495, },
    //  { name:  'UY Scuti' ,type: 'star', distanceLY: 5100, },
    //  { name:  'The Tarantula Nebula' ,type: 'Nebula', distanceLY: 160, },
    //  { name:  'CMB Cold Spot' ,type: 'empty spot', distanceLY: 160, },
    //  { name:  'IC 1101' ,type: 'galaxy', distanceLY: 1045000000, },
    //  { name:  'TON 618' ,type: 'black hole', distanceLY: 10371774218, },
    //  { name:  'Fermi Bubbles' ,type: 'galactic farts', distanceLY: 26700, },
    //  { name:  'Protocluster SPT2349-56' ,type: 'single object', distanceLY:  12400000000, },
    //  { name:  'Shapley Supercluster' ,type: 'galactic collection', distanceLY:  652000000, },
    //  { name:  'Laniakea Supercluster' ,type: 'supercluster', distanceLY: 652000000,},
    //  { name:  'Huge-LQG' ,type: 'quasar collection', distanceLY:  9000000000,},
    //  { name:  'Hercules-Corona Borealis Great Wall' ,type: 'Largest thing', distanceLY: 10000000000,},
    // ];

    var giantsList = [];
    var apiUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=ee0326c2a9a0b787ee75f169ae1003ff&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';
  //FUNCTION TO EXTRACT OBJECTS FROM THE LIST


   function getAll() {
    return giantsList;
  }

   function add(item) {
      giantsList.push(item);
    }
  
   function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        var pokemon = {
          name: item.title,
          detailsUrl: item.overview,
          releaseDate: item.release_date,
          posterUrl: item.poster_path
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  } 

    // FUNCTION TO ADD  NEW LISTITEM FOR EACH SPACE OBJECT 
    function addListItem (pokemon){
      var giants = document.querySelector('.giants-list');
      var listItem = document.createElement('li'); 
      var button = document.createElement('button');
      button.innerText = pokemon.name;
      button.classList.add('list-class');
      listItem.appendChild(button);
      giants.appendChild(listItem);
      // ADDING EVENT LISTENER TO THE BUTTON
      button.addEventListener ('click', function (event){
        showDetails (pokemon);
      });
    }
    //FUNCTION TO SHOW DETAILS OF THE LIST ITEM
    function showDetails(pokemon) {
      loadDetails(pokemon).then(function () {
        console.log(pokemon);
      });
    }

   function loadDetails(item) {
    var url = apiUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      // item.imageUrl = details.poster_path;
      // item.releaseDate = details.elease_date;
      // item.overview = details.overview;
    }).catch(function (e) {
      console.error(e);
    });
  }   


    return {
      add: add,
      getAll: getAll,
      loadList: loadList,
      addListItem: addListItem,
      showDetails: showDetails,
      loadDetails: loadDetails,
    };

    
})();

//  interstellarGiants.getAll().forEach(function (giantsObjects){
//   interstellarGiants.addListItem(giantsObjects);

//  });
//  ;
 

interstellarGiants.loadList().then(function() {
  // Now the data is loaded!
  interstellarGiants.getAll().forEach(function(pokemon){
    interstellarGiants.addListItem(pokemon);
  });
});