$(function(){
    var space_id = document.getElementById('space');


    for(var i = 0; i < 9; i++){
        space_id.innerHTML += '<div>' +stars_randomizer(60, 100) + '</div>';
    }

    var galaxy = {
        stars_amount: [],
        stars_brightness: stars_amount[i],
    };

    function Galaxy() {
        this.stars_amount = randomAmount;

        function stars_randomizer(minstars, maxstars) {
            var offset = minstars;
            var range = (maxstars - minstars) + 1;

            for(var j = 0; j <= Math.random() * 100; j++) {
                var randomAmount =[];

                for(var i = 0; i < Math.random() * 100; i++) {
                    var randomNumber = Math.floor( Math.random() * range) + offset;
                    randomAmount.push(Math.floor( Math.random() * randomNumber));

                }
            }
            return randomAmount;
        }

    }

});