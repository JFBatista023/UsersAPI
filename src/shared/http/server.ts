import "dotenv/config";
import "reflect-metadata";
import { app } from "./app";
import { dataSource } from "../typeorm";

const PORT = process.env.PORT;

dataSource.initialize().then(() => {
    app.listen(PORT, () => {
        console.log(`Server started on http://localhost:${PORT}`);
    });
});
