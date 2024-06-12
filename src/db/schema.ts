// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
    boolean,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `taskManagement_${name}`);

export const todos = createTable(
  "todo",
  {
    id: serial("id").primaryKey(),
    title: varchar("title", { length: 256 }).notNull(),
    description: varchar("description", { length: 1024 }).notNull(),
    endDate: timestamp("endDate", { withTimezone: true }).default(sql`CURRENT_TIMESTAMP`),
    completed: boolean("completed").notNull().default(false),
  },
);
