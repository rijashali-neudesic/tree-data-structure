import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const fillColor = (iteration: number) => {
  switch (iteration) {
    case 6:
      return "#9400D3";
    case 5:
      return "#4B0082";
    case 4:
      return "#0000FF";
    case 3:
      return "#00FF00";
    case 2:
      return "#FFFF00";
    case 1:
      return "#FF7F00";
    case 0:
      return "#FF0000";
    default:
      return "black";
  }
};

export const Expandable: React.FC<{ title: string; [key: string]: any }> = ({
  title,
  ...props
}) => {
  return (
    <Accordion
      sx={{
        backgroundColor: fillColor(props.iteration),
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        {title}
      </AccordionSummary>
      <AccordionDetails>{props.children}</AccordionDetails>
    </Accordion>
  );
};
