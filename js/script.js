// CULTURAL PILLARS SCROLL
const scrollContainer = document.getElementById('pillars-scroll');
const btnPrev = document.getElementById('slide-prev');
const btnNext = document.getElementById('slide-next');

function getScrollAmount() {
    const firstCard = scrollContainer.querySelector('.pillar-card');
    const cardWidth = firstCard ? firstCard.offsetWidth : 360;
    return cardWidth + 25;
}

btnNext.addEventListener('click', () => {
    scrollContainer.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
});

btnPrev.addEventListener('click', () => {
    scrollContainer.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
});

// FUN FACTS ACCORDION
const factsQuestions = document.querySelectorAll('.facts-question');

factsQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        const answer = question.nextElementSibling;

        if (item.classList.contains('active')) {
            item.classList.remove('active');
            answer.style.maxHeight = null;
        } else {
            document.querySelectorAll('.facts-item').forEach(i => {
                i.classList.remove('active');
                i.querySelector('.facts-answer').style.maxHeight = null;
            });

            item.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
});