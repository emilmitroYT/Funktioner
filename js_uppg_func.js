function showMeal(mealName) {
    return mealName;
  }
  console.log(showMeal("morgonmål"));

  var a = 4;
  var b = 7;
  function countResult(a, b, operation) {
    if (operation == "+") {
      document.getElementById("result").innerHTML = a + b;
    } else if (operation == "-") {
      document.getElementById("result").innerHTML = a - b;
    } else if (operation == "*") {
      document.getElementById("result").innerHTML = a * b;
    } else {
      document.getElementById("result").innerHTML = a / b;
    }

  }
  document.getElementById("addition").addEventListener("click", function () {
    countResult(10, 5, "+");
  });
  document.getElementById("subtraction").addEventListener("click", function () {
    countResult(10, 5, "-");
  });
  document.getElementById("multiplication").addEventListener("click", function () {
    countResult(10, 5, "*");
  });
  document.getElementById("division").addEventListener("click", function () {
    countResult(10, 5, "/");
  });

  document.getElementById("get_date").addEventListener("click", function () {
    document.getElementById("today").innerHTML = new Date();
  });

  function onLoadTime() {
    var loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    document.getElementById("loadtime").innerHTML = "Loadtime:" + loadTime;
  }
  window.onload = onLoadTime;

  function getDate() {
    let months = [
      "januari",
      "februari",
      "mars",
      "april",
      "maj",
      "juni",
      "juli",
      "augusti",
      "september",
      "oktober",
      "november",
      "december",

    ];
    document.getElementById("date").innerHTML = months[new Date().getMonth()] + "," + new Date().getFullYear();
  }
  document.getElementById("get_date_2").addEventListener("click", getDate);