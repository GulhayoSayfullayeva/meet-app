

const  Event = ({event}) => {

    return (
        <li className="event">
            <h2 className="title">{event.summary}</h2>
            <p className="created">{event.created}</p>
            <p className="location">{event.location}</p>

        </li>
    )
}

export default Event;