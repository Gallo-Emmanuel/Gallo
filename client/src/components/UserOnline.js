import React from "react";

function UserOnline({ nickname }) {
  return (
    <li className="w-full flex justify-start pl-1 py-2 hover:bg-purple-50 hover:text-black cursor-pointer ">
      <div className="flex items-center">
        <div className="block pr-2">
          
        </div>
        <p className="w-36 truncate text-left">{nickname}</p>
      </div>
    </li>
  );
}

export default UserOnline;
