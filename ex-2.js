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

// Start coding here

let ifResolve = (data) => console.log(data);
let ifReject = (error) => console.log(error);



getJohnProfile().then(ifResolve).catch(ifReject);
