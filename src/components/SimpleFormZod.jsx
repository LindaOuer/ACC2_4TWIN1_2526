import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const userSchema = z.object({
    name: z
        .string()
        .min(3, "Name must be at least 3 characters long")
        .max(20, "Name must be less than 20 characters long"),
    age: z
        .number({ invalid_type_error: "Age must be a number" })
        .positive("Age must be a positive number")
        .min(18, "Age must be at least 18")
        .max(99, "Age must be less than 99"),
});

const SimpleFormZod = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(userSchema),
        defaultValues: {
            name: "",
            age: 0,
        },
    });

    return (
        <form
            onSubmit={handleSubmit((data) => console.log(data))}
            className="mt-5"
        >
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" {...register("name")} />
            {errors.name && (
                <p style={{ color: "red" }}>{errors.name.message}</p>
            )}
            <label htmlFor="age">Age:</label>
            <input
                type="number"
                id="age"
                {...register("age", { valueAsNumber: true })}
            />
            {errors.age && <p style={{ color: "red" }}>{errors.age.message}</p>}
            <button type="submit">Submit</button>
        </form>
    );
};

export default SimpleFormZod;
