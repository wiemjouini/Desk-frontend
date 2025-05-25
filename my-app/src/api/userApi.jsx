import axios from 'axios';
const rootUrl ='http://localhost:3000/v1/'
const loginUrl = rootUrl + 'user/login';
const UserProfileUrl = rootUrl + 'user';
const logoutUrl =rootUrl + 'user/logout';
const newAccessJWT = rootUrl + "tokens"

export const userLogin = async (frmData) => {
  try {
    const res = await axios.post(loginUrl, frmData);

    if (res.data.status === 'success') {
      sessionStorage.setItem('accessJWT', res.data.accessJWT);
      localStorage.setItem(
        'sotetelDeskSite',
        JSON.stringify({ refreshJWT: res.data.refreshJWT })
      );
    }

    return res.data;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};



export const fetchUser = async () => {
  try {
    const accessJWT = sessionStorage.getItem('accessJWT');
    if (!accessJWT) {
      throw new Error("token not found !");
    }

    const res = await axios.get(UserProfileUrl, {
      headers: {
        Authorization: accessJWT,
      },
    });

    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};






/*export const fetchNewAccessJWT = async () => {
  try {
    const { refreshJWT } = JSON.parse(localStorage.getItem('sotetelDeskSite'));
    
    if (!refreshJWT) {
      throw new Error("token not found !");
    }

    const res = await axios.get(newAccessJWT, {
      headers: {
        Authorization: refreshJWT,
      },
    });

    return res.data;
  } catch (error) {
    console.log(error);
    throw error; // ou return Promise.reject(error.message) si tu veux absolument rejeter manuellement
  }
};*/




export const fetchNewAccessJWT = async () => {
  try {
    const storedData = localStorage.getItem("sotetelDeskSite");

    if (!storedData) {
      throw new Error("No sotetelDeskSite found in localStorage");
    }

    const { refreshJWT } = JSON.parse(storedData);

    if (!refreshJWT) {
      throw new Error("refreshJWT token not found in localStorage");
    }

    const res = await axios.get(newAccessJWT, {
      headers: {
        Authorization: refreshJWT,
      },
    });
     if (res.data.status === 'success') {
      sessionStorage.setItem('accessJWT', res.data.accessJWT);
    }

    return true;
  } catch (error) {
    if(error.message === "request failed with status code 403 ! "){
        localStorage.removeItem('sotetelDeskSite')
    }
    //console.log("fetchNewAccessJWT error:", error);
    throw error; // ou return Promise.reject(error.message);
  }
};





export const userLogout = async () =>{
    try {
      await axios.delete(logoutUrl,{
        headers:{
            Authorization:sessionStorage.getItem('accessJWT'),
        }
      })
    } catch (error) {
        console.log(error)
    }
}






