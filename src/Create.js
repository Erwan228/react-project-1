import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <label>Blog author:</label>
                <select>
                    <option value="Music">Music</option>
                    <option value="Melinda">Melinda</option>
                </select>
                <button>Add blog</button>
                <p>{title}</p>
                <p>{body}</p>
            </form>
        </div>
    );
}

export default Create;