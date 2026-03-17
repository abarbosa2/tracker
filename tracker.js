documen .addEventListener ('click', function(event){
    console.log(event.target);
    if(event.target.classList.contains('btn')){
        //console.log('Click button');
        //remonter dans article.card
        let carte = event.target.closest('.card');
        //descendre dans strong.value
        //transformer la valeur
        //sauver la transformation
    }
});


//console.log(..); = afficher 