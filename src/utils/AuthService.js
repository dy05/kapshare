export default class AuthService {
    signIn() {
        sessionStorage.setItem("hasAuthUser", true);
    }

    signOut() {
        sessionStorage.removeItem("hasAuthUser");
    }

    isUserLogged = () => sessionStorage.getItem("hasAuthUser") !== null;
}
