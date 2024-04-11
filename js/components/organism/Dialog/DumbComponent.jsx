import { Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import React from "react";

const DialogOrganism = ({ title, content, isOpen }) => {
  return (
    <Dialog open={isOpen} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">{title}</DialogTitle>
      <DialogContent>{content}</DialogContent>
    </Dialog>
  );
};

export default DialogOrganism;
