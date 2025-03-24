const app = require('./app');
const connectToDB = require('./config/db');
const { PORT } = process.env;

const startApp = () => {

    app.listen(PORT, () => {
        console.log(`Auth Backend running on port ${PORT}`);
    });
    connectToDB();

}

startApp();