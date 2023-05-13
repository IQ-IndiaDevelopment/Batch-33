import Buttons from './Buttons';
const ListElem = ({ listVal }) => {
    return (
        <div className='mt-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2'>
            {listVal?.map((item) => {
                console.log(item);
                return (
                    <div className='m-7 p-2 rounded-sm border border-black w-45'>
                        <h2>Task Name: {item?.Name}</h2>
                        <p className='mt-3'>Status: {item?.Status ? "Completed" : "Not Completed"}</p>
                        {/* {item?.Status? <span className='bg-green-500 p-1 pr-1 rounded-md'>Completed</span>:<span className='bg-red-500 p-1 pr-1 rounded-md'>Not Completed</span>} */}
                        <Buttons btnName="Delete Task" btnstyle="m-2 bg-red-500 p-1 rounded-md focus:scale-90" val={item?.Id} />
                        <Buttons btnName="Complete Task" btnstyle="m-2 bg-lime-400 p-1 rounded-md focus:scale-90" val={item?.Id} />
                    </div>
                )
            })}
        </div>
    )
}
export default ListElem;