import React, { useState } from "react";
import StudentTable from "./components/StudentTable";
import StudentForm from "./components/StudentForm";

function App() {
  const [studentMark, setStudentMark] = useState([]);

  const [editData, setEditData] = useState({});
  const [editIndex, setEditIndex] = useState(null);

  return (
    <>
      <StudentForm
        studentMark={studentMark}
        setStudentMark={setStudentMark}
        editData={editData}
        editIndex={editIndex}
        setEditData={setEditData}
        setEditIndex={setEditIndex}
      />
      <StudentTable
        setEditData={setEditData}
        setEditIndex={setEditIndex}
        studentMark={studentMark}
        setStudentMark={setStudentMark}
      />
    </>
  );
}

export default App;
