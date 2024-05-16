import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// si l'utilisateur rentre une url invalide, il est redirigé vers la page erreur
const RedirectToError = () => {
  const navigateError = useNavigate();

  useEffect(() => {
    navigateError("/error");
  }, [navigateError]);
  return null;
};

export default RedirectToError;
