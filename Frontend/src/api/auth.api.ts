import { UserDto } from "../dto/users/user.dto";


export class AuthAPI {

    public static async Login(req: UserDto) {
        await fetch("http://localhost:3000/users/login", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(req)
        })
            .then(resp => resp.json())
            .then(data => {
                console.log(data);
                window.sessionStorage.setItem("pathId", data._id);
                window.location.href = "/home";
            })
            .catch(err => console.error(err));
    }

    public static async Register(req: UserDto) {
        await fetch("http://localhost:3000/users/register", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(req)
        })
            .then(resp => resp.json())
            .then(data => {
                // alert("Hoşgeldin "+data.name+". Hesap Başarılı Bir Şekilde Oluşturuldu")
                console.log(data);
                // window.sessionStorage.setItem("user", data);
                // window.location.href = "/home";
            })
            .catch(err => alert(err));
    }
}