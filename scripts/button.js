function toggleContent(buttonnumver) {
    const content = document.getElementById(`content${buttonnumver}`);
    if (content.style.display === "none") {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  }