import React, { useState } from 'react'

const Form = () => {
    const [formData, setFormData] = useState({
        firstName : "",
        lastName : "",
        emailId : "",
        country : "",
        streetAddress : "",
        city : "",
        state : "",
        zipCode : "",
        byEmailComments : false,
        byEmailcandidates : false,
        byEmailOffers: false,
        pushNotifications : "",
    });
    console.log(formData);
    const submitHandler = (event) => {
        event.preventDefault();
        console.log("Form Data: ", formData);
    }
    const changeHandler = (event) => {
        console.log(event.target.type, ' ', event.target.checked)
        setFormData(prevState => {
            return {
                ...prevState, 
                [event.target.name] : event.target.type == 'checkbox' ? event.target.checked : event.target.value,
            }
        })
    }
    return (
        <div className='form-container w-4/6 p-4 bg-white shadow-xl shadow-gray-400'>
            <form className='flex flex-col gap-3' onSubmit={submitHandler}>
                <div className='flex flex-col'>
                    <label className='font-bold text-lg' htmlFor="firstName">First name</label>
                    <input className='border-2 text-gray-500 rounded-sm p-1' onChange={changeHandler} id='firstName' type="text" placeholder='Parth' value={formData.firstName} name='firstName'/>
                </div>
                <div className='flex flex-col'>
                    <label className='font-bold text-lg' htmlFor="lastName">Last name</label>
                    <input className='border-2 text-gray-500 rounded-sm p-1' onChange={changeHandler} id='lastName' type="text" placeholder='Magar' value={formData.lastName} name='lastName'/>
                </div>
                <div className='flex flex-col'>
                    <label className='font-bold text-lg' htmlFor="emailId">Email address</label>
                    <input className='border-2 text-gray-500 rounded-sm p-1' onChange={changeHandler} id='emailId' type="email" placeholder='parthmagar789@gmail.com' value={formData.emailId} name='emailId'/>
                </div>
                <div className='flex flex-col'>
                    <label className='font-bold text-lg' htmlFor="country">Country</label>
                    <select className='border-2 text-gray-500 rounded-sm p-1' id='country' onChange={changeHandler} name="country" value={formData.country} required>
                        <option value="">Select Country</option>
                        <option value="India">India</option>
                        <option value="America">America</option>
                        <option value="Australia">Australia</option>
                        <option value="England">England</option>
                    </select>
                </div>
                <div className='flex flex-col'>
                    <label className='font-bold text-lg' htmlFor="streetAddress">Street address</label>
                    <input className='border-2 text-gray-500 rounded-sm p-1' onChange={changeHandler} id='streetAddress' type="text" placeholder='1234 Silver Akshay' value={formData.streetAddress} name='streetAddress'/>
                </div>
                <div className='flex flex-col'>
                    <label className='font-bold text-lg' htmlFor="city">City</label>
                    <input className='border-2 text-gray-500 rounded-sm p-1' onChange={changeHandler} id='city' type="text" placeholder='Pune' value={formData.city} name='city'/>
                </div>
                <div className='flex flex-col'>
                    <label className='font-bold text-lg' htmlFor="state">State / Province</label>
                    <input className='border-2 text-gray-500 rounded-sm p-1' onChange={changeHandler} id='state' type="text" placeholder='Maharashtra' value={formData.state} name='state'/>
                </div>
                <div className='flex flex-col'>
                    <label className='font-bold text-lg' htmlFor="zipCode">ZIP / Postal Code</label>
                    <input className='border-2 text-gray-500 rounded-sm p-1' onChange={changeHandler} id='zipCode' type="text" placeholder='443201' value={formData.zipCode} name='zipCode'/>
                </div>
                <fieldset>
                    <legend className='font-bold text-lg'>By Email</legend>
                    <div>
                        <div>
                            <input onChange={changeHandler} type="checkbox" name="byEmailComments" id="byEmailComments" checked={formData.byEmailComments}/>
                            <label className='font-bold' htmlFor="byEmailComments">Comments</label>
                        </div>
                        <p>Get notified when someones posts a comment on a posting.</p>
                    </div>
                    <div>
                        <div>
                            <input onChange={changeHandler} type="checkbox" name="byEmailcandidates" id="byEmailcandidates" checked={formData.byEmailcandidates}/>
                            <label className='font-bold' htmlFor="byEmailcandidates">Candidates</label>
                        </div>
                        <p>Get notified when candidate applied for a job.</p>
                    </div>
                    <div>
                        <div>
                            <input onChange={changeHandler} type="checkbox" name="byEmailOffers" id="byEmailOffers" checked={formData.byEmailOffers}/>
                            <label className='font-bold' htmlFor="byEmailOffers">Offers</label>
                        </div>
                        <p>Get notified when candidate accepts or rejects an offer.</p>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>
                        <p>Push Notifications</p>
                        <p>These are delivered via SMS to your mobile phone.</p>
                    </legend>
                    <div>
                        <input onChange={changeHandler} type="radio" name="pushNotifications" id="everything" value="Everything" checked={formData.pushNotifications == 'Everything'}/>
                        <label className='font-bold' htmlFor="everything">Everything</label>
                    </div>
                    <div>
                        <input onChange={changeHandler} type="radio" name="pushNotifications" id="sameAsEmail" value="Same as email" checked={formData.pushNotifications == 'Same as email'}/>
                        <label className='font-bold' htmlFor="sameAsEmail">Same as email</label>
                    </div>
                    <div>
                        <input onChange={changeHandler} type="radio" name="pushNotifications" id="noPushNotificatinos" value="No push notifications" />
                        <label className='font-bold' htmlFor="noPushNotificatinos">No push notifications</label>
                    </div>
                    <button>Save</button>
                </fieldset>
            </form>
        </div>
    )
}

export default Form