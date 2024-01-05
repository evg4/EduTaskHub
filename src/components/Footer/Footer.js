function Footer() {
  let now = new Date();
  //let dateTime = now.toLocaleDateString();
  let year = now.getFullYear();
  let month = (now.getMonth() + 1).toString().padStart(2, "0");
  let day = now.getDate().toString().padStart(2, "0");
  let fullDate = `${year}-${month}-${day}`;
  //console.log(fullDate);
  return (
    <footer>
      <p>Today's date: {fullDate}</p>
    </footer>
  );
}

export default Footer;
