function myFunction() {
    let intro = document.getElementById("intro");
    let ok = document.getElementById("ok");
    let no = document.getElementById("no");
    let question = document.getElementById("question");
    let yes = document.getElementById("yes");
    let hellNo = document.getElementById("hell-no");
    intro.style.display = "none";
    ok.style.display = "none";
    no.style.display = "none";

    question.style.display = "inline";
    yes.style.display = "inline";
    hellNo.style.display = "inline";
  }
  function myFunction1() {
    let intro = document.getElementById("intro");
    let ok = document.getElementById("ok");
    let no = document.getElementById("no");
    let question = document.getElementById("question");
    let yes = document.getElementById("yes");
    let temporary = document.getElementById("temporary");
    let hellNo = document.getElementById("hell-no");
    intro.style.display = "none";
    ok.style.display = "none";
    no.style.display = "none";

    question.style.display = "inline";
    temporary.style.display = "inline";
    yes.style.display = "inline";
    hellNo.style.display = "inline";
  }
  function MessHim()
  {
    let hellNo = document.getElementById("hell-no");
    let random = Math.random();
    let random1 = Math.random();
    hellNo.style.transform = `translate(${random*100}px,${random1*100}px)`;

  }
  function GreetHim()
  {
    let question = document.getElementById("question");
    let yes = document.getElementById("yes");
    let temporary = document.getElementById("temporary");
    let hellNo = document.getElementById("hell-no");
    let lastText = document.getElementById("last-text");
    let rickRoll = document.getElementById("rick-rolled");
    question.style.display = "none";
    yes.style.display = "none";
    temporary.style.display = "none";
    hellNo.style.display = "none";
    lastText.style.display = "inline";
    rickRoll.style.display = "block";

  }