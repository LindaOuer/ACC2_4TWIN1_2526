import { useState } from "react";

const SimpleForm = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const temperrors = {};
        if (name.length < 3) {
            temperrors.name = "Name must be at least 3 characters long";
        }
        if (age < 0) {
            temperrors.age = "Age must be a positive number";
        }
        if (Object.keys(temperrors).length > 0) {
            console.log("Errors:", temperrors);
            setErrors(temperrors);
        } else {
            console.log("Form submitted successfully");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
                <label htmlFor="age">Age:</label>
                <input
                    type="number"
                    id="age"
                    name="age"
                    value={age}
                    onChange={(e) => setAge(Number(e.target.value))}
                />
                {errors.age && <p style={{ color: "red" }}>{errors.age}</p>}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default SimpleForm;
