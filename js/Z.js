var table = document.getElementById( 'my-table' );
var tableBody = document.getElementById( 'my-table-body' );
var form = document.getElementById( 'my-form' );

// On submit.
form.addEventListener( 'submit', function( event ) {
    event.preventDefault();

    var name        = document.getElementById( 'name' ).value;
    var Adress      = document.getElementById( 'Adress' ).value;
    var phone       = document.getElementById( 'phone' ).value;
    var booking     = document.getElementById( 'booking' ).value;

    // Prepare new row element.
    var newRow = document.createElement( 'tr' );

    // Name cell.
    var newColName = document.createElement( 'td' );
    newColName.innerHTML = name;
    newRow.appendChild( newColName );

    // Adress cell.
    var newColAge = document.createElement( 'td' );
    newColAge.innerHTML = Adress;
    newRow.appendChild( newColAge );

    // phone class cell.
    var newColClass = document.createElement( 'td' );
    newColClass.innerHTML = phone;
    newRow.appendChild( newColClass );

    // booking cell.
    var newColCity = document.createElement( 'td' );
    newColCity.innerHTML = booking;
    newRow.appendChild( newColCity );

    // Add new row of cells to table.
    tableBody.appendChild( newRow );

    // Clear values.
    document.getElementById( 'name' ).value = '';
    document.getElementById( 'Adress' ).value = '';
    document.getElementById( 'phone' ).value = '';
    document.getElementById( 'booking' ).value = '';
} );