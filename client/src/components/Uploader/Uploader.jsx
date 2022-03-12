import React, { useState } from "react";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../services/firebaseConfig";
import styled from "styled-components";
import noImg from "../../images/noImg.png";

const ImagenBox = styled.div`
    display: flex;  
    flex-direction: column;
    width: 90%;  
    height: 40%;
    align-items: center;
    justify-content: space-between;
`;
const Image = styled.img`
    width: 80%;   
    max-height: 120px;
    border-radius: 10px;
`;

// 'file' comes from the Blob or File API



const Uploader = ({ getUrl }) => {
    const [img, setImg] = useState(noImg);

    const onHandleFile = (e) => {
        const file = e.target.files[0];
        // Create a child reference
        const imagesRef = ref(storage, `recipesImg/${file.name}`);
        // imagesRef now points to 'images'
        console.log(file)
        uploadBytes(imagesRef, file).then((snapshot) => {
            let percentage = (snapshot.metadata.ref)
            console.log(percentage)
        });

        getDownloadURL(imagesRef)
            .then((url) => {
                // `url` is the download URL for 'images/stars.jpg'
                setImg(url);
                getUrl(url, e);
            })
            .catch((error) => {
                // Handle any errors
                console.log('pinche error' + error)
            });
    };
    return (
        <ImagenBox>
            <Image src={img} />
            <input name='image' type='file' onChange={onHandleFile} />
        </ImagenBox>

    );
}

export default Uploader;