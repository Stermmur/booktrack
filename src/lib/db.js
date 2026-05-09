import { DB_URI } from '$env/static/private';
import { MongoClient, ObjectId } from 'mongodb';

const client = new MongoClient(DB_URI);
let isConnected = false;

async function connect() {
    if (!isConnected) {
        await client.connect();
        isConnected = true;
    }
}

export async function getBooks() {
    await connect();
    return client.db('booktrack').collection('books');
}

export async function getGoals() {
    await connect();
    return client.db('booktrack').collection('goals');
}

export async function getUsers() {
    await connect();
    return client.db('booktrack').collection('users');
}

export async function createBook(book) {
    const collection = await getBooks();
    return await collection.insertOne(book);
}

export async function createGoal(goal) {
    const collection = await getGoals();
    return await collection.insertOne(goal);
}