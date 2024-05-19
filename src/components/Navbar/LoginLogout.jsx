import './Navbar.css'
const LoginLogout = (props) => {
    let {userLoginStatus, handleChange} = props;

    return (
        <div>
             {userLoginStatus ? (
            <div className="user-icon" onClick={handleChange}></div>
          ) : (
            <button onClick={handleChange}>login</button>
          )}
        </div>
    );
};

export default LoginLogout;