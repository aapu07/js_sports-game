let teamOneShotCountElement = document.querySelector("#teamone-numshots")
let teamOneShotButton = document.querySelector("#teamone-shoot-button")
let teamOneGoalCountSpanElement = document.querySelector("#teamone-numgoals")

let teamTwoShotCountElement = document.querySelector("#teamtwo-numshots")
let teamTwoShotButton = document.querySelector("#teamtwo-shoot-button")
let teamTwoGoalCountSpanElement = document.querySelector("#teamtwo-numgoals")

let resetCountElement = document.querySelector("#reset-button")
let resetNumber = document.querySelector("#num-resets")
let teamgoals = document.querySelector("#goals")

let myAudio = new Audio ("mouse_click.mp3")

teamOneShotButton.addEventListener("click", function () {
    let currentTeamOneShotCount = Number(teamOneShotCountElement.innerHTML)
    let newShotCountOne = currentTeamOneShotCount + 1
    teamOneShotCountElement.innerHTML = newShotCountOne

    let randomNumberVar = Math.random()

    if (randomNumberVar > 0.5) {
        let currentTeamOneGoalCount = Number(teamOneGoalCountSpanElement.innerHTML)
        let newTeamOneGoalCount = currentTeamOneGoalCount + 1
        teamOneGoalCountSpanElement.innerHTML = newTeamOneGoalCount

    } else {

    }

})

teamTwoShotButton.addEventListener("click", function () {
    let currentTeamTwoShotCount = Number(teamTwoShotCountElement.innerHTML)
    let newShotCountTwo = currentTeamTwoShotCount + 1
    teamTwoShotCountElement.innerHTML = newShotCountTwo

    let randomNumberVar = Math.random()

    if (randomNumberVar > 0.5) {
        let currentTeamTwoGoalCount = Number(teamTwoGoalCountSpanElement.innerHTML)
        let newTeamTwoGoalCount = currentTeamTwoGoalCount + 1
        teamTwoGoalCountSpanElement.innerHTML = newTeamTwoGoalCount

    } else {

    }

})

resetCountElement.addEventListener("click", function () {
    resetNumber.innerHTML = Number(resetNumber.innerHTML) + 1;

    if (teamgoals >= 0) {
        teamOneShotCountElement.innerHTML = Number(0);
        teamTwoShotCountElement.innerHTML = Number(0);
        teamOneGoalCountSpanElement.innerHTML = Number(0);
        teamTwoGoalCountSpanElement.innerHTML = Number(0);
        myAudio.play();
    }
})




