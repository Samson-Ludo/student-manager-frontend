import React from "react";
import Link from 'next/link'

function SingleCard({
  name,
  group,
  numOfSubGroups,
  viewLink,
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
        </div>
      </div>
    </div>
  );
}

export default SingleCard;
