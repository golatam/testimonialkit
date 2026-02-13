import { type User, type InsertUser, type Signup, type InsertSignup, users, signups } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createSignup(signup: InsertSignup): Promise<Signup>;
  getSignupByEmail(email: string): Promise<Signup | undefined>;
  getSignupCount(): Promise<number>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async createSignup(insertSignup: InsertSignup): Promise<Signup> {
    const [signup] = await db.insert(signups).values(insertSignup).returning();
    return signup;
  }

  async getSignupByEmail(email: string): Promise<Signup | undefined> {
    const [signup] = await db.select().from(signups).where(eq(signups.email, email));
    return signup || undefined;
  }

  async getSignupCount(): Promise<number> {
    const result = await db.select().from(signups);
    return result.length;
  }
}

export const storage = new DatabaseStorage();
