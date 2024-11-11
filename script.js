function changeColors(cores) {
  switch (cores) {
    case "vermelho":
      document.getElementById("amarelo").style.backgroundColor = "gray";
      document.getElementById("verde").style.backgroundColor = "gray";
      document.getElementById("vermelho").style.backgroundColor = "red";

      document.getElementById("cores").innerText = "Pare";
      document.getElementById("cores").style.color = "red";
      break;
    case "amarelo":
      document.getElementById("vermelho").style.backgroundColor = "gray";
      document.getElementById("verde").style.backgroundColor = "gray";
      document.getElementById("amarelo").style.backgroundColor = "#FFD700";

      document.getElementById("cores").innerText = "Atenção";
      document.getElementById("cores").style.color = "#FFD700";

      break;
    case "verde":
      document.getElementById("amarelo").style.backgroundColor = "gray";
      document.getElementById("vermelho").style.backgroundColor = "gray";
      document.getElementById("verde").style.backgroundColor = "green";

      document.getElementById("cores").innerText = "Siga";
      document.getElementById("cores").style.color = "green";

      break;

    default:
      break;
  }
}
