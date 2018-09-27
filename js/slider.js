
///////////////////////////////////////////       КНОПКИ        //////////////////////////////////////////////////////////////////////////////

$( function() {
    $("#office").bind('click', function(){
      $('.flat-container').css('display','none');
      $('.office-container').css('display','block');
      $( "#total" ).val(500);
      $( "#office-slider" ).slider({
        value: 1
       });
      $( "#flat-slider" ).slider({
        value: 1
       });
       $( "#office-amount" ).val('50');
      });
    });
    $( function() {
        $("#flat").bind('click', function(){
          $('.office-container').css('display','none');
          $('.flat-container').css('display','block');
          $( "#total" ).val(500);
          $( "#office-slider" ).slider({
            value: 1
           });
           $( "#flat-slider" ).slider({
            value: 1
           });
           $( "#flat-amount" ).val('1');
          });
        });
    
/////////////////////////////////////////////////////          СЛАЙДЕРЫ         ///////////////////////////////////////////////////////////

$( function() {
  $( "#flat-slider" ).slider({
    range: "max",
    min: 1,
    max: 5,
    value: 1,
    slide: function( event, ui ) {
      $( "#flat-amount" ).val( ui.value );
      var total = ui.value * 500
      $( "#total" ).val(total);
    }
  });
  $( "#flat-amount" ).val( $( "#flat-slider" ).slider( "value" ) );
  $( "#total" ).val(500);
} );


$( function() {
    $( "#office-slider" ).slider({
      range: "max",
      min: 50,
      max: 100,
      value: 1,
      step: 10,
      slide: function( event, ui ) {
        $( "#office-amount" ).val( ui.value );
        var total = ui.value * 10
        $( "#total" ).val(total);
      }
    });
    $( "#office-amount" ).val( $( "#office-slider" ).slider( "value" ) );
    $( "#total" ).val(500);
  } );

 


//////////////////////////////////////////////////          ИКОНКИ                  ////////////////////////////////////////////////////////////////






$(document).ready(function() {
  var totalStr =  $( "#total" ).val();
  var total = parseInt(totalStr);

  $('#myCheckbox1').change(function() {
    if(this.checked) {
    $( "#total" ).val(total += 50);
    }
    else
    $( "#total" ).val(total -= 50);
  });
  $('#myCheckbox2').change(function() {
    if(this.checked) {
    $( "#total" ).val(total += 70);
    }
    else
    $( "#total" ).val(total -= 70);
  });
  $('#myCheckbox3').change(function() {
    if(this.checked) {
    $( "#total" ).val(total += 100);
    }
    else
    $( "#total" ).val(total -= 100);
  });
  $('#myCheckbox4').change(function() {
    if(this.checked) {
    $( "#total" ).val(total += 30);
    }
    else
    $( "#total" ).val(total -= 30);
  });
  $('#myCheckbox5').change(function() {
    if(this.checked) {
    $( "#total" ).val(total += 200);
    }
    else
    $( "#total" ).val(total -= 200);
  });
});


 
  
 
