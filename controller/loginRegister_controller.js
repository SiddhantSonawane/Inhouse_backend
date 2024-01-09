import pool from "../config/db.js";

export const register = async (req, res) => {
    
    const { name, gmail, password } = req.body;

    try {
        const results = await pool.query('SELECT * FROM register WHERE Email = ?', [gmail]);
        
        if (results[0].length > 0) {
            await pool.query('UPDATE register SET Password = ?, Name = ? WHERE Email = ?', [password, name, gmail]);
            res.status(200).send('Registration successful');
        } else {
            res.status(400).send('Invalid email');
        }
    } catch (err) {
        console.log(err);
        res.status(500).send('Server Error');
    }
};

export const verify = async (req, res) => {
    const { gmail, password } = req.body;

    try {
        const results = await pool.query('SELECT * FROM register WHERE Email = ? AND Password = ?', [gmail, password]);

        if (results[0].length > 0) {
            res.status(200).send('Email and Password verified');
        } else {
            res.status(400).send('Invalid Credentials');
        }
    } catch (err) {
        console.log(err);
        res.status(500).send('Server Error');
    }
};


export const checkRegistration = async (req, res) => {
    const email = req.params.email;

    try {
        const results = await pool.query('SELECT * FROM register WHERE Email = ? AND Password IS NOT NULL', [email]);
        if (results[0].length > 0) {
            res.status(200).json({ registered: true });
        } else {
            res.status(200).json({ registered: false });
        }
    } catch(err) {
        console.log(err);
        res.status(500).send('Server Error');
    }
};

export const login = async (req, res) => {
  const { gmail, password } = req.body;

    try {
        const results = await pool.query('SELECT * FROM register WHERE Email = ? AND Password = ?', [gmail, password]);
        console.log("Results are : ",results[0][0]);
        if (results[0].length > 0) {
            res.status(200).send({
                success:true,
                message:'Login Successful',
                data:results[0][0]
            });
        } else {
            res.status(401).send({
                success:false,
                message:'Invalid credentials',
                data:'Invalid credentials'
            });
        }
    } catch (err) {
            console.log(err);
            res.status(500).send({
                success:false,
                message:'Error in login',
                data:err.message
            });
    }
};
