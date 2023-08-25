export const useGetUserInfo = () => {
  if (!localStorage.getItem("auth")) {
    return { name: "", profilePhoto: "", userID: null, isAuth: false };
  }

  const { name, profilePhoto, userID, isAuth } = JSON.parse(
    localStorage.getItem("auth")
  );

  return { name, profilePhoto, userID, isAuth };
};
