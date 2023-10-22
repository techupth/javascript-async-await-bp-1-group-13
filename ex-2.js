//Exercise #2
let getJohnProfile = () => {
  return new Promise(function (_, reject) {
    setTimeout(
      () =>
        reject({
          errorCode: 500,
          message: "👿 Failed to request data from server",
        }),
      2000
    );
  });
};

let onSuccess = (data)=>{
  console.log(data)
 }
 let onFailure = (error)=>{
  console.log(error)
 }
 getJohnProfile().then(onSuccess).catch(onFailure)
