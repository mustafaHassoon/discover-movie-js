//wraping the list inside IIFE
var interstellarGiants = (function () { 
  
    var giantsList = [];
    var apiUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=ee0326c2a9a0b787ee75f169ae1003ff&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';
  
    //FUNCTION TO EXTRACT OBJECTS FROM THE LIST

   function getAll() {
    return giantsList;
  }

   function add(pokemon) {
      giantsList.push(pokemon);
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
        console.log(pokemon);
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
    function showDetails(item) {
      interstellarGiants.loadDetails(item).then(function () {
        console.log(item);
        showModal(item);
      });
    }

    function loadDetails2(item) {
    
        item.imageUrl = details.poster_path;
        item.releaseDate = details.elease_date;
        item.overview = details.overview;
     
    }   
   function loadDetails(item) {
    var url = apiUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.poster_path;
      item.releaseDate = details.elease_date;
      item.overview = details.overview;
    }).catch(function (e) {
      console.error(e);
    });
  }   

 // Show modal function
 
 var modalContainer = document.querySelector('#modal-container');
 function showModal(item) {
   // Clear existing modal content
   modalContainer.innerHTML = '';
   // Creating div element in DOM
   var modal = document.createElement('div');
   // adding class to div DOM element
   modal.classList.add('modal');
   // create closing button in modal content
   var closeButtonElement = document.createElement('button');
   closeButtonElement.classList.add('modal-close');
   closeButtonElement.innerText = 'Close';
   // Add event listener to close modal when botton is clicked
   closeButtonElement.addEventListener('click', hideModal);
   // Create element for title in modal content
   var titleElement = document.createElement('h1');
   titleElement.innerText = item.title;
   // Create element for release date in modal content
   var releaseDate = document.createElement('p');
   releaseDate.innerText = 'Release date : ' + item.release_date;
  // Create element for overview in modal content
   var overview = document.createElement('p');
   overview.innerText = 'Overview : ' + item.overview;

   // Create img in modal content
   var imageElement = document.createElement('img');
   imageElement.classList.add('modal-img');
   imageElement.setAttribute('src', item.poster_path);

   modal.appendChild(closeButtonElement);
   modal.appendChild(titleElement);
   modal.appendChild(releaseDate);
   modal.appendChild(overview);
   modal.appendChild(imageElement);
   modalContainer.appendChild(modal);


   modalContainer.classList.add('is-visible');
 }

 function hideModal() {
   modalContainer.classList.remove('is-visible');
 }

 window.addEventListener('keydown', (e) => {
   if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
     hideModal();  
   }
 });
 modalContainer.addEventListener('click', (e) => {
   // Since this is also triggered when clicking INSIDE the modal
   // We only want to close if the user clicks directly on the overlay
   var target = e.target;
   if (target === modalContainer) {
     hideModal();
   }
 });

 document.querySelector('#show-modal').addEventListener('click', () => {
   showModal('Modal title', 'This is the modal content!');
 });
    return {
      add: add,
      getAll: getAll,
      loadList: loadList,
      addListItem: addListItem,
      showDetails: showDetails,
      loadDetails: loadDetails,
      showModal: showModal,
      hideModal: hideModal,
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