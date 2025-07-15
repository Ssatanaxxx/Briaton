
import IconUser from "../../assets/sprite/icon-user.svg?react"

const Account = () => {
    return (
        <button className="header__user-btn" type="button" id="loginButton">
            <span className="header__user-text">Войти</span>
            <IconUser />
        </button>
    )
}

export default Account;