import React from "react";

function User({ user }) {
  return (
    <div className="flex flex-row bg-slate-300 shadow-mainshadow min-w-[400px] rounded-xl my-5 mx-5">
      <div className="border-r-2 border-indigo-300">
        <img className="w-full h-[100%]" src={user.picture.large} alt="" />
      </div>
      <div className="mx-4">
        <div className="flex justify-end text-xs py-2 mt-3 text-right">
          {user.location.country} {user.location.city}
        </div>
        <div className="p-3">
          <div className="text-xl font-bold">
            {user.name.first} {user.name.last}
            <div className="h-px w-[80%] bg-gray-500 mb-2"></div>
          </div>
          <div>{user.phone}</div>
          <div>{user.email}</div>
        </div>
        <div className="flex justify-end mr-1 w-[290px]">
          <button
            type="button"
            class=" rounded-lg bg-primary transition-colors px-10 pb-2 mb-3 pt-2.5 text-xs border-white border-solid border font-medium uppercase leading-normal bg-black text-white  hover:bg-green-400 hover:border-black  hover:text-black tracking-wide"
          >
            İşe Al
          </button>
        </div>
      </div>
    </div>
  );
}

export default User;
