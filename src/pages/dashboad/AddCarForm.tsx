import { useState } from "react";
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
    return (
        <div className="bg-gray-100 mx-auto  py-20 px-12 lg:px-24 shadow-xl mb-24">
            <form className="w-full">
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">

                    <div className="-mx-3 md:flex">
                        <div className="md:w-full px-3">
                            <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="application-link">
                                Car title
                            </label>
                            <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="application-link" type="text" placeholder="" />
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
                                <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="application-link" type="number" placeholder="" />
                            </div>
                        </div>
                        <div className="md:w-1/2 px-3">
                            <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="department">
                                Color*
                            </label>
                            <div>
                                <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="application-link" type="text" placeholder="" />
                            </div>
                        </div>
                    </div>
                    <div className="-mx-3 md:flex">
                        <div className="md:w-full px-3">
                            <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="application-link">
                                Images* ( you can upload mutiple images )
                            </label>
                            <input type="file" className="file-input file-input-bordered w-full " />

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
                                className="input input-bordered input-sm flex-grow"
                                required
                                value={feature}
                            />

                            {/* Add button with Plus icon */}
                            <button onClick={(e) => addToFeatures(e)} className="btn btn-sm bg-green-500 hover:bg-green-600 text-white mb-4 flex items-center">
                                <FaPlus className="mr-1" />
                                Add
                            </button>
                        </div>
                    </div>
                    <div className="my-3">
                        {
                            allFeatures?.map(f => <div className="badge badge-info gap-2 mr-3 p-3">
                                <svg
                                    onClick={() => removeFromFeatures(f)}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="inline-block h-4 w-4 stroke-current">
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
                    <div className="-mx-3 md:flex mt-2">
                        <div className="md:w-full px-3">
                            <button className="md:w-full bg-gray-900 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full">
                                Button
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
