import React, { useState } from 'react'
import { Button, Input } from '../Components'
import { HiPlus } from 'react-icons/hi'

const CustomForm = ({className, addItem}) => {

    // States
    const [task, setTask] = useState("")

    const handleFormSubmit = (e) =>{
        e.preventDefault()
        addItem({
            name: task,
            checked: false,
            id: Date.now()
        })
        setTask("")
    }


  return (
    <form
        className={className}
        onSubmit={handleFormSubmit}
    >
        <div className=" w-full flex flex-row flex-nowrap h-fit mt-2.5">
            <Input id=" item"
                    label=" Item"
                    autoComplete="on"
                    type="text"
                    inputFunc={(e)=>setTask(e.target.value)}
                    value={task}
                    className={` h-50 w-full`}
                />
                <Button
                    text = {<HiPlus size={30}/>}
                    className={` bg-secondary text-white h-50 w-[60px] text-center flex items-center justify-center `}
                    type="submit"
                />
        </div>
    </form>
  )
}

export default CustomForm