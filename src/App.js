import "./App.css";
import { useState } from "react";
import Title from "./components/Title";
import Modal from "./components/Modal";
import EventList from "./components/EventList";
import NewEventForm from "./components/NewEventForm";

function App() {
    const [showModal, setShowModal] = useState(false);
    const [showContent, setShowContent] = useState(true);
    const [events, setEvents] = useState([]);

    const newEvent = (event) => {
        setEvents((prev) => {
            return [...prev, event];
        });
        setShowModal(false)
    };

    const handleDelete = (id) => {
        setEvents((prev) => {
            return prev.filter((event) => {
                return event.id !== id;
            });
        });
    };

    //toggle modal function

    let title = "Kingdom 🔆 Events";
    let subtitle = "All events will be here :)";

    return (
        <div className='App'>
            <Title title={title} subtitle={subtitle} />
            <br />

            {showContent && (
                <button onClick={() => setShowContent(false)}>
                    Hide content
                </button>
            )}
            {!showContent && (
                <button onClick={() => setShowContent(true)}>
                    Show content
                </button>
            )}
            {showContent && (
                <EventList events={events} handleDelete={handleDelete} />
            )}
            {showModal && (
                <Modal>
                    <NewEventForm newEvent={newEvent} />
                </Modal>
            )}
            <br />
            <br />
            <button
                onClick={() => {
                    setShowModal(true);
                }}>
                New Event
            </button>
        </div>
    );
}

export default App;
