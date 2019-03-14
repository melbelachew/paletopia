
exampleUrlsArr = [

    {   
        url:"https://images.unsplash.com/photo-1518895949257-7621c3c786d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        name:"Rose"

    },
    {
        url:"https://images.unsplash.com/photo-1511804472014-fa7b871cd6a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        name:"Ocean"
    },
    {
        url:"https://images.unsplash.com/photo-1445264718234-a623be589d37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        name:"Forest"
    },
    {
        url:"https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        name:"Cosmos"
    },
    {
        url:"https://images.unsplash.com/photo-1543005472-1b1d37fa4eae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        name:"Fire"
    }
   
]

$("#example-buttons").append($("<p id='try'>").text("Or click on one of the buttons below to see the magic...")).addClass('ani4')

exampleUrlsArr.forEach((urlname) => {
    let button = $("<button>").addClass('xyz pure-u-1-5').text(urlname.name).addClass("ani5");
    button.on("click", () => {
        $("#display").removeClass('animated forwards fadeIn');
        event.preventDefault()
        localStorage.setItem("currentUrl", urlname.url)
        getColors(urlname.url)
       
    })
    button.addClass("example-buttons")
    $("#example-buttons").append(button)
})