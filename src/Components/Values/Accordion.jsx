import { useState } from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const AccordionContainer = styled('div')({
  marginLeft:'100px',
  // width: '1200px', // Set the desired width
  // height: '400px', // Set the desired height
  backgroundColor:'black'
}); 

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
  backgroundColor: 'black', // Set background color
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '1rem' , fontWeight:'1rem',color: 'white'}} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: 'black', // Set background color
  color: 'white', // Set text color
  fontWeight: 700, // Set font weight
  fontSize: '3.2rem', // Set font size
  fontFamily:  "DM Serif Text",
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
    fontFamily: 'Helvetica Neue', // Set font family
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid white ',
  color: '#ffff', // Set text color
  
}));

export default function Accordions() {
  const [expanded, setExpanded] = useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    console.log(`Panel ${panel} expanded: ${newExpanded}`);
  };

  return (
    <div >
     <AccordionContainer>
      <Accordion  expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography variant="body1">HONESTY</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
          Members of the New Holy Heart Model School tell the truth and act with integrity and honor. We do not mislead, cheat, steal, or lie.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography variant="body1">RESPONSIBILTY</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
          Members of the New Holy Heart Model community are reliable and hold themselves and others accountable for their actions. We do not make excuses, blame others, or take unwarranted credit.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography variant="body1">KINDNESS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
          Members of the New Holy Heart Model community exhibit caring and compassionate behavior in all aspects of daily life. We are not mean, and we do not harass, nor act in a cruel manner. By our positive example, we discourage unkind behavior in others.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography variant="body1">RESPECT</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
          Members of the New Holy Heart community affirm the intrinsic dignity of all people. We act with tolerance, courtesy, and thoughtful regard for all persons, for property, for the environment, and for ourselves.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </AccordionContainer>
    </div>
  );
}
