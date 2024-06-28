// import { useEffect } from "react";
import "./headerText.css"
import logo2 from "/public/Logo3.png"
import { Link } from "react-router-dom"
import { useEffect, useRef } from "react"

const HeaderText = () => {
    const scrollRef = useRef(null);

    useEffect(() =>{
        const scrollElemnt = scrollRef.current;

        const handleScroll = (e) => {
            if (e.deltaY !== 0) {
                scrollElemnt.classList.add("scroll-hidden");
            }
        };
    
        window.addEventListener("wheel", handleScroll);

        return () => {
            window.removeEventListener("wheel", handleScroll);
        };
    }, []);

    return(
        <>
            <div className="container">
                <div className="header_text">
                    <img src={logo2} alt="logo2"/>
                    <p>CYBER.PLUS - Это ваш портал в мир первоклассных игр!<br/>
                        Вас ждут высокопроизводительное оборудование, молниеносный интернет и сообщество единомышленников.<br/>
                        Присоединяйтесь к нам и покоряйте цифровые вершины!
                    </p>
                </div>
                <div className="btn_block_header">
                    <Link className="btn_seats" to='/Auditoriums'>Забронировать</Link>
                </div>
                <div className="scroll" ref={scrollRef}>
                    <div className="scroll_pic"></div>
                    <div className="scroll_down">ЛИСТАЙТЕ ВНИЗ</div>
                </div>
            </div>
        </>     
    )
}
export default HeaderText;