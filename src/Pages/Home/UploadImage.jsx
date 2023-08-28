import { useRef } from 'react';
import { toast } from 'react-hot-toast';
const UploadImage = ({ setImage }) => {
    const imageRef = useRef()

    const uploadPhoto = (e) => {
        e.preventDefault()        
        const image = imageRef.current.files[0]       
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_UPLOAD_TOKEN}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json()).then(imageData => {
                const upload = { image: imageData.data.display_url }
                setImage(upload)
            })
            .catch(error => {
                toast.error(error.message, {
                    position: 'top-right',
                    style: { backgroundColor: 'blue', color: 'white' }
                })
            })
    }

    return (
        <div className='w-full'>           
            <input ref={imageRef} name='image' type="file"/>
            <button onClick={uploadPhoto} className='thin-button mt-3 cursor-pointer'>Upload Image</button>
        </div>
    );
};

export default UploadImage;