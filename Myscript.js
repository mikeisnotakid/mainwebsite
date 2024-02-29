var NewsletterInput = document.getElementById("newsletterinput");
var NewsletterBtn = document.getElementById("newsletterbtn");
var DisplayReaction = document.getElementById("alertnewsletter")

NewsletterBtn.addEventListener("click", NewsletterBtnReact)


function NewsletterBtnReact(event) {


    if (NewsletterInput.value === "") {
        DisplayReaction.innerHTML = "Please enter an email address"
        DisplayReaction.style.color = "red"
        DisplayReaction.style.backgroundColor = "white"
        DisplayReaction.style.height = "50px"



    }


    else {

        DisplayReaction.innerHTML = "Succesfully Sent"
        DisplayReaction.style.color = "blue"
        DisplayReaction.style.backgroundColor = "white"
        DisplayReaction.style.height = "50px"
        NewsletterBtn.type = "submit";




    }

}