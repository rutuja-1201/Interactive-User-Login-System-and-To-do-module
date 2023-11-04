const User = require('../models/user');

exports.updateProfile = async (req, res) => {
  try {
    const userId = req.user.userId; 
    const { name, email } = req.body;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    if (name) {
      user.name = name;
    }
    if (email) {
      user.email = email;
    }
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'User profile update failed' });
  }
};

exports.getUserProfile = async (req, res) => {
    try {
      const userId = req.user.userId; 
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: 'User profile retrieval failed' });
    }
  };
  