import React, {useState} from "react";

function CreateArea(props) {

    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    function handleChange(event) {
        const [name, value] = event.target;
        
        setNote(prevNote => {
            return {
                ...prevNote, //...prevNote is the Spread Operator
                [name]: value
            };
        });
    }

    function submitNote(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    return (
        <div>
          <form>
            <input name="title" value = {note.title} placeholder="Title" />
            <textarea name="content" placeholder="Take a note..." rows="3" />
            <button>Add</button>
          </form>
        </div>
      );
}
