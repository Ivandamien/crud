const mongoose = require('mongoose');



// const DB = process.env.MONGO_URI

// mongoose
//     .connect(DB, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useFindAndModify: false,
//         useCreateIndex: true

//     }).then(() => ("Database connection succesfull"));



// module.exports = mongoose;

const connectDB = async() => {
    try {
        // mongodb connection string
        const con = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useFindAndModify: false,
            // useCreateIndex: true
        })

        console.log(`MongoDB conected:${con.connection.host}`);

    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB