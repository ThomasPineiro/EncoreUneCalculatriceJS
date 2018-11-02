var activeNumber = 0;
var storedNumber;
var addedNumber;

$(".number").click(function() {
    activeNumber = activeNumber + $(this).attr("id");
    $("#inputScreen").val(activeNumber);
});

$(".operator").click(function(){
    operateur = $(this).attr("id");
    switch (operateur) {
        case '+' :
        operateur = '+';
        storedNumber = $("#inputScreen").val();
        $("#inputScreen").val('');
        activeNumber = 0;
        break;
    
        case '-' :
        operateur = '-';
        storedNumber = $("#inputScreen").val();
        $("#inputScreen").val('');
        activeNumber = 0;
        break;
    
        case '*' :
        operateur = '*';
        storedNumber = $("#inputScreen").val();
        $("#inputScreen").val('');
        activeNumber = 0;
        break;

        case '/' :
        operateur = '/';
        storedNumber = $("#inputScreen").val();
        $("#inputScreen").val('');
        activeNumber = 0;
        break;
    };
});

var calcul = {
    '+': function(a, b) { 
        c = parseInt(a) + parseInt(b);
        return c; 
    },
    '-': function(a, b) { return a - b },
    '*': function(a, b) { return a * b },
    '/': function(a, b) { return a / b},
        //A retravailler
        // if (b == 0) {
        //     $("#inputScreen").innerHtml('impossible !');
        // } else {
        //     return a / b 
        // }
    };
// };

$(".equal").click(function(){    
    $("#inputScreen").val(calcul[operateur](storedNumber, activeNumber));
});

$("#c").click(function(){
    $("#inputScreen").val('');
    operateur = '';
    storedNumber, activeNumber = 0;
});

//faire les calculs direct dans le switch !
//Ajouter conditions sur divisions