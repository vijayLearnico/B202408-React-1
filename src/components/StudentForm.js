import React, { useEffect, useState } from "react";
import { Button, Paper, TextField } from "@mui/material";

function StudentForm({
  setStudentMark,
  editData,
  editIndex,
  setEditData,
  setEditIndex,
  studentMark,
}) {
  // Vi     Vij
  const [name, setName] = useState();
  const [tamilmark, setTamilmark] = useState();
  const [englishMark, setEnglishMark] = useState();
  const [mathsMark, setMathsMark] = useState();
  const [isEditMode, setIsEditMode] = useState(false);

  const clearState = () => {
    setName("");
    setTamilmark("");
    setEnglishMark("");
    setMathsMark("");
    setIsEditMode(false);
    setEditData([]);
    setEditIndex(null);
  };

  const submit = () => {
    if (name && tamilmark && englishMark && mathsMark) {
      const newData = {
        name: name,
        tamilGrade: tamilmark,
        englishGrade: englishMark,
        mathsGrade: mathsMark,
      };

      if (isEditMode) {
        const tempData = [...studentMark];
        tempData.splice(editIndex, 1, newData);
        setStudentMark(tempData);
      } else {
        setStudentMark((prevState) => {
          return [...prevState, newData];
        });
      }
      clearState();
    }
  };

  useEffect(() => {
    if (editIndex !== undefined && editIndex !== null) {
      setName(editData.name);
      setTamilmark(editData.tamilGrade);
      setEnglishMark(editData.englishGrade);
      setMathsMark(editData.mathsGrade);
      setIsEditMode(true);
    }
  }, [editData, editIndex]);

  return (
    <div>
      <Paper elevation={3} style={{ margin: 19 }}>
        <TextField
          name="Name"
          label="Name"
          style={{ margin: 3 }}
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <TextField
          name="Tamil Mark"
          label="Tamil Mark"
          style={{ margin: 3 }}
          value={tamilmark}
          onChange={(event) => {
            setTamilmark(event.target.value);
          }}
        />
        <TextField
          name="English Mark"
          label="English Mark"
          style={{ margin: 3 }}
          value={englishMark}
          onChange={(event) => {
            setEnglishMark(event.target.value);
          }}
        />
        <TextField
          name="Maths Mark"
          label="Maths Mark"
          style={{ margin: 3 }}
          value={mathsMark}
          onChange={(event) => {
            setMathsMark(event.target.value);
          }}
        />
        <Button onClick={submit}>{isEditMode ? "Update" : "Submit"}</Button>
      </Paper>
    </div>
  );
}

export default StudentForm;
