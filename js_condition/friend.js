let myScore = 60;
let friendScore = 60;

if (myScore >= 80 || friendScore > 80) {
    console.log("Go for lunch with your friend.");
}
else {
    if (friendScore >= 60) {
        console.log("Tell your friend: Good luck next time.");
    } else {
        if (friendScore >= 40) {
            console.log("Keep your friend's message unseen.");
        }
        else {
            console.log("Block your friend.");
        }
    }
}