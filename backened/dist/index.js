import { error } from "console";
import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";
const PORT = process.env.PORT || 5000;
//server
connectToDatabase()
    .then(() => {
    app.listen(PORT, () => console.log("server open & connected to database"));
}).catch((err) => console.log(error));
//# sourceMappingURL=index.js.map