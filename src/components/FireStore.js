import { useState } from 'react'
import firebase from '../config/firebase'

const FireStore = () => {
    const [dbData, setDbData] = useState([])
    const db = firebase.firestore()
    const addToDB = () => {
        db.collection('cats').add({
            name: "Garfield2",
            color: "orange",
            weight: 7
        })
    }
    const readDB = () => {
        db.collection("cats").get().then((querySnapshot) => {
            // console.log(querySnapshot)
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
                console.log(doc.data())
                setDbData(prev => {
                    return [
                        ...prev,
                        doc.data()
                    ]
                })
            });
        });
    }
    return (
        <div className="fire-store">
            <button onClick={addToDB}>Add</button>
            <button onClick={readDB}>Read</button>
        </div>
    );
}

export default FireStore;