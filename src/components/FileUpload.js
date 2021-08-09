import { useState } from "react";
import firebase from '../config/firebase'
import { v4 as uuidv4 } from 'uuid';

const FileUpload = ({ user }) => {
    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)
    const uploadFile = () => {
        console.log(file.name)
        if (file.size < (2 * 1024 * 1024)) {
            setError(null)
            var storageRef = firebase.storage().ref();
            const uploadTask = storageRef.child(`${user.uid}-uploads/${uuidv4()}-${file.name}`).put(file)

            uploadTask.on('state_changed',
                (snapshot) => {
                    // Observe state change events such as progress, pause, and resume
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused': // or 'paused'
                            console.log('Upload is paused');
                            break;
                        case 'running': // or 'running'
                            console.log('Upload is running');
                            break;
                    }
                },
                (error) => {
                    // Handle unsuccessful uploads
                },
                () => {
                    // Handle successful uploads on complete
                    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                    uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                        console.log('File available at', downloadURL);
                    });
                }
            );
        } else {
            setError("File too big")
        }

    }
    return (
        user &&
        (<div className="file-upload">
            <form>
                <input type="file" name="file" onChange={event => setFile(event.target.files[0])} />
            </form>
            <button onClick={uploadFile}>Upload</button>
            {error}
        </div>)
    );
}

export default FileUpload;