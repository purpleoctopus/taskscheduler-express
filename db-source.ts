import { DataSource } from "typeorm";
import { Employee } from "./models/domain/employee";
import { Project } from "./models/domain/project";
import { Task } from "./models/domain/task";

export const AppDataSource = new DataSource({
    type: 'sqlite',
    database: 'db.sqlite', 
    synchronize: true, 
    logging: false, 
    entities: [
        Employee,
        Task,
        Project
    ],
    migrations: [],
    subscribers: [],
});