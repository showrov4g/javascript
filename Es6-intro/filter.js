const number = [1, 5, 6, 4, 15];
const players = [75, 65, 67, 72, 55, 59];

// const selected = players.filter(p => p > 70 );
// const selected = players.filter(p => p > 80 );
// const selected = players.filter(p => p > 50);

const selected = players.filter((p) => p % 2 === 1);

const friend = ["tom", "john", "micheal", "oliver", "tim", "joshna"];

const oddFriends = friend.filter((friend) => friend.length > 4);

console.log(oddFriends)
