import { createContext, useState } from "react";

export const PropContext = createContext()


 // eslint-disable-next-line react/prop-types
 const PropProvider = ({children}) => {
    const [labs, setLabs] = useState([]);
    const [chartData, setChartData] = useState({});
    const [isDelete, setIsDelete] = useState(false);
    const [lab, setLab] = useState({});
    const [open, setOpen] = useState(false);
    const [spin, setSpin] = useState(false)
   

    const propData = {
        lab:lab,
        labs:labs,
        chartData:chartData,
        isDelete:isDelete,
        open:open,
        spin:spin,
        setSpin:setSpin,
        setChartData:setChartData,
        setLab:setLab,
        setLabs: setLabs,
        setIsDelete:setIsDelete,
        setOpen:setOpen
    }
    return (
        <PropContext.Provider value={propData}>
            {children}
        </PropContext.Provider>
    )
 }
 export default PropProvider