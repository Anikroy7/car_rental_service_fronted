import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const toolbarOptions = [
    [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
    ['link', 'image', 'video'],
    ['clean']
];

export default function AddCarForm() {
    const [value, setValue] = useState('');
    const [feature, setFeature] = useState('')
    const [allFeatures, setAllFeatures] = useState([]);
    const imageTypeRegex = /image\/(png|jpg|jpeg)/gm;


    const [imageFiles, setImageFiles] = useState([]);
    const [images, setImages] = useState([]);

    const changeHandler = (e) => {
        e.preventDefault()
        const { files } = e.target;
        const validImageFiles = [];
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            if (file.type.match(imageTypeRegex)) {
                validImageFiles.push(file);
            }
        }
        if (validImageFiles.length) {
            setImageFiles(validImageFiles);
            return;
        }
        alert("Selected images are not of valid type!");
    };
    useEffect(() => {
        const images = [], fileReaders = [];
        let isCancel = false;
        if (imageFiles.length) {
            imageFiles.forEach((file) => {
                const fileReader = new FileReader();
                fileReaders.push(fileReader);
                fileReader.onload = (e) => {
                    const { result } = e.target;
                    if (result) {
                        images.push(result)
                    }
                    if (images.length === imageFiles.length && !isCancel) {
                        setImages(images);
                    }
                }
                fileReader.readAsDataURL(file);
            })
        };
        return () => {
            isCancel = true;
            fileReaders.forEach(fileReader => {
                if (fileReader.readyState === 1) {
                    fileReader.abort()
                }
            })
        }
    }, [imageFiles]);

    const addToFeatures = (e) => {
        e.preventDefault()
        if (feature) {
            if (allFeatures.length < 1) {
                setAllFeatures([feature]);
            } else {
                setAllFeatures([...allFeatures, feature]);
            }
        } else {
            alert('please enter feature name')
        }
        setFeature('')

    }
    const removeFromFeatures = (item) => {
        setAllFeatures([...allFeatures.filter(f => f !== item)])
    }
    const removeImage = (image, index) => {
        const newImageFiles = imageFiles.filter((f, i) => i !== index)
        setImageFiles([...newImageFiles])
        // console.log(newImageFiles)
        setImages([...images.filter(i => i !== image)])
    }
    return (
        <div className="bg-gray-100 mx-auto  py-20 px-12 lg:px-24 shadow-xl mb-24">
            <form className="w-full">
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">

                    <div className="-mx-3 md:flex">
                        <div className="md:w-full px-3">
                            <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="application-link">
                                Car title
                            </label>
                            <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="application-link" type="text" placeholder="Type color title" />
                        </div>
                    </div>
                    <div className="my-3">
                        <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="location">
                            Description*
                        </label>
                        <ReactQuill
                            value={value}
                            onChange={setValue}
                            modules={{ toolbar: toolbarOptions }}
                        />
                        {/* <div style={{ marginTop: '20px' }}>
                            <strong>Output:</strong>
                            <div dangerouslySetInnerHTML={{ __html: value }} />
                        </div> */}
                    </div>
                    <div className="-mx-3 md:flex mb-2">
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="location">
                                Is Electrict
                            </label>
                            <div>
                                <select className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" id="location">
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                            </div>
                        </div>
                        <div className="md:w-1/2 px-3">
                            <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="job-type">
                                Price Per hour*
                            </label>
                            <div>
                                <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="application-link" type="number" placeholder="Type price/h" />
                            </div>
                        </div>
                        <div className="md:w-1/2 px-3">
                            <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="department">
                                Color*
                            </label>
                            <div>
                                <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="application-link" type="text" placeholder="valid color name or color values" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="application-link">
                            Add features
                        </label>
                        <div className="flex items-center space-x-2">
                            {/* Input field */}
                            <input
                                onChange={(e) => setFeature(e.target.value)}
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered input-sm flex-grow bg-gray-200 text-black border border-gray-200"
                                value={feature}
                            />

                            {/* Add button with Plus icon */}
                            <button onClick={(e) => addToFeatures(e)} className="btn btn-sm bg-green-500 hover:bg-green-600 text-white mb-4 flex items-center">
                                <FaPlus className="mr-1" />
                                Add
                            </button>
                        </div>
                    </div>
                    <div className="mb-3">
                        {
                            allFeatures?.map(f => <div className="badge  gap-2 mr-3 p-3">
                                <svg
                                    onClick={() => removeFromFeatures(f)}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="inline-block h-4 w-4 stroke-current cursor-pointer">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                                {f}
                            </div>)
                        }
                    </div>
                    <p>
                        <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="application-link">
                            Images* ( you can upload mutiple images )
                        </label>
                        <input
                            className="file-input file-input-bordered w-full"
                            type="file"
                            id="file"
                            onChange={(e) => changeHandler(e)}
                            accept="image/png, image/jpg, image/jpeg"
                            multiple
                            style={{ color: 'transparent' }}
                        />
                    </p>

                    {/* Display the count of files dynamically */}
                    {imageFiles.length > 0 && <p className="my-2">{imageFiles.length} file{ imageFiles.length>1&&'(s)'} uploaded</p>}

                    {
                        images.length > 0 ?
                            <div className="flex gap-3 flex-wrap">                                {
                                images.map((image, index) => {
                                    return <div className="relative w-24 group">
                                        <div className="avatar">
                                            <div className="w-24 rounded">
                                                <img
                                                    src={image}
                                                    alt="avatar"
                                                />
                                            </div>
                                        </div>

                                        {/* Cross button - hidden initially, visible on hover */}
                                        <button type="button" onClick={() => removeImage(image, index)} className="absolute top-1 right-1 text-white bg-gray-800 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <AiOutlineClose className="w-5 h-5" />
                                        </button>
                                    </div>
                                })
                            }
                            </div> : null
                    }
                    <div className="-mx-3 md:flex mt-2">
                        <div className="md:w-full px-3">
                            <button className="md:w-full bg-gray-900 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full">
                                Button
                            </button>
                        </div>
                    </div>
                </div>
            </form >
        </div >
    );
}
