import { useCallback, useEffect, useState } from "react";

import { Box, Grid, Typography } from "@mui/material";

import { Member } from "../api/Member";

import ClaimPassRequest from "../components/pass_request/ClaimPassRequest";
import NavBar from "../components/Navbar";
import PassRequestModal from "../components/modal/PassRequestModal";
import AcceptPassRequestModal from "../components/modal/AcceptPassRequestModal";

import { PassRequest } from "../api/PassRequest";
import { getPassRequests } from "../api/PassRequest";
import Button from "../elements/Button";

const Floor = () => {
  const [passRequestModalOpen, setPassRequestModalOpen] = useState(false);
  const [acceptPassModalOpen, setAcceptPassModalOpen] = useState(false);
  const [, setMyPassRequests] = useState<PassRequest[]>([]);
  const [availablePassRequests, setAvailablePassRequests] = useState<
    PassRequest[]
  >([]);
  const [selectedPassRequest, setSelectedPassRequest] = useState<PassRequest>();

  const handleGetPassRequests = useCallback(async () => {
    try {
      const rawPassRequests = await getPassRequests();

      // convert _id.$oid to just _id
      const passRequests: PassRequest[] = rawPassRequests.map(
        (passRequest: {
          _id: {
            $oid: string;
          };
          Member: Member;
          trade_for: string;
          trade_for_date?: string;
          trade_away: string;
          trade_away_date?: string;
          guests?: string;
          creationDate: Date;
        }) => {
          return {
            ...passRequest,
            _id: passRequest["_id"]["$oid"],
          };
        }
      );

      const myPassRequests: PassRequest[] = [];
      const availablePassRequests: PassRequest[] = [];

      passRequests.forEach((passRequest: PassRequest) => {
        if (passRequest.member.name === "John Ramirez") {
          myPassRequests.push(passRequest);
        } else {
          availablePassRequests.push(passRequest);
        }
      });

      setMyPassRequests(myPassRequests);
      setAvailablePassRequests(availablePassRequests);
    } catch (error) {
      console.log(error);
      alert("An error occured while attempting to get passes.");
    }
  }, []);

  useEffect(() => {
    handleGetPassRequests();
  }, [handleGetPassRequests]);

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <NavBar />
      <Box
        sx={{
          boxSizing: "border-box",
          flex: 1,
          display: "flex",
        }}
      >
        {/* Allows the cards to wrap without being stretched */}
        <Box
          sx={{
            boxSizing: "border-box",
            justifyContent: "center",
            width: "100%",
          }}
        >
          {passRequestModalOpen && (
            <PassRequestModal
              modalOpenStates={[passRequestModalOpen, setPassRequestModalOpen]}
              setPassRequests={setAvailablePassRequests}
            />
          )}
          {acceptPassModalOpen && (
            <AcceptPassRequestModal
              modalOpenStates={[acceptPassModalOpen, setAcceptPassModalOpen]}
              setPassRequests={setAvailablePassRequests}
              passRequest={selectedPassRequest}
            />
          )}
          <Typography variant="h3" sx={{ textAlign: "center", margin: "30px" }}>
            Trading Floor
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "30px",
            }}
          >
            <Button
              sx={{
                borderRadius: "10px",
                height: "48px",
                width: "496px",
                fontSize: "18px",
                boxShadow: 2,
              }}
              disableRipple={false}
              onClick={() => {
                setPassRequestModalOpen(true);
              }}
            >
              New Pass Request
            </Button>
          </Box>
          <Grid
            container
            spacing={3}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            columns={{ xs: 4, sm: 8, md: 13 }}
          >
            {availablePassRequests.map((passRequest, index) => (
              <Grid item xs={1} sm={2} md={3} key={`${index}`}>
                <ClaimPassRequest
                  name={passRequest.member.name}
                  descriptions={[
                    `Johnny receives: ${passRequest.trade_for}`,
                    `${passRequest.member.name} receives: ${passRequest.trade_away}`,
                    `Guests: ${passRequest.guests || "To be determined"}`,
                  ]}
                  modalOpen={() => {
                    setSelectedPassRequest(passRequest);
                    setAcceptPassModalOpen(true);
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Floor;
