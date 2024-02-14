let balloons = document.querySelectorAll('#balloon');

balloons.forEach(function (balloon) {
  balloon.addEventListener('mouseover', function () {
    this.classList.add('invisible');
  });
});