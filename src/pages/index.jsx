"use client";
import React, { useState } from "react";

const index = () => {
  const [title, settitle] = useState("");
  const [maintask, setmaintask] = useState([]);
  const submithandler = (e) => {
    e.preventDefault();
    setmaintask([...maintask, { title }]);
    settitle("");
  };

  const deletehandler = (i) =>{
    let copytask = [...maintask]
    copytask.splice(i,1)
    setmaintask(copytask)
  }

  let renderTask = <h2></h2>;
  if (maintask.length > 0) {
    renderTask = maintask.map((t, i) => {
      return (
        <div key={i} className="w-full border-b-[1px] my-2 relative">
          <h4>{t.title}</h4>
          <button
          onClick={()=>{
            deletehandler(i);
          }
          }
           className="bg-red-500 absolute right-0 top-0 text-white p-[2px] rounded-md">Delete</button>
        </div>
      );
    });
  }
  return (
    <>
      <div className="bg-gradient-to-br from-blue-500 to-purple-500 w-full h-[100vh] py-[40px] bg-cover">
        <div className="bg-white w-[40%] h-auto py-[20px] m-auto text-black text-center">
          <h1 className=" text-center font-bold text-[24px]">To-Do List</h1>
          <div className=" py-[10px] ">
            <form onSubmit={submithandler}>
              <input
                type="text"
                id="to-do-input"
                placeholder="Type your text"
                className="border-[2px] border-gray-500 rounded-[25px] px-[12px] w-[60%] mx-[10px] py-[5px] "
                value={title}
                onChange={(e) => {
                  settitle(e.target.value);
                }}
              />
              <button className="bg-red-500 text-white px-[15px] py-[7px] rounded-[50px] hover:bg-red-600 ">
                Add
              </button>
            </form>
          </div>
          <div className="text-left w-[60%] mx-[12%] ">
            <ul>{renderTask}</ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
