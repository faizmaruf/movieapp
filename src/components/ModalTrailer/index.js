import * as React from "react";
import { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import CloseIcon from "@mui/icons-material/Close";
import TrailerNotFound from "../TrailerNotFound";
import Loading from "../Loading";
import axios from "axios";

export default function ModalTrailer(props) {
  const { isOpen, handleClose, id, category } = props;
  const fullWidth = "4rem";
  const [item, setDetailItem] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      try {
        const API_KEY = "cfdb19c9d57dcdf0f52c10506187d04e";
        const response = await axios.get(`https://api.themoviedb.org/3/${category}/${id}/videos?api_key=${API_KEY}`);
        setDetailItem(response.data.results);
      } catch (error) {
        console.log(error, " << error");
      }
    };
    getVideos();
  }, []);

  const keyVideo = item[item.length - 1]?.key;

  return (
    <div>
      <Dialog open={isOpen} onClose={handleClose} fullWidth={fullWidth} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogContent sx={{ backgroundColor: "#0F0F0F", borderColor: "#0F0F0F" }}>
          <CloseIcon sx={{ display: "flex", backgroundColor: "#0F0F0F", color: "#fff", marginBottom: "1rem" }} onClick={handleClose} />
          {keyVideo && (
            <DialogContentText id="alert-dialog-description">
              <iframe width="100%" height="315" src={`https://www.youtube.com/embed/${keyVideo}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </DialogContentText>
          )}
          {!keyVideo && <TrailerNotFound />}
        </DialogContent>
      </Dialog>
    </div>
  );
}
