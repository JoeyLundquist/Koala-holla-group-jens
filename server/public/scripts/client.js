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
      name: 'testName',
      age: 'testName',
      gender: 'testName',
      readyForTransfer: 'testName',
      notes: 'testName',
    };
    // call saveKoala with the new obejct
    saveKoala( koalaToSend );
  }); 

  $(document).on('click', '.update-koala-btn', updateKoalaTransferStatus)
}

function getKoalas(){
  console.log( 'in getKoalas' );
  // ajax call to server to get koalas
  
} // end getKoalas

function saveKoala( newKoala ){
  console.log( 'in saveKoala', newKoala );
  // ajax call to server to get koalas
 
}

function updateKoalaTransferStatus() {
  console.log('In Koalas PUT')
  const koalaId = $(this).parents('tr').data('koala-id')
  console.log('Koala Id is', koalaId)

  let readyToTransfer  = $(this).parents('td').data('ready-to-transfer');
  console.log('ready to transfer?', readyToTransfer)

  let changeTransferStatus = {
    transferStatus: readyToTransfer
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

