import { db } from "./firebase";
import { collection, addDoc, getDocs, query, where, updateDoc, doc, getDoc, setDoc } from "firebase/firestore";

export type Todo = {
    title: string;
    completed: boolean;
    description: string;
    dateCreated: string;
    dateToFinish: string;
    category: string;
}

export async function addSampleTodo(): Promise<void> {

 const sampleTodo: Todo = {
    title: "Sample Todo",
    completed: false,
    description: "This is a sample todo",
    dateCreated: "2022-01-01",
    dateToFinish: "2022-01-02",
    category: "Sample Category"
 };

 const todoCollection = collection(db, "todo");
 try {
    const docRef = await addDoc(todoCollection, sampleTodo);
    console.log("Sample todo added with ID:", docRef.id);
 } catch (error) {
    console.error("Error adding sample todo:", error);
    throw error;
 }
}



addSampleTodo()

