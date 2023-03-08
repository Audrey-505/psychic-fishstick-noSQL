const connection = require('../config/connection')
const {User, Thought} = require('../models')
const { makeEmail, getRandomUser, getRandomThought, getRandomReaction } = require('./data')

connection.on('error', (err) => err)

connection.once('open', async () => {
    console.log('connected')

    await Thought.deleteMany({})

    await User.deleteMany({})

    const user = []
const thought = []
    for(let i = 0; i < 7; i++){
        const username = getRandomUser()

        const email = makeEmail()

        user.push({
            username,
            email
        })
        thought.push({
        thoughtText: getRandomThought(),
        username: getRandomUser()
        })
    }

await User.collection.insertMany(user)

await Thought.collection.insertOne({
    thoughtText: getRandomThought(),
    username: getRandomUser(),
    //reactions: getRandomReaction(),
})

// console.log('TESTING')
// await Thought.find().then((thoughts) => {
//     console.log(thoughts)
//     Thought.collection.findOne(
//         { _id: thoughts[0]._id},
//         { $addToSet: { reactions: getRandomReaction() } },
//         { runValidators: true, new: true }
//     )
//     .then((thought) => {
//         console.log(thought)
//     })
// }
// )


  console.table(user);
  console.info('Seeding complete! 🌱');
  process.exit(0)

})

//testing seeds