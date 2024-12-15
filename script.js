const cont = document.getElementById("cont");
const some_text = document.getElementById("text");
const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const pane = document.getElementsByClassName("some-text");
const list = document.getElementById("m-list")
const button = document.getElementById("b")
const images = document.getElementById('carousel-img');
const right_button = document.getElementById("right-click");
const left_button = document.getElementById("left-click");

let currentIndex = 0;

function moveSlide(direction) {
    const totalImages = images.children.length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    } else if (currentIndex >= totalImages) {
        currentIndex = 0;
    }

    const offset = -currentIndex * 300;
    // images.style.marginLeft = offset + "px"; без анимации
    images.style.transform = "translateX(" + offset + "px)"; // с анимацией
}

const onLeftClick = () =>
{
    moveSlide(-1);
}

const onRightClick = () =>
    {
        moveSlide(1);
    }

Array.prototype.forEach.call(pane, function(element)
{
    element.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');
})

const onClick1 = () =>
{
    some_text.classList.add("hide");
}

const onClick2 = () =>
{
    b2.classList.add('hide');
}

const onClick3 = () =>
{
    list.classList.toggle("hide");
    if(list.classList.contains('hide'))
    { 
        b3.textContent = "ᐳ";
    }
    else
    {
        b3.textContent = "ᐯ";
    }
    
}


Array.prototype.forEach.call(pane, function(element)
{
    const onClick4 = () =>
    {
        element.remove();    
    }
    element.firstChild.addEventListener('click', onClick4);
})

b1.addEventListener('click', onClick1)
b2.addEventListener('click', onClick2)
b3.addEventListener('click', onClick3);
right_button.addEventListener('click', onRightClick);
left_button.addEventListener('click', onLeftClick);

button.addEventListener("click", () => alert("1"));

button.removeEventListener("click", () => alert("1"));

button.onclick = () => alert(2);
