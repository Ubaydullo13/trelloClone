import TrashIcon from "../icons/TrashIcon";
import { Task } from "../types"

interface Props {
  task: Task;

}

function TaskCard({task}: Props) {
  return (
    <div className="bg-mainBackgroundColor h-24 min-h24 p-2.5 flex items-center  text-left rounded-xl hover:ring-2 hover:ring-inset hover:ring-rose-400
        cursor-grab relative">{task.content}
        <button className="stroke-white absolute right-4 top-1/2 -translate-y-1/2 bg-columnBackgroundColor p-2 rounded">
          <TrashIcon/>
        </button>
        </div>
  )
}

export default TaskCard