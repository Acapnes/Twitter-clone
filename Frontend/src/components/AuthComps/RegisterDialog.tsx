import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { AuthAPI } from "../../api/auth.api";

const RegisterDialog = () => {
  const [openFirst, setOpen] = React.useState(false);

  const [name, setName] = React.useState("");
  const [username, setUserName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [pw, setPw] = React.useState("");

  const [day, setDay] = React.useState("");
  const [month, setMonth] = React.useState("");
  const [year, setYear] = React.useState("");

  const [choice, setChoice] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCloseFirst = () => {
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
        open={openFirst}
        onClose={handleCloseFirst}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
      >
        <DialogTitle id="alert-dialog-title">{"Twitter'a Kayıt ol"}</DialogTitle>
        <DialogContent>
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              className="px-2 py-5 w-full border-2 border-gray-800 rounded-md outline-none"
              placeholder="İsim"
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="text"
              className="px-2 py-5 w-full border-2 border-gray-800 rounded-md outline-none"
              placeholder="Kullanıcı adı"
              onChange={(e) => setUserName(e.target.value)}
            />

            <input
              type="text"
              className="px-2 py-5  border-2 border-gray-800 rounded-md outline-none"
              placeholder="E-posta"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="text"
              className="px-2 py-5 w-full border-2 border-gray-800 rounded-md outline-none"
              placeholder="Şifre"
              onChange={(e) => setPw(e.target.value)}
            />

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
                  onChange={(e) => setDay(e.target.value)}
                />
                <input
                  type="text"
                  className="outline-none border-2 border-gray-600 px-2 py-5 w-[8rem]"
                  placeholder="Ay"
                  onChange={(e) => setMonth(e.target.value)}
                />
                <input
                  type="text"
                  className="outline-none border-2 border-gray-600 px-2 py-5 w-[12rem]"
                  placeholder="Yıl"
                  onChange={(e) => setYear(e.target.value)}
                />
              </div>
            </div>
          </div>
        </DialogContent>

        <button
          className="m-4 rounded-full p-4 bg-black text-white font-bold"
          onClick={() => {
            if (name && (username || email) && pw != "") {
              var user = {
                name: name,
                username: username,
                email: email,
                avatar: "https://i.pinimg.com/564x/09/aa/8d/09aa8d86147fa14a67fda510d5df2f60.jpg",
                bio: name+"'s Biography",
                confrimed: false,
                birthDate: day + "/" + month + "/" + year,
                password: pw,
              };
              AuthAPI.Register(user);
              // console.log(user);
            } else alert("Gerekli yerleri doldurunuz.");
          }}
        >
          İleri
        </button>
      </Dialog>
    </div>
  );
};

export default RegisterDialog;
