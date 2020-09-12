//wraping the list inside IIFE
var interstellarGiants = (function () { 
    var giantsList = [
     { name:  'GQ Lupi b' ,type: 'exoplanet', distanceLY: 495, },
     { name:  'UY Scuti' ,type: 'star', distanceLY: 5100, },
     { name:  'The Tarantula Nebula' ,type: 'Nebula', distanceLY: 160, },
     { name:  'CMB Cold Spot' ,type: 'empty spot', distanceLY: 160, },
     { name:  'IC 1101' ,type: 'galaxy', distanceLY: 1045000000, },
     { name:  'TON 618' ,type: 'black hole', distanceLY: 10371774218, },
     { name:  'Fermi Bubbles' ,type: 'galactic farts', distanceLY: 26700, },
     { name:  'Protocluster SPT2349-56' ,type: 'single object', distanceLY:  12400000000, },
     { name:  'Shapley Supercluster' ,type: 'galactic collection', distanceLY:  652000000, },
     { name:  'Laniakea Supercluster' ,type: 'supercluster', distanceLY: 652000000,},
     { name:  'Huge-LQG' ,type: 'quasar collection', distanceLY:  9000000000,},
     { name:  'Hercules-Corona Borealis Great Wall' ,type: 'Largest thing', distanceLY: 10000000000,},
    ];
  //FUNCTION TO EXTRACT OBJECTS FROM THE LIST
    function add(item) {
      giantsList.push(item);
    }
  
    function getAll() {
      return giantsList;
    }
  
    return {
      add: add,
      getAll: getAll
    };

    function addListItem(interstellarGiants){
      var giants = document.querySelector('giants-list');
      var listItem = document.createElement('li'); 
      var button = document.createElement('button');
      button.innerText = interstellarGiants.name;
      button.classList.add('list-class');
      listItem.appendChild(button);
      giants.appendChild(listItem);
   }
})();
// LOOP FUNCTION 
 // function loopFunction(spaceObject){
 //    var giants = document.querySelector('giants-list');
 //    var listItem = document.createElement('li'); 
 //    var button = document.createElement('button');
 //    button.innerText = giantsList.name;
 //    button.classList.add('list-class');
 //    listItem.appendChild(button);
 //    giants.appendChild(listItem);
 // }

 // interstellarGiants.getAll().forEach(loopFunction);


 interstellarGiants.getAll().forEach(addListItem);
 