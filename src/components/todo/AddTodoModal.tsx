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
const AddTodoModal = () => {

    const [task, setTask] = useState('');
    const [description, setDescription] = useState('');

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log({ task, description })
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