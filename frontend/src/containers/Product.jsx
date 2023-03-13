import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import {useNavigate} from "react-router-dom";
import React, {useEffect} from "react";

function Product() {
    const navigate = useNavigate();
    const [text, setText] = React.useState("Quel produit recherchez-vous ?");
    const [index, setIndex] = React.useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex(index => index + 1);
        }, 80);

        return () => clearInterval(intervalId);
    }, []);

    const animatedText = text.slice(0, index);

    return (
        <div className="grid-duo">
            <div className="center-element">
                <div className="window">
                    <p className="progressive-text">{animatedText}</p>
                </div>
            </div>
            <div className="grid-quatro-line">
                <div></div>
                <div className="button-menu" onClick={() => navigate("/piece")}>
                    <PlayCircleIcon className="play-circle-icon"/>
                    <p>Find a product</p>
                </div>
                <div className="button-menu">
                    <PlayCircleIcon className="play-circle-icon"/>
                    <p>Create a new product</p>
                </div>
                <div className="button-menu">
                    <PlayCircleIcon className="play-circle-icon"/>
                    <p>Modify an existing product</p>
                </div>
            </div>
            <div className="breadcrumbs">
                <a href="/accueil">Home</a>
                <span className="separator">›</span>
                <a href="/Product/">Product</a>
            </div>

        </div>
    );
}

export default Product;