import React, { useState } from "react";
import { Typography, Box, Button, Paper } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import LanguageIcon from "@mui/icons-material/Language";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
//import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import DescriptionIcon from "@mui/icons-material/Description";
import VisibilityIcon from "@mui/icons-material/Visibility";
import SchoolIcon from "@mui/icons-material/School";
import TerminalIcon from "@mui/icons-material/Terminal";
import axios from "axios";
import Sidebar from "../component/sidebar";
import SendIcon from '@mui/icons-material/Send';


function Home() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");


  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);
    setInput("");

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          // model: "gpt-3.5-turbo",
          "model": "gpt-4-turbo",
          messages: [
            {
              role: "system",
              content:
                "You are a helpful AI assistant that only answers health-related questions. If a user asks something unrelated to health, politely inform them that you can only provide health-related information.",
            },
            { role: "user", content: input },
          ],
        },
        {
          headers: {
             Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      const botMessage = {
        text: response.data.choices[0].message.content,
        sender: "bot",
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Error: Unable to fetch response", sender: "bot" },
      ]);
    }
  };

  return (
    <Box
      className="homepages"
      sx={{
        height: "90vh",
        maxHeight:'90vh',
        width: "100%",
        display: "flex",
        paddingBottom: "0px",
      }}
    >
      <Box className="sidebarbox" sx={{overflow:'hidden'}}>
        <Sidebar messages={messages} />
      </Box>
      <Box className="homecon">
        <Box className="messageboxxx" sx={{width:'83%',  marginLeft:'180px'}}>

          {/* Chat Box */}

          {messages.length > 0 && ( 
            <Box
            className='messagecontent'
              sx={{
                 height:'360px',
                overflowY: "auto",
                mb: 2,
                p: 2,
                borderRadius: 2,
                display: "flex",
                flexDirection: "column",
                xs:{height:'440px'}
              }}
            >
              {messages.map((msg, index) => (
                <Paper
                  key={index}
                  sx={{
                    p: 1.5,
                    my: 1,
                    maxWidth: "75%",
                    alignSelf:
                      msg.sender === "user" ? "flex-start" : "flex-end",
                    backgroundColor:
                      msg.sender === "user" ? "#e3f2fd" : "#c8e6c9",
                    borderRadius: "10px",
                    textAlign: msg.sender === "user" ? "right" : "left", 
                  }}
                >
                  <Typography variant="body1" sx={{ color: "white" }}>
                    {msg.text}
                  </Typography>
                </Paper>
              ))}
            </Box>
          )}
          {messages.length <= 0 && (
            <Typography
              className="mainheading"
              sx={{
                color: "white",
                fontSize: "1.875rem",
                fontFamily: "sans-serif",
                fontWeight: "600",
                marginLeft:'-180px',
                paddingBottom:'20px'
              }}
            >
              What can I help with?
            </Typography>
          )}
         </Box>
         <Box className="inputbox">
          <input
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
            value={input}
            type="text"
            placeholder="Message ChatGPT"
            style={{
              width: "100%",
              padding: "10px 0px",
              fontFamily: "sans-serif",
              backgroundColor: "transparent",
              border: "none",
              outline: "none",
              color: "white",
              fontSize: "1rem",
            }}
          />
          <Box className="inputbtns">
            <Box sx={{ display: "flex", gap: "10px" }}>
              <Button
                sx={{
                  padding: ".5rem .75rem .4rem .75rem",
                  borderRadius: "25px",
                  gap: "5px",
                  fontFamily: "sans-serif",
                  fontSize: "13px",
                  backgroundColor: "transparent",
                  color: "white",
                  border: "solid rgba(255, 255, 255, 0.2) 1px",
                  "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.2)" },
                  textTransform: "none",
                }}
                disableRipple
              >
                <AddIcon style={{ marginTop: '-4px', fontSize: "18px" }} />
                Attach
              </Button>
              <Button
                sx={{
                  padding: ".5rem .75rem .4rem .75rem",
                  borderRadius: "25px",
                  gap: "5px",
                  fontFamily: "sans-serif",
                  fontSize: "13px",
                  backgroundColor: "transparent",
                  color: "white",
                  border: "solid rgba(255, 255, 255, 0.2) 1px",
                  "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.2)" },
                  textTransform: "none",
                }}
                disableRipple
              >
                <LanguageIcon style={{ marginTop: '-4px',fontSize: "18px" }} /> Sreach{" "}
              </Button>
              <Button
                sx={{
                  padding: ".5rem .75rem .4rem .75rem",
                  borderRadius: "25px",
                  gap: "5px",
                  fontFamily: "sans-serif",
                  fontSize: "13px",
                  backgroundColor: "transparent",
                  color: "white",
                  border: "solid rgba(255, 255, 255, 0.2) 1px",
                  "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.2)" },
                  textTransform: "none",
                }}
                disableRipple
              >
                <LightbulbIcon style={{marginTop: '-4px',fontSize: "18px" }} /> Reason
              </Button>
            </Box>
            <Box>
              <Button
                onClick={sendMessage}
                sx={{
                  padding: ".5rem .75rem .4rem .75rem",
                  borderRadius: "25px",
                  gap: "5px",
                  fontFamily: "sans-serif",
                  fontSize: "13px",
                  backgroundColor: "white",
                  color: "black",
                  textTransform: "none",
                  "&:hover": { backgroundColor: " rgb(236 236 236 )" },
                }}
                disableRipple
              >
               Send <SendIcon style={{ fontSize: "18px",marginTop:'-3px' }} />
              </Button>
            </Box>
          </Box>

          {/* for mobile */}
          <Box
            className="mobileiconbox"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "solid white 1px",
                  height: "40px",
                  width: "40px",
                  borderRadius: "50%",
                  aspectRatio: "1",
                  "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.2)" },
                }}
              >
                <AddIcon sx={{ color: "white" }} />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "solid white 1px",
                  height: "40px",
                  width: "40px",
                  borderRadius: "50%",
                  aspectRatio: "1",
                  "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.2)" },
                }}
              >
                <LanguageIcon sx={{ color: "white" }} />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "solid white 1px",
                  height: "40px",
                  width: "40px",
                  borderRadius: "50%",
                  aspectRatio: "1",
                  "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.2)" },
                }}
              >
                <LightbulbIcon sx={{color: "white" }} />
              </Box>
            </Box>
            <Box>
              <Box
              onClick={sendMessage}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "solid white 1px",
                  height: "40px",
                  width: "40px",
                  borderRadius: "50%",
                  aspectRatio: "1",
                  backgroundColor: "white",
                  "&:hover": { backgroundColor: " rgb(236 236 236 )" },
                }}
              >
                <SendIcon sx={{ color: "black" }} />
              </Box>
            </Box>
          </Box>
          {/* end */}
        </Box>

        {messages.length <= 0 && (
          <Box
            className="smmerbtn"
            sx={{
              display: "flex",
              gap: "10px",
              paddingTop: "30px",
              flexWrap: "nowraps",
            }}
          >
            <Button
              sx={{
                padding: ".5rem .75rem .4rem .75rem",
                borderRadius: "25px",
                gap: "5px",
                fontSize: "13px",
                fontFamily: "sans-serif",
                backgroundColor: "transparent",
                color: "white",
                border: "solid rgba(255, 255, 255, 0.2) 1px",
                "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.2)" },
                textTransform: "none",
              }}
              disableRipple
            >
              <LightbulbIcon
                style={{ marginTop:'-4px', fontSize: "18px", color: "rgb(226, 197, 65)" }}
              />
              Brianstorm
            </Button>
            <Button
              sx={{
                padding: ".5rem .75rem .4rem .75rem",
                borderRadius: "25px",
                gap: "5px",
                fontSize: "13px",
                fontFamily: "sans-serif",
                backgroundColor: "transparent",
                color: "white",
                border: "solid rgba(255, 255, 255, 0.2) 1px",
                "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.2)" },
                textTransform: "none",
              }}
              disableRipple
            >
              <DescriptionIcon
                style={{ marginTop:'-4px',fontSize: "18px", color: "rgb(234, 132, 68)" }}
              />
              Summarize text
            </Button>
            <Button
              sx={{
                padding: ".5rem .75rem .4rem .75rem",
                borderRadius: "25px",
                gap: "5px",
                fontFamily: "sans-serif",
                fontSize: "13px",
                backgroundColor: "transparent",
                color: "white",
                border: "solid rgba(255, 255, 255, 0.2) 1px",
                "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.2)" },
                textTransform: "none",
              }}
              disableRipple
            >
              <VisibilityIcon
                style={{ marginTop:'-4px',fontSize: "18px", color: "rgb(108, 113, 255)" }}
              />
              Analyze images
            </Button>
            <Button
              sx={{
                padding: ".5rem .75rem .4rem .75rem",
                borderRadius: "25px",
                gap: "5px",
                fontFamily: "sans-serif",
                fontSize: "13px",
                backgroundColor: "transparent",
                color: "white",
                border: "solid rgba(255, 255, 255, 0.2) 1px",
                "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.2)" },
                textTransform: "none",
              }}
              disableRipple
            >
              <SchoolIcon
                style={{ marginTop:'-4px',fontSize: "18px", color: "rgb(118, 208, 235)" }}
              />
              Get advice
            </Button>
            <Button
              sx={{
                padding: ".5rem .75rem .4rem .75rem",
                borderRadius: "25px",
                gap: "5px",
                fontFamily: "sans-serif",
                fontSize: "13px",
                backgroundColor: "transparent",
                color: "white",
                border: "solid rgba(255, 255, 255, 0.2) 1px",
                "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.2)" },
                textTransform: "none",
              }}
              disableRipple
            >
              <TerminalIcon
                style={{ marginTop:'-4px',fontSize: "18px", color: "rgb(108, 113, 255)" }}
              />
              Code
            </Button>
            <Button
              sx={{
                padding: ".5rem .75rem",
                borderRadius: "25px",
                gap: "5px",
                fontFamily: "sans-serif",
                fontSize: "13px",
                backgroundColor: "transparent",
                color: "white",
                border: "solid rgba(255, 255, 255, 0.2) 1px",
                "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.2)" },
                textTransform: "none",
              }}
              disableRipple
            >
              More
            </Button>
          </Box>
        )}
        {messages.length <= 0 && (
          <Box
            className="lasttext"
            sx={{ paddingTop: "120px", marginBottom: "-61px" }}
          >
            <Typography
              sx={{
                color: "white",
                fontSize: ".875rem",
                marginBottom: "-50px",
                fontFamily: "sans-serif",
              }}
            >
              By messaging ChatGPT, you agree to our Terms and have read our
              Privacy Policy.
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default Home;