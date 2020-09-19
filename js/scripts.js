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
    var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  //FUNCTION TO EXTRACT OBJECTS FROM THE LIST


   function getAll() {
    return giantsList;
  }
   function add(item) {
      giantsList.push(item);
    }
  
   function loadDetails(item) {
    var url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  } 

  
    // FUNCTION TO ADD  NEW LISTITEM FOR EACH SPACE OBJECT 
    function addListItem (giantsObjects){
      var giants = document.querySelector('.giants-list');
      var listItem = document.createElement('li'); 
      var button = document.createElement('button');
      button.innerText = giantsObjects.name;
      button.classList.add('list-class');
      listItem.appendChild(button);
      giants.appendChild(listItem);
      // ADDING EVENT LISTENER TO THE BUTTON
      button.addEventListener ('click', function (event){
        showDetails (giantsObjects);
      });
    }
    //FUNCTION TO SHOW DETAILS OF THE LIST ITEM
    function showDetails(giantsObjects) {
      console.log (giantsObjects)
    }
    return {
      add: add,
      getAll: getAll,
      addListItem: addListItem,
    };

    
})();

 interstellarGiants.getAll().forEach(function (giantsObjects){
  interstellarGiants.addListItem(giantsObjects);

 });
 ;
 