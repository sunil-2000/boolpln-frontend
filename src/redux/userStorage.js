export function userLoad() {
  const accessToken = localStorage.getItem("accessToken")
    ? localStorage.getItem("accessToken")
    : "";
  const refreshToken = localStorage.getItem("refreshToken")
    ? localStorage.getItem("refreshToken")
    : "";
  const loggedIn = localStorage.getItem("loggedIn")
    ? JSON.parse(localStorage.getItem("loggedIn"))
    : "";

  return {
    userApiReducer: {
      accessToken: accessToken,
      refreshToken: refreshToken,
      loggedIn: loggedIn,
    },
  };
}
