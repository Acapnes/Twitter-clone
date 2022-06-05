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
        fullWidth
      >
        <DialogTitle id="alert-dialog-title">{"Adım 1/5"}</DialogTitle>
        <DialogContent>
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              className="px-2 py-5 w-full border-2 border-gray-800 rounded-md outline-none"
              placeholder="İsim"
            />

            <div className="flex flex-col">
              <input
                type="text"
                className="px-2 py-5  border-2 border-gray-800 rounded-md outline-none"
                placeholder="Telefon"
              />
              <a href="#">
                <span className=" text-blue-600 text-sm">E-posta kullan</span>
              </a>
            </div>

            <div className="flex flex-col">
              <span>Doğum Tarihi</span>
              <span className="text-sm">
                Bu, herkese açık olarak gösterilmeyecek. Bu hesap bir işletme,
                evcil hayvan veya başka bir şey için olsa bile kendi yaşını
                doğrulaman gerekir.
              </span>
              <div className="w-20 flex flex-row space-x-3 mt-4 text-black">
                <input
                  type="text"
                  className="outline-none border-2 border-gray-600 px-2 py-5 w-[14rem]"
                  placeholder="Gün"
                />
                <input
                  type="text"
                  className="outline-none border-2 border-gray-600 px-2 py-5 w-[8rem]"
                  placeholder="Ay"
                />
                <input
                  type="text"
                  className="outline-none border-2 border-gray-600 px-2 py-5 w-[12rem]"
                  placeholder="Yıl"
                />
              </div>
            </div>
          </div>
        </DialogContent>
        <button className="m-4 rounded-full p-4 bg-black text-white font-bold">
          İleri
        </button>
      </Dialog>
    </div>
  );
};

export default RegisterDialog;
