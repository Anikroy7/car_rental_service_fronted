import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useCreateCarMutation } from "../../redux/api/carApi";
import { imageUpload } from "../../utils/imageUpload";
import { useNavigate } from "react-router-dom";

const toolbarOptions = [
    [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
    ['link', 'image', 'video'],
    ['clean']
];

export default function AddCarForm() {
    const [feature, setFeature] = useState('')
    const [allFeatures, setAllFeatures] = useState([]);
    const imageTypeRegex = /image\/(png|jpg|jpeg)/gm;
    let [createCar, { isLoading, data, isSuccess }] = useCreateCarMutation();
    const [disable, setDisable] = useState(false)
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        setError,
        control,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: 'car 1',
            // description: 'this si descripotn',
            pricePerHour: 250,
            color: 'red'
        }
    })


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
            setError('images', {
                type: "required",
                message: ''
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
        e.preventDefault();
        if (feature) {
            setAllFeatures([...allFeatures, feature]);
            setFeature('');
            setError('features', {
                type: "required",
                message: ''
            })
        } else {
            alert('Please enter a feature');
        }
    };
    useEffect(() => {
        if (data?.success) {
            navigate('/admin/dashboard/manage/cars/all')
        }
    }, [isSuccess])
    const removeFromFeatures = (item) => {
        setAllFeatures([...allFeatures.filter(f => f !== item)])
    }
    const removeImage = (image, index) => {
        const newImageFiles = imageFiles.filter((f, i) => i !== index)
        setImageFiles([...newImageFiles])
        // console.log(newImageFiles)
        setImages([...images.filter(i => i !== image)])
    }
    const onSubmit = async (data) => {
        setDisable(true)
        if (imageFiles?.length) {
            const imagesArray = await imageUpload(imageFiles);
            const carData = { ...data, features: allFeatures, images: imagesArray, pricePerHour: parseInt(data.pricePerHour), isElectric: data.isElectric === 'yes' };
            createCar(carData)
        }
        setDisable(false)

    }

    return (
        <div className="bg-gray-100 mx-auto  py-20 px-12 lg:px-24 shadow-xl mb-24">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">

                    <div className="-mx-3 md:flex">
                        <div className="md:w-full px-3">
                            <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="application-link">
                                Car name
                            </label>
                            <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="application-link" type="text" placeholder="Type color name"
                                {...register("name", { required: true, maxLength: 50 })} />
                            <div className="text-red-500">
                                {errors.name && errors.name.type === "required" && (
                                    <span>Name is required</span>
                                )}
                                {errors.name && errors.name.type === "maxLength" && (
                                    <span>Max length exceeded</span>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="my-3">
                        <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="location">
                            Description*
                        </label>
                        <Controller
                            name="description"
                            control={control}
                            defaultValue=""
                            rules={{ required: 'Description is required' }}  // Validation rule
                            render={({ field }) => (
                                <ReactQuill
                                    {...field}
                                    theme="snow"
                                    modules={{ toolbar: toolbarOptions }}
                                />
                            )}
                        />
                        {/* <div style={{ marginTop: '20px' }}>
                            <strong>Output:</strong>
                            <div dangerouslySetInnerHTML={{ __html: value }} />
                        </div> */}
                        <div className="text-red-500">
                            {errors.description && (
                                <div className="text-red-500">
                                    <span>{errors.description.message}</span>
                                </div>
                            )}

                        </div>
                    </div>
                    <div className="-mx-3 md:flex mb-2">
                        {/* Is Electric Field */}
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="isElectric">
                                Is Electric
                            </label>
                            <div>
                                <select
                                    {...register('isElectric')}
                                    className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded"
                                    id="isElectric"
                                >
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                        </div>
                        <div className="md:w-1/2 px-3">
                            <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="job-type">
                                Price Per hour*
                            </label>
                            <div>
                                <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="application-link" type="number" placeholder="Type price/h"  {...register("pricePerHour", { required: true, minLength: 2 })} />
                                <div className="text-red-500">
                                    {errors.pricePerHour && errors.pricePerHour.type === "required" && (
                                        <span>Price is required</span>
                                    )}
                                    {errors.pricePerHour && errors.pricePerHour.type === "minLength" && (
                                        <span>Price should be al least two number</span>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2 px-3">
                            <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="department">
                                Color*
                            </label>
                            <div>
                                <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="application-link" type="text" placeholder="valid color name or color values"    {...register("color", { required: true })} />
                                <div className="text-red-500">
                                    {errors.color && errors.color.type === "required" && (
                                        <span>Color is required</span>
                                    )}

                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="application-link">
                            Add features
                        </label>
                        <div className="flex items-center space-x-2">
                            {/* Input field */}
                            <Controller
                                name="features"
                                control={control}
                                rules={{ required: allFeatures.length === 0 ? "At least one feature should be added." : false }}
                                render={({ field }) => (
                                    <input
                                        {...field}
                                        value={feature}
                                        onChange={(e) => setFeature(e.target.value)}
                                        type="text"
                                        placeholder="Type here"
                                        className={`input input-bordered input-sm flex-grow bg-gray-200 text-black border border-gray-200`}
                                    />
                                )}
                            />

                            {/* Add button with Plus icon */}
                            <button onClick={(e) => addToFeatures(e)} className="btn btn-sm bg-green-500 hover:bg-green-600 text-white mb-4 flex items-center">
                                <FaPlus className="mr-1" />
                                Add
                            </button>
                        </div>
                        <div className="text-red-500">
                            <div className="text-red-500">
                                {errors.features && (
                                    <span>{errors.features.message}</span>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        {
                            allFeatures?.map(f => <div key={f} className="badge  gap-2 mr-3 p-3">
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
                        <Controller
                            name="images"
                            control={control}
                            rules={{ required: imageFiles.length === 0 ? "At least one image should be added." : false }}
                            render={(field) => (
                                <input
                                    {...field}
                                    className="file-input file-input-bordered w-full"
                                    type="file"
                                    id="file"
                                    onChange={(e) => changeHandler(e)}
                                    accept="image/png, image/jpg, image/jpeg"
                                    multiple
                                    style={{ color: 'transparent' }}
                                />
                            )}
                        />
                        <div className="text-red-500">
                            <div className="text-red-500">
                                {errors.images && (
                                    <span>{errors.images.message}</span>
                                )}
                            </div>
                        </div>
                    </p>

                    {/* Display the count of files dynamically */}
                    {imageFiles.length > 0 && <p className="my-2">{imageFiles.length} file{imageFiles.length > 1 && '(s)'} uploaded</p>}

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
                        <div className="px-3 w-full text-center">
                            <input disabled={disable} value={isLoading ? 'Loading...' : 'ADD'} type="submit" className=" w-[8rem] bg-gray-900 text-white font-bold py-2 px-4 border-gray-500 hover:border-gray-100 rounded-full cursor-pointer" />

                        </div>
                    </div>
                </div>
            </form >
        </div >
    );
}
