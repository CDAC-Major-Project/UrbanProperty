import FAQ from "../../../assets/Images/FAQ.png";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useState } from 'react';
import React from "react";

const Frequently_Questions = () => {

    const [isExpanded, setExpanded] = useState("");
    const [toggleIcon, setToggleIcon] = useState("");

  return (
    <div className='w-11/12 mx-auto space-y-10 my-20 ' >
        <h1 className='text-3xl font-bold text-[#253F7C]' >Frequently Asked Questions</h1>
        <div className='flex gap-8' >
            <img src={FAQ}/>
            <div className='space-y-5' >
                <Accordion expanded={isExpanded === "panel1"} onChange={() => {setExpanded(isExpanded === "panel1" ? "" : "panel1"); setToggleIcon("panel1")}} >
                    <AccordionSummary expandIcon={toggleIcon === "panel1" ?  <RemoveCircleOutlineIcon/> : <ControlPointIcon /> }>
                        <Typography><span className='font-bold' >What is an e-Auction?</span></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Property eAuction refers to the process of auctioning properties online through an electronic platform.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={isExpanded === "panel2"} onChange={() => {setExpanded(isExpanded === "panel2" ? "" : "panel2"); setToggleIcon("panel2")}}>
                    <AccordionSummary expandIcon={ toggleIcon === "panel2" ?  <RemoveCircleOutlineIcon/> : <ControlPointIcon /> }>
                        <Typography><span className='font-bold' >Who is a Bidder?</span></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            A Bidder can be a company or an individual wishing to bid or participate in an online auction event.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={isExpanded === "panel3"} onChange={() => {setExpanded(isExpanded === "panel3" ? "" : "panel3"); setToggleIcon("panel3")}}>
                    <AccordionSummary expandIcon={toggleIcon === "panel3" ?  <RemoveCircleOutlineIcon/> : <ControlPointIcon /> } >
                        <Typography> <span className='font-bold' >Are Auctions Events Private or Public?</span></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Yes, the auction event is public. Anyone can register on the portal and participate in the bidding process.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={isExpanded === "panel4"} onChange={() => {setExpanded(isExpanded === "panel4" ? "" : "panel4"); setToggleIcon("panel4")}}>
                    <AccordionSummary expandIcon={toggleIcon === "panel4" ? <RemoveCircleOutlineIcon/> : <ControlPointIcon />}>
                        <Typography><span className='font-bold' >How Can a Bidder Register on the Auction Portal?</span></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            To participate as a Bidder, registration is a simple process. Go to the registration form from the homepage. Select "Register as Individual or Company" and fill out all required details, completing eKYC online.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={isExpanded === "panel5"} onChange={() => {setExpanded(isExpanded === "panel5" ? "" : "panel5"); setToggleIcon("panel5")}}>
                    <AccordionSummary expandIcon={ toggleIcon === "panel5" ? <RemoveCircleOutlineIcon/> : <ControlPointIcon />}>
                        <Typography><span className='font-bold' >Can an Individual Register as a Bidder Without Being a Registered Company or Organization?</span></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Yes, an individual can register as a Bidder. When registering, please select "Individual" in the Bidder Details field.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    </div>
  )
}

export default Frequently_Questions