//input data
let information = [
    { year: 2014, month: "May", day: 28, hour: "12:30", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem fugiat suscipit natus placeataperiam esse nam cumque voluptatibus fugit itaque quam nesciunt nisi, minima sit aliquid, doloremquaerat laudantium iusto!", image: "first.jpg" },
    { year: 2016, month: "January", day: 08, hour: "12:00", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem fugiat suscipit natus placeataperiam esse nam cumque voluptatibus fugit itaque quam nesciunt nisi, minima sit aliquid, doloremquaerat laudantium iusto!", image: "second.jpg" },
    { year: 2016, month: "January", day: 08, hour: "12:10", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem fugiat suscipit natus placeataperiam esse nam cumque voluptatibus fugit itaque quam nesciunt nisi, minima sit aliquid, doloremquaerat laudantium iusto!", image: "second.jpg" },
    { year: 2016, month: "January", day: 08, hour: "12:20", description: "Lorem Autem fugiat suscipit natus placeataperiam esse nam cumque voluptatibus fugit itaque quam nesciunt nisi, minima sit aliquid, doloremquaerat laudantium iusto!", image: "second.jpg" },
    { year: 2012, month: "October", day: 14, hour: "12:20", description: "Lorem ipsum dolor sit amet consectetur adippit natus placeataperiam esse nam cumque voluptatibus fugit itaque quam nesciunt nisi, minima sit aliquid, doloremquaerat laudantium iusto!", image: "third.jpg" },
    { year: 2015, month: "December", day: 01, hour: "12:40", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem fugiat suscipit natus placeataperiam esse nam cumque voluptatibus fugit itaque quam nesciunt nisi, minima sit aliquid, doloremquaerat laudantium iusto!", image: "fourth.png" },
    { year: 2018, month: "March", day: 22, hour: "13:10", description: "lorem ipsum perma sut terra mur", image: "fifth.jpg" },
    { year: 2014, month: "February", day: 24, hour: "12:40", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem fugiat suscipit natus placeataperiam esse nam cumque, doloremquaerat laudantium iusto!", image: "sixth.jpg" },
    { year: 2014, month: "February", day: 25, hour: "12:40", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem fugiat suscipit natus placeataperiam esse nam cumque voluptatibus fugit itaque quam nesciunt nisi, minima sit aliquid, doloremquaerat laudantium iusto!", image: "" },
    { year: 2014, month: "February", day: 25, hour: "12:30", description: "lorem ipsum second", image: "third.jpg" },
    { year: 2020, month: "June", day: 25, hour: "12:40", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem fugiat suscipit natus placeataperiam esse nam cumque voluptatibus!", image: "" },
    { year: 2020, month: "June", day: 25, hour: "12:45", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem fugiat suscipit natus placeataperiam esse nam cumque voluptatibus fugit itaque quam nesciunt nisi, minima sit aliquid, doloremquaerat laudantium iusto!", image: "fourth.png" },
    { year: 2020, month: "June", day: 25, hour: "12:46", description: "lorem ipsum second", image: "" }
];
// translate global data to local
let data = information;
// loader variable
let loader = document.querySelector(".loader");
// loader functionality
window.setTimeout(function () {
    loader.style.display = "none";
}, 500);

// add scripts to page when page loaded
window.onload = function () {
    let descTitle = document.querySelector(".description h3");
    let time = document.querySelector(".description h4");
    let description = document.querySelector(".description span");
    let imgContainer = document.querySelector(".img");
    let image = document.querySelector(".img img");
    let slideIndex = 0;
    descTitle.textContent = `${data[slideIndex].year + " " + data[slideIndex].month + " " + data[slideIndex].day}`;
    time.textContent = `${data[slideIndex].hour}`;
    description.textContent = data[slideIndex].description;
    image.src = `./static/${data[slideIndex].image}`;
    image.alt = `${data[slideIndex].image}`;

    //modal variables
    let descTitleModal = document.querySelector(".description-modal h3");
    let timeModal = document.querySelector(".description-modal h4");
    let descriptionModal = document.querySelector(".description-modal span");
    let imgContainerModal = document.querySelector(".galleryModal .img");
    let imageModal = document.querySelector(".galleryModal .img img");
    let modalContainer = document.querySelector(".galleryModal");
    let closeModal = document.querySelector(".close-modal");
    descTitleModal.textContent = `${data[slideIndex].year + " " + data[slideIndex].month + " " + data[slideIndex].day}`;
    timeModal.textContent = `${data[slideIndex].hour}`;
    descriptionModal.textContent = data[slideIndex].description;
    imageModal.src = `./static/${data[slideIndex].image}`;
    imageModal.alt = `${data[slideIndex].image}`;


    //current prev date and ivent in calendar variables
    let currentDate, calendarIvent;
    currentDate = document.querySelector(`.year${data[slideIndex].year} .${data[slideIndex].month} .day${data[slideIndex].day}`);
    currentDate.scrollIntoView({ block: "center", behavior: "smooth" });
    // currentDate.classList.add("active");

    //Variables for event containers
    let eventID, eventContainer;

    //Variables for clicked element in ruller
    let clickedItem, searchItem;

    //slider controls
    let left = document.querySelector('.nav-left');
    let right = document.querySelector('.nav-right');

    left.addEventListener('click', function () {
        if (slideIndex == 0) {
            slideIndex += (data.length - 1);
            descTitle.textContent = `${data[slideIndex].year + " " + data[slideIndex].month + " " + data[slideIndex].day}`;
            time.textContent = `${data[slideIndex].hour}`;
            description.textContent = data[slideIndex].description;
            //modal 
            descTitleModal.textContent = `${data[slideIndex].year + " " + data[slideIndex].month + " " + data[slideIndex].day}`;
            timeModal.textContent = `${data[slideIndex].hour}`;
            descriptionModal.textContent = data[slideIndex].description;
            if (!data[slideIndex].image) {
                imgContainer.style.display = "none";
            } else {
                imgContainer.style.display = "block";
                image.src = `./static/${data[slideIndex].image}`;
                image.alt = `${data[slideIndex].image}`;
                //modal
                imageModal.src = `./static/${data[slideIndex].image}`;
                imageModal.alt = `${data[slideIndex].image}`;
            }
            currentDate = document.querySelector(`.year${data[slideIndex].year} .${data[slideIndex].month} .day${data[slideIndex].day}`);
            currentDate.scrollIntoView({ block: "center", behavior: "smooth" });

        } else {
            slideIndex -= 1;
            descTitle.textContent = `${data[slideIndex].year + " " + data[slideIndex].month + " " + data[slideIndex].day}`;
            time.textContent = `${data[slideIndex].hour}`;
            description.textContent = data[slideIndex].description;
            //modal 
            descTitleModal.textContent = `${data[slideIndex].year + " " + data[slideIndex].month + " " + data[slideIndex].day}`;
            timeModal.textContent = `${data[slideIndex].hour}`;
            descriptionModal.textContent = data[slideIndex].description;
            if (!data[slideIndex].image) {
                imgContainer.style.display = "none";
            } else {
                imgContainer.style.display = "block";
                image.src = `./static/${data[slideIndex].image}`;
                image.alt = `${data[slideIndex].image}`;
                //modal
                imageModal.src = `./static/${data[slideIndex].image}`;
                imageModal.alt = `${data[slideIndex].image}`;
            }
            currentDate = document.querySelector(`.year${data[slideIndex].year} .${data[slideIndex].month} .day${data[slideIndex].day}`);
            currentDate.scrollIntoView({ block: "center", behavior: "smooth" });
        }
    });

    right.addEventListener('click', function () {
        if (slideIndex >= data.length - 1) {
            slideIndex = 0;
            descTitle.textContent = `${data[slideIndex].year + " " + data[slideIndex].month + " " + data[slideIndex].day}`;
            time.textContent = `${data[slideIndex].hour}`;
            description.textContent = data[slideIndex].description;
            //modal 
            descTitleModal.textContent = `${data[slideIndex].year + " " + data[slideIndex].month + " " + data[slideIndex].day}`;
            timeModal.textContent = `${data[slideIndex].hour}`;
            descriptionModal.textContent = data[slideIndex].description;
            if (!data[slideIndex].image) {
                imgContainer.style.display = "none";
            } else {
                imgContainer.style.display = "block";
                image.src = `./static/${data[slideIndex].image}`;
                image.alt = `${data[slideIndex].image}`;
                //modal
                imageModal.src = `./static/${data[slideIndex].image}`;
                imageModal.alt = `${data[slideIndex].image}`;
            }
            currentDate = document.querySelector(`.year${data[slideIndex].year} .${data[slideIndex].month} .day${data[slideIndex].day}`);
            currentDate.scrollIntoView({ block: "center", behavior: "smooth" });
        } else {
            slideIndex += 1;
            descTitle.textContent = `${data[slideIndex].year + " " + data[slideIndex].month + " " + data[slideIndex].day}`;
            time.textContent = `${data[slideIndex].hour}`;
            description.textContent = data[slideIndex].description;
            //modal 
            descTitleModal.textContent = `${data[slideIndex].year + " " + data[slideIndex].month + " " + data[slideIndex].day}`;
            timeModal.textContent = `${data[slideIndex].hour}`;
            descriptionModal.textContent = data[slideIndex].description;
            if (!data[slideIndex].image) {
                imgContainer.style.display = "none";
            } else {
                imgContainer.style.display = "block";
                image.src = `./static/${data[slideIndex].image}`;
                image.alt = `${data[slideIndex].image}`;
                //modal
                imageModal.src = `./static/${data[slideIndex].image}`;
                imageModal.alt = `${data[slideIndex].image}`;
            }
            currentDate = document.querySelector(`.year${data[slideIndex].year} .${data[slideIndex].month} .day${data[slideIndex].day}`);
            currentDate.scrollIntoView({ block: "center", behavior: "smooth" });
        }
    });

    //open - close modal
    imgContainer.addEventListener("click", function () {
        modalContainer.style.display = "flex";
    });

    closeModal.addEventListener("click", function () {
        modalContainer.style.display = "none";
    });


    //modal-slider controls
    let leftModal = document.querySelector('.nav-left-modal');
    let rightModal = document.querySelector('.nav-right-modal');

    leftModal.addEventListener('click', function () {
        if (slideIndex == 0) {
            slideIndex += (data.length - 1);
            descTitle.textContent = `${data[slideIndex].year + " " + data[slideIndex].month + " " + data[slideIndex].day}`;
            time.textContent = `${data[slideIndex].hour}`;
            description.textContent = data[slideIndex].description;
            if (!data[slideIndex].image) {
                imgContainer.style.display = "none";
            } else {
                imgContainer.style.display = "block";
                image.src = `./static/${data[slideIndex].image}`;
                imageModal.alt = `${data[slideIndex].image}`;
            }
            currentDate = document.querySelector(`.year${data[slideIndex].year} .${data[slideIndex].month} .day${data[slideIndex].day}`);
            currentDate.scrollIntoView({ block: "center", behavior: "smooth" });

            //modal window
            descTitleModal.textContent = `${data[slideIndex].year + " " + data[slideIndex].month + " " + data[slideIndex].day}`;
            timeModal.textContent = `${data[slideIndex].hour}`;
            descriptionModal.textContent = data[slideIndex].description;
            if (!data[slideIndex].image) {
                imgContainerModal.style.display = "none";
            } else {
                imgContainerModal.style.display = "block";
                imageModal.src = `./static/${data[slideIndex].image}`;
                imageModal.alt = `${data[slideIndex].image}`;
            }
        } else {
            slideIndex -= 1;
            descTitle.textContent = `${data[slideIndex].year + " " + data[slideIndex].month + " " + data[slideIndex].day}`;
            time.textContent = `${data[slideIndex].hour}`;
            description.textContent = data[slideIndex].description;
            if (!data[slideIndex].image) {
                imgContainer.style.display = "none";
            } else {
                imgContainer.style.display = "block";
                image.src = `./static/${data[slideIndex].image}`;
                imageModal.alt = `${data[slideIndex].image}`;
            }
            currentDate = document.querySelector(`.year${data[slideIndex].year} .${data[slideIndex].month} .day${data[slideIndex].day}`);
            currentDate.scrollIntoView({ block: "center", behavior: "smooth" });

            //modal window
            descTitleModal.textContent = `${data[slideIndex].year + " " + data[slideIndex].month + " " + data[slideIndex].day}`;
            timeModal.textContent = `${data[slideIndex].hour}`;
            descriptionModal.textContent = data[slideIndex].description;
            if (!data[slideIndex].image) {
                imgContainerModal.style.display = "none";
            } else {
                imgContainerModal.style.display = "block";
                imageModal.src = `./static/${data[slideIndex].image}`;
                imageModal.alt = `${data[slideIndex].image}`;
            }
        }
    });

    rightModal.addEventListener('click', function () {
        if (slideIndex >= data.length - 1) {
            slideIndex = 0;
            descTitle.textContent = `${data[slideIndex].year + " " + data[slideIndex].month + " " + data[slideIndex].day}`;
            time.textContent = `${data[slideIndex].hour}`;
            description.textContent = data[slideIndex].description;
            if (!data[slideIndex].image) {
                imgContainer.style.display = "none";
            } else {
                imgContainer.style.display = "block";
                image.src = `./static/${data[slideIndex].image}`;
                imageModal.alt = `${data[slideIndex].image}`;
            }
            currentDate = document.querySelector(`.year${data[slideIndex].year} .${data[slideIndex].month} .day${data[slideIndex].day}`);
            currentDate.scrollIntoView({ block: "center", behavior: "smooth" });

            //modal window
            descTitleModal.textContent = `${data[slideIndex].year + " " + data[slideIndex].month + " " + data[slideIndex].day}`;
            timeModal.textContent = `${data[slideIndex].hour}`;
            descriptionModal.textContent = data[slideIndex].description;
            if (!data[slideIndex].image) {
                imgContainerModal.style.display = "none";
            } else {
                imgContainerModal.style.display = "block";
                imageModal.src = `./static/${data[slideIndex].image}`;
                imageModal.alt = `${data[slideIndex].image}`;
            }
        } else {
            slideIndex += 1;
            descTitle.textContent = `${data[slideIndex].year + " " + data[slideIndex].month + " " + data[slideIndex].day}`;
            time.textContent = `${data[slideIndex].hour}`;
            description.textContent = data[slideIndex].description;
            if (!data[slideIndex].image) {
                imgContainer.style.display = "none";
            } else {
                imgContainer.style.display = "block";
                image.src = `./static/${data[slideIndex].image}`;
                imageModal.alt = `${data[slideIndex].image}`;
            }
            currentDate = document.querySelector(`.year${data[slideIndex].year} .${data[slideIndex].month} .day${data[slideIndex].day}`);
            currentDate.scrollIntoView({ block: "center", behavior: "smooth" });

            //modal window
            descTitleModal.textContent = `${data[slideIndex].year + " " + data[slideIndex].month + " " + data[slideIndex].day}`;
            timeModal.textContent = `${data[slideIndex].hour}`;
            descriptionModal.textContent = data[slideIndex].description;
            if (!data[slideIndex].image) {
                imgContainerModal.style.display = "none";
            } else {
                imgContainerModal.style.display = "block";
                imageModal.src = `./static/${data[slideIndex].image}`;
                imageModal.alt = `${data[slideIndex].image}`;
            }
        }
    });
    let mass = [];

    (function () {
        for (let i = 0; i < data.length; i++) {
            calendarIvent = document.querySelector(`.year${data[i].year} .${data[i].month} .day${data[i].day}`);
            eventID = `${i + 1}`;
            calendarIvent.innerHTML = `<span id="${eventID}">${data[i].day}</span>`;
            calendarIvent.classList.add("active");
            eventContainer = document.getElementById(`${eventID}`);
            //styles for event container
            eventContainer.classList.add("event");

            //transition to element which clicked on ruller
            eventContainer.addEventListener("click", function (event) {
                clickedItem = event.target.id;
                searchItem = clickedItem - 1;

                descTitle.textContent = `${data[searchItem].year + " " + data[searchItem].month + " " + data[searchItem].day}`;
                time.textContent = `${data[searchItem].hour}`;
                description.textContent = data[searchItem].description;
                if (!data[searchItem].image) {
                    imgContainer.style.display = "none";
                } else {
                    imgContainer.style.display = "block";
                    image.src = `./static/${data[searchItem].image}`;
                };
            });

            let item = data[i];
            let nextItem;
            if (i == data.length - 1) {
                nextItem = data[i - 1];
            } else {
                nextItem = data[i + 1];
            };

            if (item.year == nextItem.year && item.month == nextItem.month && item.day == nextItem.day && item.hour != nextItem.hour) {

                mass.push(data[i]);

                for (let j = 0; j < mass.length; j++) {
                    var year = mass[j].year;
                    var month = mass[j].month;
                    var day = mass[j].day;

                    var dubbleEvent = document.querySelector(`.year${year} .${month} .day${day} .event`);
                    var eventCounter = document.createElement("div");
                    eventCounter.classList.add("eventCounter");
                    eventCounter.innerHTML = `<p class="counter"><i class="far fa-calendar-alt"></i></p>`;
                    dubbleEvent.appendChild(eventCounter);

                }
            }
        };
    }());

    //zoom controls

    let plus = document.querySelector('.plus');
    let minus = document.querySelector('.minus');

    plus.addEventListener('click', function () {
        let allSpans = document.querySelectorAll(".date span");
        let span;
        for (let i = 0; i < allSpans.length; i++) {
            span = allSpans[i];
            span.style.fontSize = "100%";
        }
    });

    minus.addEventListener('click', function () {
        let allSpans = document.querySelectorAll(".date span");
        let span;
        for (let i = 0; i < allSpans.length; i++) {
            span = allSpans[i];
            span.style.fontSize = "5px";
        }

        let eventSpans = document.querySelectorAll(".event");
        let eventSpan;
        for (let i = 0; i < eventSpans.length; i++) {
            eventSpan = eventSpans[i];
            eventSpan.style.fontSize = "100%";
        }
    });

};