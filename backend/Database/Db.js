import mongoose from "mongoose"

const connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.qhyqenh.mongodb.net/college`;
    try {
        await mongoose.connect(URL);
        console.log('database connected successfully');
    } catch (error) {
        console.log('Error while connecting with out database',error)
    }
};
export default connection;