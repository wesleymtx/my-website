import {useState} from "react";
import Form from '../../patterns/Form'
function MyForm() {
  const [status, setStatus] = useState("")
  const submitForm = (ev)=>{
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
      }
  };
  xhr.send(data);
}

  return (
      <Form/>
  ) 
}

export default MyForm;
  