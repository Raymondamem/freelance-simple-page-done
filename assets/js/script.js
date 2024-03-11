const leaderboard = document.querySelector('#leaderboard');
const quests = document.querySelector('#quests');

leaderboard.addEventListener('click', function () {
    quests.classList.remove('active');
    this.classList.add('active');
})

quests.addEventListener('click', function () {
    leaderboard.classList.remove('active');
    this.classList.add('active');
})