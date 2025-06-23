const Prest = require('../model/Prest');  // Use Prest model

// Create a new prest (user)
exports.registerPrest = async (req, res) => {
    try {
        const { firstName, lastName, phoneNumber, state, email, password } = req.body;

        // Check if prest already exists
        const existingPrest = await Prest.findOne({ email });
        if (existingPrest) {
            return res.status(400).json({ message: 'Prest already exists' });
        }

        // Create new prest
        const prest = new Prest({
            firstName,
            lastName,
            phoneNumber,
            state,
            email,
            password
        });

        await prest.save();
        res.status(201).json({ message: 'Prest registered successfully', prest });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Login Prest
exports.loginPrest = async (req, res) => {
  const { email, password } = req.body;

  console.log("Received login attempt with email:", email);

  try {
    // Find user by email
    const prest = await Prest.findOne({ email });
    if (!prest) {
      console.log("User not found");
      return res.status(400).json({ message: 'Invalid email' });
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, prest.password);
    if (!isPasswordValid) {
      console.log("Invalid password");
      return res.status(400).json({ message: 'Invalid password' });
    }

    console.log("Login successful");
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error("Error logging in:", error);  // Log the error details to the server console
    res.status(500).json({ message: 'Error logging in', error: error.message });
  }
};

module.exports = { registerPrest, loginPrest };
