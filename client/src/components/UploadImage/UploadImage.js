import React from "react";
// import firebase from "firebase";
// import { getStorage, ref, uploadBytes } from "firebase/storage";
// const storage = getStorage();
const UploadImage = () => {
    const [uploadValue, setUploadValue] = (0);
    const [picture, setPicture] = (null);

    // const handleUpload = (event) => {
    //     const file = event.target.files[0];
    //     const storageRef = ref(storage, `/recipesImg/${file.name}`);
    //     uploadBytes(storageRef, file)
    //         .then(snapshot => {
    //             console.log(snapshot)
    //         })
    // const task = storageRef.put(file);

    // task.on('state_changed', snapshot => {
    //     let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //     setUploadValue(percentage);
    // }, error => {
    //     console.log(error.message)
    // }, () => {
    //     setUploadValue(100);
    //     setPicture(task.snapshot.downloadURL)
    // });
    // }
    return (
        <div>
            <progress value={uploadValue} max='100'></progress>
            <br />
            <input type='file' />
            <br />
            {/* <img width='400' src={ } alt='not Found' /> */}
        </div>
    );
}

export default UploadImage;