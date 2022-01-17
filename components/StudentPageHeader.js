function StudentPageHeader({ studentName, }) {
  return (
    <div className="py-4 px-auto">
      <ul className="flex">
        <li className="mr-6">
          <h1 className="text-blue-700 text-2xl font-bold mb-2">Courses being taken by {studentName}</h1>
        </li>
        <li className="mr-6">
          
        </li>
      </ul>
    </div>
  );
}

export default StudentPageHeader;
