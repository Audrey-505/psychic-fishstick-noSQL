const handles = [
    'hermonie1',
    'harry2',
    'ron3',
    'ginny4',
    'neville5',
    'luna6',
    'draco7',
]

const posts = [
    'excited for the weekend',
    'whos seen the new marvel movie?',
    'wheres a good place to get Italian downtown?',
    'I love Taylors new album',
    'that season of Stranger Things comes out tonight!',
    'Who knows the best place to get an oil change in town?',
    'Coffee is the best way to start my morning'
]

const reactions = [
    'I agree weekends are the best',
    'new movie was awesome',
    'I like naplois on 5th',
    'best album shes released in a long time',
    'best show ever',
    'go to Marvins Tire in the square, they are the best',
    'the best part of waking up is foldgers in your cup',
]

const getRan = (arr) => arr[Math.floor(Math.random() * arr.length)]

const makeEmail = () => `${getRan(handles)}`+'@gmail.com'

const getRandomUser = () => `${getRan(handles)}`

const getRandomThought = () => `${getRan(posts)}`

const getRandomReaction = () => `${getRan(reactions)}`

module.exports = { makeEmail, getRandomUser, getRandomThought, getRandomReaction }

