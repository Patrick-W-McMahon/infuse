const rand = items => items[~~(items.length * Math.random())];
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const computerFace = {
    win: ['surprise','tired','sad-tear','sad-cry','grimace','angry','dizzy','flushed','frown'],
    lose: ['smile-wink','smile-beam','grin-wink','grin-stars','grin-squint-tears','grin-squint','laugh-wink','grin-tongue-wink','grin-tongue-squint','smile'],
    tie: ['surprise','meh-rolling-eyes','meh','meh-blank','grin-beam-sweat','dizzy','flushed'],
    playing: ['meh']
}

module.exports = {
    rand,
    getRandomInt,
    computerFace
};