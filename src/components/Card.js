import React, {useState} from "react";


const Card = ({name, email, id}) => {
    const [title, setTitle] = useState(name);
    
    const clickHandler = () => {
        setTitle("You Fucked Up!");
        console.log("clicked!!");

    };

    return (
        
        <div className = 'bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
            <img alt = 'robots' src={`https://robohash.org/${id}?200x200`} />
            <h2>{name}</h2>
            <p>{email} </p>

            <button onClick={clickHandler}>Change Name</button>
        </div>
    );
}

export default Card;