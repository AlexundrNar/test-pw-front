const validateForm = () => {
  const v = document.getElementsByTagName("input")[0].value
  const a = document.getElementsByTagName("input")[1].value
  const l = document.getElementsByTagName("input")[2].value
  const i = document.getElementsByTagName("input")[3].value
  const d = document.getElementsByTagName("input")[4].value
  const o = document.getElementsByTagName("input")[5].value
  const n = document.getElementsByTagName("textarea")[0].value

  if(v === "" || a === "" || l === "" || i === "" || d === "" || o === "" || n === "") {
    document.getElementsByTagName("input")[0].setAttribute("required", "")
    document.getElementsByTagName("input")[1].setAttribute("required", "")
    document.getElementsByTagName("input")[2].setAttribute("required", "")
    document.getElementsByTagName("input")[3].setAttribute("required", "")
    document.getElementsByTagName("input")[4].setAttribute("required", "")
    document.getElementsByTagName("input")[5].setAttribute("required", "")
    document.getElementsByTagName("textarea")[0].setAttribute("required", "")
    return false;
}

alert("All datas are valid")

return true;
}
