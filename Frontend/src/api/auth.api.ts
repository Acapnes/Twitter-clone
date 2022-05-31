import { LoginDto } from "../dto/users/login.dto";


export class AuthAPI {

    public static async Login(req: LoginDto) {
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
}