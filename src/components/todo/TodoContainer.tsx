import { useAppSelector } from "@/redux/hook";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";

const TodoContainer = () => {

    //from local state
    // const { todos } = useAppSelector((state) => state.todos)

    // * from server

    const { data: todos, isError, isLoading } = useGetTodosQuery(undefined)
    if (isLoading) {
        return <p>Loading....</p>
    }
    return (
        <div>
            <div className="flex justify-between mb-5 ">

                <AddTodoModal />
                <TodoFilter />
            </div>

            <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px]">
                {/* <div className="bg-white text-xl font-bold p-4 flex justify-center items-center rounded-md">
                    <p>There is no task pending</p>
                </div> */}
                <div className="bg-white p-5 w-full rounded-lg space-y-3">
                    {todos.map(item => (<TodoCard {...item} />))}
                </div>
            </div>

        </div>
    );
};

export default TodoContainer;