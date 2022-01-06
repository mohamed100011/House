let progressSpans = document.querySelectorAll('.the-progress span');
let section = document.querySelector('.our-skills');
let nums = document.querySelectorAll('.stats .number');
let sectionNum = document.querySelector('.stats');
let btn = document.querySelector('.btn-up');
let otherLinks = document.getElementById('other-links');
let started = false;

window.onscroll = function () {
    if (window.scrollY >= 600) {
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
    if (window.scrollY >= section.offsetTop) {
        progressSpans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }
    if (window.scrollY >= sectionNum.offsetTop) {
        if (!started) {
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }
};

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal);
}

btn.onclick = function () {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth',
    });
};

function openNav() {}

function closeNav() {}

document.onclick = function (e) {
    console.log(e.target);
};
