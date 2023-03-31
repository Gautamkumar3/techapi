const userModel = require("../model/user");
const secretKey = process.env.SECRET_KEY;
const jwt = require("jsonwebtoken");

const userLogin = async (req, res) => {
  const { name, password } = req.body;
  if (!name || !password) {
    return res
      .status(404)
      .send({ status: "warning", message: `name or password is missing` });
  }
  try {
    const user = await userModel.findOne({ name, password });
    if (!user) {
      res.status(401).send({ status: "error", message: "Invalid Credentials" });
    } else {
      const token = jwt.sign(
        { name: user.name, password: user.password },
        secretKey,
        { expiresIn: "1 day" }
      );
      res.status(200).send({
        status: "success",
        message: "Login successfull",
        token: token,
      });
    }
  } catch (er) {
    res.status(401).send({ status: "error", message: er.message });
  }
};

module.exports = {
  userLogin,
};
