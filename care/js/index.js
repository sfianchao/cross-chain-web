window.onload = function () {
  console.log("長照單位");

//   var table;
//   var rowCount;
  var stompClient = null;

//   connect();
};

function launchTx() {
  console.log("launch tx");

  var patientName = document.getElementById("patient-name").value;
  var hospitalName = document.getElementById("hospital-name").value;
  var data = {
    source: {
      chainName: "src",
    },
    destination: {
      chainName: hospitalName,
    },
    txType: "Req",
    txContent: "/" + patientName + "/record.pdf",
  };

  console.log(data);

  // 發起跨鏈交易
  fetch("http://140.118.9.225:9191/transaction/launch", {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.status == 201) {
        return response.json();
      }
    })
    .then((jsonData) => {
      console.log(jsonData);

      var resContent = document.getElementById("res-content");
      resContent.innerHTML = "<p>" + jsonData.txContent + "<p/>";

    })
    .catch((err) => {
      console.log("錯誤:", err);
    });
}
