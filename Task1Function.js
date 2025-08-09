document.querySelectorAll('.card-img-wrapper').forEach(function(element) {
    element.addEventListener('click', function() {
        var id = this.closest('[id]').id;


              var modal = document.getElementById('myModal');
                var carouselItem = modal.querySelector('.carousel-inner');
                // Find .carousel-indicators inside the modal
                var indicators = modal.querySelector('.carousel-indicators');
                // Find the indicator matching the given slide id
                var targetIndicator = indicators.querySelector(`[data-bs-slide-to="${id}"]`);
                var targetItem = carouselItem.querySelector(`[id = "${id}"]`);

                if (targetIndicator && targetItem) {
                  // Remove the "active" class from all indicators inside this container
                  carouselItem.querySelectorAll('.active').forEach(function(el){
                    el.classList.remove("active");
                });
                  // Remove the "active" class from all indicators inside this container
                  indicators.querySelectorAll('.active').forEach(function(el) {
                    el.classList.remove("active");
                  });

                  // Add the "active" class to the target indicator
                  targetIndicator.classList.add("active");
                  targetItem.classList.add("active");
                }


                

                   
            })
  })




document.querySelectorAll('.card-title').forEach(function(element) {
  element.addEventListener('click', function() {

    const colors = ['white', 'green', 'black'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
   
    var bgBox = document.getElementsByClassName('projectbox')
    for (var i = 0; i < bgBox.length; i++) {
      bgBox[i].style.backgroundColor = randomColor;
    }
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('#contactForm');
  
  if (!form) {
    console.error('Form not found!');
    return;
  }

  form.addEventListener('submit', function (event) {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      alert("Thank you For Contacting");
      window.location.reload();
    }

    form.classList.add('was-validated');
  });
});






document.querySelectorAll('#contact').forEach(function(button) {
  button.addEventListener('click', function() {
    const target = document.querySelector('.contact-sc');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

document.querySelectorAll('#projects').forEach(function(button) {
  button.addEventListener('click', function() {
    const target = document.querySelector('.project-sc');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});