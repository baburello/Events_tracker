import "./NewEventForm.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const NewEventForm = ({ newEvent }) => {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [location, setLocation] = useState("fergana");
    console.log("location:", location);

    const resetInputs = () => {
        setTitle("");
        setDate("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const event = {
            title: title,
            date: date,
            id: uuidv4(),
            location: location,
        };

        newEvent(event);

        resetInputs();
    };

    return (
        <form className='new-event-form' onSubmit={handleSubmit}>
            <label>
                <span>Event Title:</span>
                <input
                    type='text'
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
            </label>
            <label>
                <span>Event Date:</span>
                <input
                    type='date'
                    onChange={(e) => setDate(e.target.value)}
                    value={date}
                />
            </label>
            <label>
                <span>Event location:</span>
                <select
                    name=''
                    id=''
                    onChange={(e) => setLocation(e.target.value)}>
                    <option value='fergana'>Farg'ona</option>
                    <option value='tashkent'>Tashkent</option>
                    <option value='london'>London</option>
                </select>
            </label>
            <button>Submit</button>
        </form>
    );
};

export default NewEventForm;
