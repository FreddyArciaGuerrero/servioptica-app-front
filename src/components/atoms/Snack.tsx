import { Snackbar } from "@mui/material"
import { Message } from "../../context/MessageContext"

export const SnackbarAtom = (message: Message) => {
    return (
        <Snackbar
            open={true}
            autoHideDuration={3000}
            message={message.content}
          />
    )
}