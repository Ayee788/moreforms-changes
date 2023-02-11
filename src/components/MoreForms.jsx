import { useState } from 'react';

// If the First Name or Last Name is less than 2 characters, output an error message saying that field must be at least 2 characters.
// If the email is less than 5 characters, output an error message saying the field must be at least 5 characters.
// The passwords must match and be at least 8 characters.

const MoreForms = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [firstNameError, setFirstNameError] = useState(true);
    const [lastNameError, setLastNameError] = useState(true);
    const [emailError, setEmailError] = useState(true);
    const [passwordError, setPasswordError] = useState(true);
    const [confirmPasswordError, setConfirmPasswordError] = useState(true);

    const firsterror = "First name must be at least 2 characters";
    const lasterror = "Last name must be at least 2 characters";
    const emailerror = "Email must be at least 5 characters";
    const passworderror = "Password must be at least 8 characters";
    const confirmpassworderror = "Passwords must match";

    /**
     * @param {checkCharCount}
     * 
    Create a function that will take in either a new first name or last name, evaluate the character count, and set the error state to true if the character count is greater than or equal to 2, and false if the character count is less than 2.
    */
    
    const checkCharCount = (e, int, inputProps) => {
        if (e.length < int && e.length !== 0) {
            inputProps(false);
        } else {
            inputProps(true);
        }
    };

    const createFirst = (e) => {
        const newFirst = e.target.value;
        setFirstName(newFirst);
        checkCharCount(newFirst, 2, setFirstNameError);
    };

    const createLast = (e) => {
        const newLast = e.target.value;
        setLastName(newLast);
        checkCharCount(newLast, 2, setLastNameError);
    };

    /*
    Create a function that will take in email, and evaluate the character count, and set the error state to true if the character count is greater than or equal to 5, and false if the character count is less than 5.
    */

    const createEmail = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        checkCharCount(newEmail, 5, setEmailError);
    };

    /*
    Create a function that will take in password, and evaluate the character count, and set the error state to true if the character count is greater than or equal to 8, and false if the character count is less than 8.
    */

    const createPassword = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        checkCharCount(newPassword, 8, setPasswordError);
    };

    /**
     * 
     * @param {passChecker} 
     * Validates if the password and confirm password match. 
     */

    const passChecker = (e, inputProps) => {
        if (e !== password && e!== 0) {
            inputProps(false);
        }
        else {
            inputProps(true);
        }
    };

    const createConfirmPassword = (e) => {
        const newConfirmPassword = e.target.value;
        setConfirmPassword(newConfirmPassword);
        passChecker(newConfirmPassword, setConfirmPasswordError);
    };
    return (
        <div>
            <form> 
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={createFirst} />
                    {!firstNameError && <p>{firsterror}</p>}
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={createLast} />
                    {!lastNameError && <p>{lasterror}</p>}            
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" onChange={createEmail} />
                    {!emailError && <p>{emailerror}</p>}
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={createPassword} />
                    {!passwordError && <p>{passworderror}</p>}
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={createConfirmPassword} />
                    {!confirmPasswordError && <p>{confirmpassworderror}</p>}
                </div>
            </form>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </div>
    )
    }

    export default MoreForms