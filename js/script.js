/*
basic assignment:
*/

var myVariable ="38.9587";
console.log(myVariable+5);

myVariable = parseFloat(myVariable);
console.log(myVariable);

myVariable = parseInt(myVariable);
console.log(myVariable);

myVariable= Number(myVariable);
console.log(myVariable);

myVariable=myVariable+5;
console.log(myVariable);

myVariable = myVariable.toString();
console.log (myVariable);

var myArrayOfType =[
    true,
    false,
    null,
    "hello , world!",
    undefined,
    NaN,
    [ 1,2,3,4,5]

];

var myArrayOfDataTypes = [
    // Booleans:
    true,
    false,
    // Null:
    null,
    // Number (float/integer):
    34,
    168.793,
    // String:
    'Hello, World!',
    // Value not defined:
    undefined,
    // Not a number:
    NaN,
    // An array in an array!?
    [1, 2, 3, 4, 5]
];

/**
 * Creating elements for a webpage. (Adding to the DOM!)
 */

 // Create datalist.
var myDataList = document.createElement( 'DL' ); // Won't show yet! We didn't tell it where to go.

// Let's loop through the array so we don't have to type out each item!
for ( var i = 0; i < myArrayOfDataTypes.length; i++ )
{ // ( ASSIGNMENT; TERMINATION CONDITION; ITERATION )
    // Create datalist title.
    var dataListTitle = document.createElement( 'DT' );
    dataListTitle.textContent = typeof myArrayOfDataTypes[i]; // Output the datatype.

    // Create datalist data.
    var dataListData = document.createElement( 'DD' );
    dataListData.textContent = myArrayOfDataTypes[i];

    // Add our new elements to our datalist.
    myDataList.appendChild( dataListTitle );
    myDataList.appendChild( dataListData );
}

var myHeadingText =`our Dtat-type Test`
document.body.innerHTML += `
<h2>
`+myHeadingText+`
</h2>
`


// Add ALL of that to the body! Yay! We should be able to see it now!
document.body.appendChild( myDataList );

var myHeading = document.getElementById ('my-heading');

myHeading.title =
 `this a Heading`;

 myHeading.className =`gray-text`;
 


myHeading.addEventListener('mouseover',function(event){

    this.className=`salmon-text`;

});


myHeading.addEventListener('mouseleave',function(event){

    this.className=`indigo-text`;

});


myHeading.addEventListener('click',function(event){
 
    if (!this.className.includes( bigClass))
   { 
       this.className +=` big-text`;
    }

});

function AddTwoNumber ( x , y){
    x = Number ( x );
    y = Number ( y );
    return ( x + y );


}

function currentDayString (){

var date = new Date();

var dateString='';

dateString += date.getFullYear();
dateString += '.';
dateString += date.getMonth();
dateString += '.';
dateString += date.getDay();
dateString += '.';
return dateString;

}


console.log( 'the curren date is :\r\n'+currentDayString());














