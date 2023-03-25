import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { uid } = useSelector((state) => state.user.user);

  useEffect(() => {
    if (!uid) {
      return navigate("/login");
    }
  }, []);

  return children;
};

export default ProtectedRoute;
