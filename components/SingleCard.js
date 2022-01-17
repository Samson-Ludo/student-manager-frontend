import React from "react";
import Link from 'next/link'

function SingleCard({
  name,
  group,
  numOfSubGroups,
  openModal2,
  viewLink,
  id,
}) {
  return (
    <div className="h-auto mb-10">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <Link href={viewLink}>
          <h2 className="text-blue-700 hover:text-blue-500 text-xl font-bold mb-2 text-gray-800">
            {name} {group}
          </h2>
        </Link>
        <p className="text-gray-700 mb-3">
          {numOfSubGroups} {group === "student" && "Courses"}
        </p>
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-700 border-transparent h-auto text-xl font-bold py-3 px-6 text-white hover:text-white w-auto rounded-full"
            type="button"
            onClick={() => openModal2(id)}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleCard;
