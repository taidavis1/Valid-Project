import { useState , useEffect} from 'react';

function useToken() {

  function getToken() {
    const userToken = localStorage.getItem('token');
    return userToken && userToken
  }

  const [token, setToken] = useState(getToken());

  useEffect(() => {
    // Set the token from local storage when the component mounts
    const token = getToken();
    if (token) {
      setToken(token);
      saveToken(token);
    }
  }, []);

  function saveToken(userToken) {
    localStorage.setItem('token', userToken);
    setToken(userToken);
  };

  function removeToken() {
    localStorage.removeItem("token");
    setToken(null);
  }

  return {
    setToken: saveToken,
    token,
    removeToken
  }

}

export default useToken;