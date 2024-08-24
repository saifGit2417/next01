import React from "react";

const PrivateRoute = () => {
  /*
  if you want to make a folder inside app but dotn want it to be route file like /home ,
   then made its folder start with _ > starting folder name with '_'  is helpfull to make that folder as private folder
   this folder is not accesible in browwser when try to hit it by it folder name


   but if you want your folder name to strat with _ then write '%5F'folderName thne you can acces it in browser URL
  */
  
  // till v-12 from code evolution
  
  return (
    <div>
      <h1>this you can not see in browser</h1>
    </div>
  );
};

export default PrivateRoute;
