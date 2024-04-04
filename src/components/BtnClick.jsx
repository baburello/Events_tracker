import { Button } from "@mui/material"
import Modal from "./Modal"
import handleClickOpen from "./Dialogue/FormDialog"


function BtnClick() {
   
  return (
    <div>
          <Button variant="contained"
              color="success"
        onClick={() => {
          // handleClickOpen()
              }}
          >Объект кушиш</Button>
    </div>
  )
}

export default BtnClick
