// import logo from './logo1.jpg';
// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// const Footer = () => {
//     const [count, setCount] = useState(0);

//     useEffect(() => {
//         let storedCount = localStorage.getItem("visitorCount");
//         storedCount = storedCount ? parseInt(storedCount) : 0;

//         if (!window.visitorCountUpdated) { // Ensure update happens only once per visit
//             storedCount += 1;
//             localStorage.setItem("visitorCount", storedCount);
//             setCount(storedCount);
//             window.visitorCountUpdated = true; // Set flag to prevent duplicate updates
//         } else {
//             setCount(storedCount); // Just set the count if already updated
//         }
//     }, []);

//     return (
//         <div className="rn-footer-area rn-section-gap section-separator">
//             <div className="container">
//                 <div className="row">
//                     <div className="col-lg-12">
//                         <div className="footer-area text-center">
//                             <div className="logo">
//                                 <img src={logo} alt="logo" style={{ borderRadius: '100%' }} width="60px" />
//                             </div>
//                             <p className="description mt--30">
//                                 © coderRv 2024. All rights reserved by
//                                 <span style={{ color: "#FF033E" }}> Ravi</span>
//                             </p>
//                             <motion.div
//                                 className="text-2xl font-bold text-blue-600 mt-4"
//                                 initial={{ scale: 0 }}
//                                 animate={{ scale: 1 }}
//                                 transition={{ type: "spring", stiffness: 120 }}
//                             >
//                                 Visitors: <span style={{ color: "#FF033E" }}> {count} </span>
//                             </motion.div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Footer;








import logo from './logo2.png'

const Footer = () => {
    return (
        <div class="rn-footer-area rn-section-gap section-separator">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="footer-area text-center">
                            <div class="logo">
                                <img src={logo} alt="logo" style={{ borderRadius: '100%' }} width="60px" />
                            </div>
                            <p class="description mt--30">© coderRv 2024. All rights reserved by <span style={{ color: "#FF033E" }}>Gajendra</span> <a
                                target="_blank"></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Footer