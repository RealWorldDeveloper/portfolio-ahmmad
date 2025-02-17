import { FaDatabase } from "react-icons/fa6";
import { SiAuthelia } from "react-icons/si";
import { FcSmartphoneTablet } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { GrDeploy } from "react-icons/gr";
import { BsBugFill } from "react-icons/bs";
import { FcGlobe, FcServices,FcPortraitMode } from "react-icons/fc";

export const handleIcon = (items) => {
  if (items === "Database Design & Management") {
    return <FaDatabase size={40} style={{color: 'orange'}}/>;
  }
  if (items === "Authentication & Security Implementation") {
    return <SiAuthelia size={40} style={{color:'#80a975'}}/>;
  }
  if(items === 'Responsive Design'){
    return <FcSmartphoneTablet size={40} style={{color:'white'}}/>
  }
  if(items === 'REST API Development'){
    return <img src="./api.png" style={{width:'70px'}}/>
  }
  if(items === 'Version Control & GitHub Management'){
    return <FaGithub size={40} style={{color:'white'}}/>
  }
  if(items === 'Web App Deployment'){
    return <GrDeploy size={40} style={{color:'tan'}}/>
  }
  if(items === 'Bug Fixing & Performance Optimization'){
    return <BsBugFill size={40} style={{color: 'red'}}/>
  }
  if (items === "MERN Developemnt") {
    return <img src="./mern_icon.png" style={{width:'70px'}}/>
  }
  if (items === "Custom Website Design") {
    return <FcGlobe size={40} style={{color: 'transparent'}}/>
  }
  if (items === "UI/UX Improvements") {
    return <img src="./ux.png" style={{width:'60px'}}/>
  }
  if (items === "Testing for Perfection") {
    return <FcServices size={40} style={{color: 'transparent'}}/>
  }
  if (items === "Personalized Coding Consultation") {
    return <FcPortraitMode size={40} style={{color: 'transparent'}}/>
  }
};
