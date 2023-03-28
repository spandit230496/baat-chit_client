import axios from 'axios'
const BASE_URL="http://localhost:8080/message"

class message {


sendMsg(text){
  return axios.post(BASE_URL+"/send-message",JSON.stringify({message:text}),{ headers: { 
    'Content-Type': 'application/json'
  }}).then(()=>console.log("success"))
}

}
export default new  message();