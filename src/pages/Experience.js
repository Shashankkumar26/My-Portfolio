import React from 'react';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from '@mui/icons-material/School'
const Experience = () => {
    return ( 
   <div className='experience'>
      <VerticalTimeline lineColor="#3e497a">
      <VerticalTimelineElement 
         className='vertical-timeline-element-education' 
         date="2019-2023" 
         iconStyle= {{background : "#3e497a", color :' #fff'}}
         icon ={<SchoolIcon/>}
         > 
            <h3 className='vertical-timeline-element-title'>
                 University Institute Of Engineering and Technology
            </h3>
           <h4> Electronics and Communication</h4>
           <p> College</p>
         </VerticalTimelineElement>
        

         <VerticalTimelineElement 
         className='vertical-timeline-element-education' 
         date="2016-2018" 
         iconStyle= {{background : "#3e497a", color :' #fff'}}
         icon ={<SchoolIcon/>}
         > 
            <h3 className='vertical-timeline-element-title'>
                 Lal Bigha High School, Nawada, Bihar
            </h3>
            <p> High Secondary School</p>
         </VerticalTimelineElement>
         <VerticalTimelineElement 
         className='vertical-timeline-element-education' 
         date="2015-2016" 
         iconStyle= {{background : "#3e497a", color :' #fff'}}
         icon ={<SchoolIcon/>}
         > 
            <h3 className='vertical-timeline-element-title'>
                 R.P.S Residential School Patna, Patna, Bihar
            </h3>
            <p> The Secondary School</p>
         </VerticalTimelineElement>

        
      </VerticalTimeline>
   </div>
    
    );
}
 
export default Experience;