export class User {
    constructor(emailUser, passwordUser, nameUser, genderUser, phoneUser) {
        this.email = emailUser;
        this.password = passwordUser;
        this.name= nameUser;
        this.gender= genderUser;
        this.phone = phoneUser;
    }

    // stringifyUserInfor() {
    //     JSON.stringify({
    //         email: this.emailUser,
    //         password: this.passwordUser,
    //         name: this.nameUser,
    //         gender: this.genderUser,
    //         phone: this.phoneUser
    //     })
}