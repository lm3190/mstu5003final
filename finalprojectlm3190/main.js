$scope.verticalSlider1 = {
    value: 0,
    options: {
        floor: 0,
        ceil: 10,
        vertical: true
    }
};



$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});



range = new JSlider();
slider.putClientProperty("Slider.paintThumbArrowShape", Boolean.TRUE);


function playSound() {
    var playAudio = document.getElementById('audio1');
    if (playAudio.paused)
        playAudio.play();
    else
        playAudio.pause();
}

$(document).ready(function() {
    $('[data-toggle="popover"]').popover();
});
