import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Button } from "../ui/button";
import { useState } from "react";


const TodoFilter = () => {
    const [position, setPosition] = useState("bottom")
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className="bg-primary-gradient text-xl font-semibold">Filter</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-white p-2 border">
                <DropdownMenuLabel>Filter by Priority</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                    <DropdownMenuRadioItem value="high">High</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="medium">Medium</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="low">Low</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default TodoFilter;