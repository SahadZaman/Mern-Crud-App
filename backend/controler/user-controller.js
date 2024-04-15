import User from '../schema/user-schema.js';

export const addUser = async (req, res) => {
    const userData = req.body;
    const newUser = new User(userData);

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser); // Respond with the saved user
    } catch (error) {
        res.status(500).json({ message: error.message }); // Respond with error if save operation fails
    }
};
export const getUsers = async (req,res) => {
    try {
      const users = await User.find({});
      res.status(201).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
export const getUser = async (req,res) => {
    try {
      //const user = await User.find({_id: req.params.id});
      const user = await User.findById(req.params.id);
      res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
export const editUser = async (req,res) => {
    let user = req.body;
    const editUser = new User(user);
    try {
      //const user = await User.find({_id: req.params.id});
      await User.updateOne({_id:req.params.id}, editUser);
      res.status(201).json(editUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
export const deleteUser = async (req,res) => {
    try {
      //const user = await User.find({_id: req.params.id});
      await User.deleteOne({_id:req.params.id});
      res.status(201).json({message:"User Delete sucessfully"});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}