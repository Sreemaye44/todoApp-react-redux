import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "../ui/button";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Input } from "../ui/input";
import { FormEvent, useState } from "react";
import { DialogClose } from "@radix-ui/react-dialog";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { addTodo } from "@/redux/features/todoSlice";
import { useAddTodoMutation } from "@/redux/api/api";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@radix-ui/react-select";
const AddTodoModal = () => {

    const [task, setTask] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('');
    //!for local state management
    // const dispatch = useAppDispatch();

    //for server
    //[actual function for post, {data, isLoading, isError,...}]
    const [addTodo, { isLoading, isError, isSuccess }] = useAddTodoMutation();

    const state = useAppSelector((state) => state.todos)

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        // const randomString = Math.random().toString(36).substring(2, 7);
        const taskDetails = {
            // id: randomString,
            title: task,
            description,
            priority
        }
        // dispatch(addTodo(taskDetails))

        //*for server

        addTodo(taskDetails);
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-primary-gradient text-xl font-semibold">Add todo</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={onSubmit}>
                    <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>
                            Add your tasks that you want to finish.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="task" className="text-right">
                                Task
                            </Label>
                            <Input onBlur={(e) => setTask(e.target.value)} id="task" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="description" className="text-right">
                                Description
                            </Label>
                            <Input onBlur={(e) => setDescription(e.target.value)} id="description" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label className="text-right">
                                Priority
                            </Label>
                            <Select onValueChange={(value) => setPriority(value)}>
                                <SelectTrigger className="col-span-3">
                                    <SelectValue placeholder="Priority" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Priority</SelectLabel>
                                        <SelectItem value="high">High</SelectItem>
                                        <SelectItem value="medium">Medium</SelectItem>
                                        <SelectItem value="high">High</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                        </div>
                    </div>
                    <div className="flex justify-end" >
                        <DialogClose>
                            <Button type="submit">Save changes</Button>
                        </DialogClose>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default AddTodoModal;