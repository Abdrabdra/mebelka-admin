import React, { FC } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface Props {
  summary: string | React.ReactNode;
  children: React.ReactNode;
  expanded: string | false;
  setExpanded: (value: string | false) => void;
}

const BaseAccordion: FC<Props> = ({
  summary,
  children,
  expanded,
  setExpanded,
}) => {
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Accordion
      disableGutters
      expanded={expanded === "panel1"}
      onChange={handleChange("panel1")}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: 600,
            display: "flex",
            gap: "5px",
          }}
        >
          {summary}
        </Typography>
      </AccordionSummary>
      <Divider variant="middle" />
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

export default BaseAccordion;
