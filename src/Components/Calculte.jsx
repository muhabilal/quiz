import React from "react";

function Calculte() {
  var form = document.getElementById("form"),
    bdate = document.getElementById("date"),
    bmonth = document.getElementById("month"),
    byear = document.getElementById("year"),
    date = document.getElementById("date2"),
    month = document.getElementById("month2"),
    year = document.getElementById("year2"),
    age = document.getElementById("age"),
    days = document.getElementById("days"),
    months = document.getElementById("months"),
    today = new Date();
  // console.log(today);
  year.value = today.getFullYear();
  month.value = today.getMonth() + 1;
  date.value = today.getDate();

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var by = Number.parseFloat(byear.value),
      bm = Number.parseFloat(bmonth.value),
      bd = Number.parseFloat(bdate.value),
      ty = Number.parseFloat(year.value),
      tm = Number.parseFloat(month.value),
      td = Number.parseFloat(date.value);

    if (td < bd) {
      days.innerHTML = td - bd + 30 + " days";
      tm = tm - 1;
    } else {
      days.innerHTML = td - bd + " days";
    }

    if (tm < bm) {
      months.innerHTML = tm - bm + 12 + " months";
      ty = ty - 1;
    } else {
      months.innerHTML = tm - bm + " months";
    }

    age.innerHTML = "Age: " + (ty - by) + " years";
  });
  return (
    <div id="container" class="container mt-5">
      <h1>Section - III</h1>

      <form id="form" autocomplete="off">
        <h3 class="text-primary mb-5">Q5: Calculate your data of birth here</h3>

        <label for="date">
          Date Of Birth:
          <input
            type="text"
            maxlength="2"
            size="2"
            id="date"
            placeholder="Date"
            required
          />
          <input
            type="text"
            maxlength="2"
            size="2"
            id="month"
            placeholder="Month"
            autocomplete="on"
            required
          />
          <input
            type="text"
            maxlength="4"
            size="4"
            id="year"
            placeholder="Year"
            required
          />
        </label>
        <br />
        <br />
        <label for="date2">
          Today's Date:
          <input
            type="text"
            // maxlength="2"
            // size="2"
            id="date2"
            placeholder="Date"
          />
          <input
            type="text"
            maxlength="2"
            size="2"
            id="month2"
            placeholder="Month"
          />
          <input
            type="text"
            // maxlength="4"
            // size="4"
            id="year2"
            placeholder="Year"
          />
        </label>
        <br />
        <br />
        <button id="calbtn" class="btn btn-primary">
          Calculate
        </button>
        <br />
        <br />
        <span id="age"></span>
        <span id="months"></span>
        <span id="days"></span>
      </form>
    </div>
  );
}

export default Calculte;
