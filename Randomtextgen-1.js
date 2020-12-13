

//Random quote generator
function rand(maxLimit = 5) {
    let lifeQuote = { 
        startquote:['The only way','Seek first to understand','Fight for what matters', 'Always strive', 'Concentrate your forces'],
        middlequote:[' for a happy life',' for the way to true wisdom',' for the road to success', ' for, aiming for high ideals', ' for this way, you will discover that life'],
        endquote:[' is true humility.',' is a rocky road that is worthwhile.',' is not a bed of roses.', ' is all that truely matters.', ' is commitment to what you love']

    }

    let inspiQuote = {
        startquote:['All our dreams can come true,', 'Lets keep failing over and over,', 'One day or day one,', 'Imagine and act,', 'We hardly are ready for a lot of things, just start'],
        middlequote:[' if we have the courage', ' if we keep at it, we are on our way', ' if we choose the right one, it launches us', ' if we so decide, we are making the choice', ' if we agree to that we would realize the amazing fact that one needs not wait a single moment'],
        endquote:[' to pursue them.', ' to become hosts to success.', ' to be in a very good place.', ' to obtain the future we all want', ' to make the world a better place.' ]

    }
 
    let life = document.getElementById("life");
    let inspi = document.getElementById("inspi");

    if (life.checked==true) {
        let numQuote = document.getElementById("num").value;
        
        for(let i = 0; i < numQuote; i++){
            let rand = Math.random() * maxLimit;
            let rand1 = Math.random() * maxLimit;
            let rand2 = Math.random() * maxLimit;

            console.log(lifeQuote.startquote[Math.floor(rand)] + lifeQuote.middlequote[Math.floor(rand1)] + lifeQuote.endquote[Math.floor(rand2)]);
        }  
       
        
    } else if(inspi.checked==true) {
        let numQuote = document.getElementById("num").value;
          
        
        for(let i = 0; i < numQuote; i++){
             let rand = Math.random() * maxLimit;
            let rand1 = Math.random() * maxLimit;
            let rand2 = Math.random() * maxLimit;

            console.log(inspiQuote.startquote[Math.floor(rand)] + inspiQuote.middlequote[Math.floor(rand1)] + inspiQuote.endquote[Math.floor(rand2)]);

         }
        
    } 

 
    

    
    
};

//

document.getElementById("prompt").onclick = function() {
    rand();
    
};



// let person = {
//     name: "Fotie",
//     age: 43
// }

// console.log(person.name)

// let personArray = ["Fotie", "Awah"];

// for(let i; i<personArray.length; i++){
//     personArray[i];
// }

// personArray.map((item, index) => {
//     console.log(item)
// })s