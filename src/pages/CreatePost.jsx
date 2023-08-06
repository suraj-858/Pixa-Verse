import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { preview } from '../assets'
import { getRandomPrompt } from '../utils'
import { FormField } from '../components'
import axios from 'axios'
import { imageUrls } from '../App'
import './style.css'
import Footer from '../components/Footer'

const CreatePost = ({}) => {

    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: '',
        prompt: '',
        photo: ''
    });
    const [generatingImg, setGeneratingImg] = useState(false);
    const [loading, setLoading] = useState(false);
    const [photoArray, setPhotoArray] = useState([])
    const [selectedImage, setSelectedImage] = useState(undefined)

    const filteredPhotoArray = photoArray.slice(0, 20)

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (form.prompt && form.prompt) {
            setLoading(true);

            try {

                await axios.post('http://localhost:8080/api/v1/post', form)
                    .then((response) => {
                        console.log(response)
                    })
                navigate('/')
            } catch (error) {
                alert(error)
            } finally {
                setLoading(false);
            }
        } else {
            alert("Please enter a prompt and generate an image");
        }
    }


    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSurpriseMe = () => {
        const randomPrompt = getRandomPrompt(form.prompt);
        setForm({ ...form, prompt: randomPrompt });

    }
    const generateImage = async () => {
        if (form.prompt) {
            try {
                setGeneratingImg(true);

                await axios.get(`https://lexica.art/api/v1/search?q=${form.prompt}`)
                    .then((response) => {
                        console.log();
                        setPhotoArray(response?.data?.images)
                    })


            } catch (error) {
                alert(error);
                console.log(error);
            }
            finally {
                setGeneratingImg(false);
            }
        } else {
            alert('Please enter a prompt')
        }

    }
const [skeletonLoading ,setSkeletonLoading] = useState([])


    useEffect(() =>{
        const skeletonArray = [];
        for (let index = 0; index < 20; index++) {
            skeletonArray.push({value: index})
            
        }
        setSkeletonLoading(skeletonArray);

        
    }, [])




    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(imageUrls[0]);

    useEffect(() =>{

        var a = 0;
        const interval = setInterval(() => {
            a++;
                if(photoArray.length > 0 || !photoArray === undefined){

                    if(a <= photoArray.length)
                    setCurrentPhotoIndex(photoArray[a-1].src);
                    if( a >= photoArray.length){
                        a = 0;
                    }
                }
                else {
                    if(a <= imageUrls.length ){
                        setCurrentPhotoIndex(imageUrls[a])
                        if(a >= imageUrls.length){
                            a = 0;
                        }

                    }

                }


        }, 7000);

        return () =>{
            clearInterval(interval);
        }
    },[photoArray])


    return (
        <div>
        <div className=" imense relative h-[400px] bg-cover bg-center bg-no-repeat " style={{backgroundImage: `url(${currentPhotoIndex})`, transition: '3s ease-in'}}>
        <div className="h-full w-full flex justify-center flex-col items-center absolute">
        <h1 className='font-extrabold text-[66px] text-gradient'>Create</h1>
        <div className="css-typing">
            <p className='child3 text-white'>Imaginative and visually stunning images through DALL-E AI</p>
        </div>
        </div>
        </div>
            
            <form className="mt-16 w-full flex flex-col justify-center items-center" onSubmit={handleSubmit}>
                <div className='flex w-5/6 justify-center align-center flex-col gap-5'>
                    <FormField LabelName="Your name"
                        type="text"
                        name="name"
                        placeholder="john Doe"
                        value={form.name}
                        handleChange={handleChange}
                    />

                    <FormField LabelName="prompt"
                        type="text"
                        name="prompt"
                        placeholder="a painting of a fox in the style of Starry Night"
                        value={form.prompt}
                        handleChange={handleChange}
                        isSurpriseMe
                        handleSurpriseMe={handleSurpriseMe}
                    />

                    <div className=' flex gap-5 justify-center'>
                        <button
                            type='button'
                            onClick={generateImage}
                            className='text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto
                            px-5 py-2.5 text-center'>
                            {generatingImg ? "Generating..." : 'Generate'}
                        </button>

                        <button
                            type='submit'
                            className=' text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'
                        >{loading ? 'Sharing...' : 'Share with me'}</button>
                    </div>

                    <div className="w-full flex justify-center flex-col items-center text-3xl xs:text-xl">
                        <p className='mt-2 flex justify-start items-center text-[#666e75] leading-4 text-[14px]'>Once you have created the image you want, you can share it with others in the community</p>

                        <h2 className='text-white text-3xl font-bold mt-3'>Results</h2>
                        <hr className='w-[100%] border-none h-[1px] my-3 bg-white' />
                    </div>
                </div>

                <div className="w-full max-w-full p-5 pb-10 mx-10 xs:columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-1">
                    {filteredPhotoArray.map((photo) => {
                        return (
                            <div key={photo?.id} className={`relative bg-gray-50 border-blue-800 my-[3px] text-gray-900 text-sm rounded-lg hover:scale-95 cursor-pointer transition ease-in-out ${selectedImage?.id === photo.id ? "p-[1px] border-[4px] scale-95 " : ""} `} >
                                <div className="flex justify-center items-center">
                                    {photo ? (
                                        <img
                                            src={photo?.src}
                                            alt={form.prompt}
                                            className="w-auto h-auto  rounded-lg"
                                            loading='lazy'
                                            onClick={() => {
                                                setSelectedImage(photo)
                                                setForm({...form, photo: photo?.src})
                                            }}
                                        />
                                    ) : (
                                        <img
                                            src={preview}
                                            alt="preview"
                                            className="w-9/12 h-9/12 bg-slate-900 object-contain opacity-40"
                                        />
                                    )}

                                    {generatingImg && (
                                        <div className="absolute inset-0 z-10 flex justify-center items-center bg-[rgba(0, 0, 0, 0.5)] rounded-lg">
                                           <div className={`relative h-full w-full space-y-3 overflow-hidden rounded-md bg-neutral-400 p-3 shadow 
                                                before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1s_infinite] before:bg-gradient-to-r before:from-transparent
                                                 before:via-white/20 hover:shadow-lg`} ></div> 
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}


                </div>
            </form>

            {generatingImg && (
            <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-2 m-5">
                {skeletonLoading.map((skeleton) =>{
                    return(
                    <div key={skeleton.value} className="relative h-[550px] w-auto space-y-3 overflow-hidden rounded-md bg-neutral-400 p-3 shadow 
                    before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1s_infinite] before:bg-gradient-to-r before:from-transparent
                     before:via-white/20 hover:shadow-lg"></div>
    )
                })}
                 
            </div>
            
           )}

           <Footer/>

        </div>
    )
}

export default CreatePost