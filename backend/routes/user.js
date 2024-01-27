const express = require('express');
const z = require("zod");
const jwt = require("jsonwebtoken");
const router = express.Router();
const { authMiddleware } = require("../middleware");
const { User, Account } = require('../db');
const { JWT_SECRET } = require("../config");

const signupSchema = z.object({
  username: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  password: z.string(),
});

// Sign-up logic
router.post('/signup', async (req, res) => {
  const { success } = signupSchema.safeParse(req.body);

  // Input validation
  if (!success) {
    res.status(411).json({
      msg: "Something wrong with the inputs"
    });
  }

  // Checking if user with same email exists
  const userExists = await User.findOne({ email: req.body.username });

  if (!userExists) {
    const user = await User.create({
      username: req.body.username,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: req.body.password
    });

    const userId = user._id;

    // Account creation for the user
    await Account.create({
      userId: userId,
      balance: 1 + Math.random() * 10000
    })

    // Creating JWT token for user
    const token = jwt.sign({
      userId
    }, JWT_SECRET);
    res.json({
      msg: 'User Created Succesfully',
      token: token
    }).status(200);
  }
  else {
    res.status(401).json({ msg: 'User with Email Exists' });
  }
});

const signinSchema = z.object({
  username: z.string().email(),
  password: z.string(),
});

// Sign-In logic
router.post('/signin', async (req, res) => {
  const { success } = signinSchema.safeParse(req.body)
  if (!success) {
    return res.status(411).json({
      message: "Incorrect inputs"
    })
  }

  const user = await User.findOne({
    username: req.body.username,
    password: req.body.password
  });

  if (user) {
    const token = jwt.sign({
      userId: user._id
    }, JWT_SECRET);

    res.json({
      token: token
    })
    return;
  }

  res.status(411).json({
    message: "Error while logging in"
  })
});

// schema with optional fields
const updateBody = z.object({
  password: z.string().optional(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
})

// PUT call
router.put("/", authMiddleware, async (req, res) => {
  const { success } = updateBody.safeParse(req.body)
  if (!success) {
    res.status(411).json({
      message: "Error while updating information"
    })
  }

  await User.findOneAndUpdate({
    _id: req.userId
  }, req.body);

  res.json({
    message: "Updated successfully"
  });
})

router.get("/bulk", authMiddleware, async (req, res) => {
  const filter = req.query.filter || "";

  const loggedInUserId = req.userId;

  const users = await User.find({
    $or: [{
      firstName: {
        "$regex": filter
      }
    },
    {
      lastName: {
        "$regex": filter
      }
    }]
  });

  const finalUsersList = users.filter(x => x._id != loggedInUserId);

  res.json({
    user: finalUsersList.map(user => ({
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      _id: user._id
    }))
  })
})

module.exports = router;