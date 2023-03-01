import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

import CloseIcon from "@mui/icons-material/Close";

export default function ModalTrailer(props) {
  const { isOpen, handleClose, srcVideo } = props;

  const fullWidth = "4rem";

  return (
    <div>
      <Dialog open={isOpen} onClose={handleClose} fullWidth={fullWidth} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogContent sx={{ backgroundColor: "#0F0F0F", borderColor: "#0F0F0F" }}>
          <CloseIcon sx={{ display: "flex", backgroundColor: "#0F0F0F", color: "#fff", marginBottom: "1rem" }} onClick={handleClose} />
          <DialogContentText id="alert-dialog-description">
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/ntYXj9W1Ez8?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
