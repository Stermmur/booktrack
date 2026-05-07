import { DB_URI } from '$env/static/private';
import { MongoClient, ObjectId } from 'mongodb';

const client = new MongoClient(DB_URI);
let isConnected = false;

export async function getBooks() {
    if (!isConnected) {
        await client.connect();
        isConnected = true;
        console.log("MongoDB connected successfully to books");
    }
    return client.db('booktrack').collection('books');
}

export async function createBook(book) {
    const collection = await getBooks();
    const result = await collection.insertOne(book);
    return result;
}

export async function getGoals() {
    if (!isConnected) {
        await client.connect();
        isConnected = true;
        console.log("MongoDB connected successfully to goals");
    }
    return client.db('booktrack').collection('goals');
}

export async function createGoal(goal) {
    const collection = await getGoals();
    const result = await collection.insertOne(goal);
    return result;
}