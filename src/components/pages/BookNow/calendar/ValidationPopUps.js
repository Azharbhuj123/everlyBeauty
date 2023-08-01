import React, { useState, useContext, useEffect, useLayoutEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import { useRouter } from "next/router";

import { endPoints } from "@/src/config/endpoints";
const ValidationPopUps = ({ open, onClose, ValidationText }) => {
  const router = useRouter();
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <div
          style={{
            padding: 20,
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "Poppins",
          }}
        >
          <h3>{ValidationText}</h3>

          <div
            style={{
              display: "flex",
              marginTop: "20px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              color="#E1AD9D"
              onClick={() => {
                onClose();
                ValidationText == "Kindly select the services first" &&
                  router.push({
                    pathname: "/",
                    query: { isGoToService: true },
                  });
              }}
            >
              Ok
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ValidationPopUps;
