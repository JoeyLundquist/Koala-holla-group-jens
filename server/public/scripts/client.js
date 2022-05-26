console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  // Establish Click Listeners
  setupClickListeners()
  // load existing koalas on page load
  getKoalas();

}); // end doc ready

function setupClickListeners() {
  $( '#addButton' ).on( 'click', function(){
    console.log( 'in addButton on click' );
    // get user input and put in an object
    // NOT WORKING YET :(
    // using a test object
    let koalaToSend = {
      name: $('#nameIn').val(),
      age: $('#ageIn').val(),
      gender: $('#genderIn').val(),
      readyForTransfer: true,
      notes: $('#notesIn').val()
    };
    // call saveKoala with the new obejct
    saveKoala( koalaToSend );
  }); 


  $(document).on('click', '.update-koala-btn', updateKoalaTransferStatus)

  $(document).on('click', '.deleteButton', deleteKoala);

}

function getKoalas(){
  console.log( 'in getKoalas' );
  // ajax call to server to get koalas
  
} // end getKoalas

function saveKoala( newKoala ){
  console.log( 'in saveKoala', newKoala );
  $.ajax({
    type: 'POST',
    url: '/koalas',
    data: newKoala,
  }).then(()=>{
    console.log('POST works');
    getKoalas();

  }).catch((err) => {
    alert('Failed to add koalas');
    console.log('POST failed:', err);
  });

  }

 

function updateKoalaTransferStatus() {
  console.log('In Koalas PUT')
  const koalaId = $(this).parents('tr').data('koala-id')
  console.log('Koala Id is', koalaId)

  let readyForTransfer  = $(this).parents('td').data('ready-to-transfer');
  console.log('ready to transfer?', readyForTransfer)

  let changeTransferStatus = {
    transferStatus: readyForTransfer
  }

  
  $.ajax({
    url:'/koala/' + koalaId,
    method: 'PUT',
    data: changeTransferStatus
  })
  .then(() => {
    console.log('PUT success');
    getKoalas();
  })
  .catch((err) => {
    console.log('There as an error in PUT', err)
  })

}

function deleteKoala() {
  const koalaId = $(this).parents('tr').data('koala-id');

  console.log('in deleteKoala()', koalaId);

  $.ajax({
      method: 'DELETE',
      url: `/koalas/${koalaId}`,       
  })
      .then(() => {
          getKoalas()
          console.log('DELETE /koala success');
      })
      .catch((err) => {
          alert('Failed to delete.');
          console.log('DELETE /koala failed:', err);
      });
}

// Code to append in juan's project

/* <tr data-koala-id="${koala.id}" >

<td>
          <button class="deleteButton">❌</button>
      </td> */


