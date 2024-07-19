

  
import {
  MDBFooter,
  MDBContainer,
  
 
  MDBCol,
 
  
} from 'mdb-react-ui-kit';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function Footer() {
  return (

<div style={{height:'10vh'}}  >
    <MDBFooter color='white' bgColor='black' >
      <MDBContainer className='text-center' style={{display:'flex',flexDirection:'column',top:'10px'}}>
    
              <MDBCol >
                <p style={{fontSize:'1.6rem',background:'black',marginBottom:"10px",color:'white'}} >
                  <strong>React Out</strong>
                </p>
              </MDBCol>
              <MDBCol >
                <MDBCol style={{fontSize:'1rem',background:'black'}} type='text' >
                 Address :  Street No.6 Old Salaria School Gandhran Lahri Near Chottepur, Sujanpur.
                </MDBCol>
              </MDBCol>
              <MDBCol >
                <MDBCol style={{fontSize:'1rem',background:'black'}} type='text' >
                 Registration ID-2345(Nursery-8th)
                </MDBCol>
              </MDBCol>
              <MDBCol >
                <MDBCol style={{fontSize:'1rem',background:'black'}} type='text' >
                 Phone Number:        7973274530
                </MDBCol>
              </MDBCol>
          
       

  
             
          
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright:
        <a className='text-white' href=''>
          Mitali Rajput
        </a>
      </div>
    </MDBFooter>
    </div>
  );
}
   