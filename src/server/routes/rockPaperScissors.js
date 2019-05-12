const { getRandomInt, computerFace, rand } = require('../apis/index');
const playableOptions = ['rock', 'paper', 'scissors'];

const playGame = (me, you) => {
    if (me === you) { 
        return "tie";
    }
    //you don't need break; if you have a return. The break; will never get executed.
    switch (me) {
      case 'rock':
        return (you === 'scissors') ? 'win' : 'lose';
      case 'paper':
        return (you === 'rock') ? 'win' : 'lose';
      case 'scissors':
        return (you === 'paper') ? 'win' : 'lose';  
    }
};

const postMatch = (req, res) => {
    const properties = req.body;
    const latency = getRandomInt(500, 1500);
    if(typeof properties.choice === 'undefined'){
        return res.status(400).json({ message: "'choice' param must not be null" });
    }
    // simulating network latency
    setTimeout(() => {
        const playerChoice = (properties.choice || '').toLowerCase();
        if (!playableOptions.includes(playerChoice)) {
            return res.status(400).json({ message: "'choice' param must be rock, paper, or scissors" });
        }
        // Send 500 ISE randomly 1 out of 10 times
        if (getRandomInt(1,10) === 1) {
            return res.status(500).json({message: "Internal Server Error"});
        }
        const computerChoice = rand(playableOptions);
        const result = playGame(playerChoice, computerChoice);
        const face = rand(computerFace[result]);

        //if the name and value label is the same you can use shorthand like below.
        return res.json({ playerChoice, computerChoice, result, face });
    }, latency); 
};

module.exports = {
    postMatch
};