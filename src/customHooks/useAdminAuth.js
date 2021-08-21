import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { CheckUserIsAdmin } from "../utils";

const mapState = ({ user }) => ({
    currentUser: user.currentUser
});

const useAdminAuth = props => {
    const { currentUser } = useSelector(mapState);
    const history = useHistory();
    
    useEffect(() => {
        if (!CheckUserIsAdmin(currentUser)) {
            history.push('/login');
        }
    }, [currentUser, history]);

    return currentUser;
}

export default useAdminAuth;