import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ModeIcon from "@mui/icons-material/Mode";
import DeleteIcon from "@mui/icons-material/Delete";
import { Modal, Box, Typography, Button } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function StudentTable({
  studentMark,
  setEditData,
  setEditIndex,
  setStudentMark,
}) {
  const [openModal, setOpenModal] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const GradingSystem = (mark, type) => {
    let grade = "";

    if (type === "subject") {
      if (mark >= 90) {
        grade = "A";
      } else if (mark >= 75) {
        grade = "B";
      } else if (mark >= 45) {
        grade = "C";
      } else {
        grade = "Fail";
      }
    } else {
      if (mark >= 250) {
        grade = "A";
      } else if (mark >= 200) {
        grade = "B";
      } else if (mark >= 150) {
        grade = "C";
      } else {
        grade = "Fail";
      }
    }

    return grade;
  };

  const editDataCollection = (data, index) => {
    setEditData(data);
    setEditIndex(index);
  };

  const deleteData = (index) => {
    setOpenModal(true);
    setDeleteIndex(index);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Tamil Grade</TableCell>
              <TableCell align="right">English Grade</TableCell>
              <TableCell align="right">Maths Grade</TableCell>
              <TableCell align="right">Total Grade</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {studentMark.map((row, index) => (
              <TableRow sx={{ border: 0 }}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">
                  {GradingSystem(row.tamilGrade, "subject")}
                </TableCell>
                <TableCell align="right">
                  {GradingSystem(row.englishGrade, "subject")}
                </TableCell>
                <TableCell align="right">
                  {GradingSystem(row.mathsGrade, "subject")}
                </TableCell>
                <TableCell align="right">
                  {GradingSystem(
                    Number(row.tamilGrade) +
                      Number(row.englishGrade) +
                      Number(row.mathsGrade)
                  )}
                </TableCell>
                <TableCell style={{ display: "flex" }}>
                  <div
                    onClick={() => {
                      editDataCollection(row, index);
                    }}
                  >
                    <ModeIcon />
                  </div>
                  <div
                    onClick={() => {
                      deleteData(index);
                    }}
                  >
                    <DeleteIcon />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
        open={openModal}
        onClose={() => {
          setOpenModal(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure? Do you want to delete this record ?
          </Typography>
          <Button
            onClick={() => {
              setOpenModal(false);
              const tempData = [...studentMark];
              tempData.splice(deleteIndex, 1);
              setStudentMark(tempData);
              setDeleteIndex(null);
            }}
          >
            Yes
          </Button>
          <Button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            No
          </Button>
        </Box>
      </Modal>
    </>
  );
}

export default StudentTable;
