import User from '../models/User';

class UserController {
  async store(req, res) {

    const { email } = req.body;

    const checkEmail = await User.findOne({ where: { email } });

    if (checkEmail)
      return res.status(400).json({
        message: 'email duplicated'
      });

    try {
      const user = await User.create(req.body);
      return res.json(user);
    } catch (error) {
      return res.json(error);
    }
  }
}

export default new UserController();
