const connection = require('../config/connection')
const {User, Thought} = require('../models')
const { makeEmail, getRandomUser, getRandomThought, getRandomReaction } = require('./data')

connection.on('error', (err) => err)

connection.once('open', async () => {
    console.log('connected')

    await Thought.deleteMany({})

    await User.deleteMany({})

    const user = []

    for(let i = 0; i < 7; i++){
        const username = getRandomUser()

        const email = makeEmail()

        user.push({
            username,
            email
        })
    }

await User.collection.insertMany(user)

await Thought.collection.insertOne({
    thoughtText: getRandomThought(),
    username: getRandomUser(),
    reactions: getRandomReaction(),
})


  console.table(user);
  console.info('Seeding complete! 🌱');
  process.exit(0)

})

//testing seeds