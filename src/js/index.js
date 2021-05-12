$(window).on("load", function() {

    if ($(window).width() > 1100) {
        $(".project-food").on("mouseenter", function(){
            $("#food-skills").css("transform", "scaleY(1)")
            $("#food-skills").css("opacity", 1)
        });
        $(".project-food").on("mouseleave", function(){
            $("#food-skills").css("transform", "scaleY(0)")
            $("#food-skills").css("opacity", 0)
        })


        $(".project-portfolio").on("mouseenter", function(){
            $("#portfolio-skills").css("transform", "scaleY(1)")
            $("#portfolio-skills").css("opacity", 1)
        });
        $(".project-portfolio").on("mouseleave", function(){
            $("#portfolio-skills").css("transform", "scaleY(0)")
            $("#portfolio-skills").css("opacity", 0)
        })


        $(".project-budget").on("mouseenter", function(){
            $("#budget-skills").css("transform", "scaleY(1)")
            $("#budget-skills").css("opacity", 1)
        });
        $(".project-budget").on("mouseleave", function(){
            $("#budget-skills").css("transform", "scaleY(0)")
            $("#budget-skills").css("opacity", 0)
        })

        $(document).on("scroll", function(){
            $(".hero-image").css("transform", `translateY(${scrollY * -0.4}px)`)
            $(".about-container").css("transform", `translateY(${scrollY * 0.08}px)`)
        })

        $(".navbar-work").on("click", function() {
            const skillBox = document.getElementById("desktop-skills")
            skillBox.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "center"
            })
        })
    } else {
        $(".navbar-work").on("click", function() {
            const skillBox = document.getElementById("mobile-skills")
            skillBox.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "center"
            })
        })
    }
    
    $(".navbar-contact").on("click", function() {
        const contactBox = document.getElementById("contact-box")
        contactBox.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center"
        })
    })



});


// Handle form submit

const form = document.getElementById("my-form");
    
async function handleSubmit(event) {
  event.preventDefault();
  const status = document.getElementById("submit");
  let data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    status.innerHTML = "Thanks for your submission!";
    form.reset()
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
  });
}
form.addEventListener("submit", handleSubmit)

