import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const RegisterDialog = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    console.log("blood");
    setOpen(false);
  };

  return (
    <div>
      <button
        className="bg-white text-black text-sm font-bold rounded-full py-3 mb-2 p-4"
        onClick={handleClickOpen}
      >
        Telefon numarası veya e-posta ile kaydol
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Adım 1/5"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button className="p-4 bg-red-500 text-white">İleri</button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default RegisterDialog;
