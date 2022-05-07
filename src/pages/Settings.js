import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

export default function Settings(){
    const [settings, setSettings] = useState([{
        "--background-color": "#fff",
        "--background-light": "#fff",
        "--primary-color": "rgb(255, 0, 86)",
        "--shadow-color": "rgba(0,0,0,0.2)",
        "--text-color": "#0A0A0A",
        "--text-light": "#575757",
        "--font-size": "16px",
        "--animation-speed": 1
    }]);
    
    useEffect(() => {
        window.localStorage.setItem("setting",JSON.stringify(settings));
    },[settings]);

    useEffect(() => {
        const data = window.localStorage.getItem("setting");
        if( data != null){
            setSettings(JSON.parse(data));
        }
    }, []);
    const themes = [
        {
            "--background-color": "#fff",
            "--background-light": "#fff",
            "--shadow-color": "rgba(0,0,0,0.2)",
            "--text-color": "#0A0A0A",
            "--text-light": "#575757"
        },
        {
            "--background-color": "rgb(29, 29, 29)",
            "--background-light": "rgb(77, 77, 77)",
            "--shadow-color": "rgba(0,0,0,0.2)",
            "--text-color": "#ffffff",
            "--text-light": "#eceaea",
        }
    ]
    const primaryColors = [
        "rgb(255, 0, 86)",
        "#2ec4b6",
        "#ff9505",
        "rgb(0, 200, 83)",
        "#8e7dbe"
    ]
    const fontSizes = [
        {
            title: "Small",
            value: "12px"
        },
        {
            title: "Medium",
            value: "16px"
        },
        {
            title: "Large",
            value: "20px"
        }
    ]
    const animationSpeeds = [
        {
              title: "Slow",
              value: 2
        },
        {
              title: "Medium",
              value: 1
        },
        {
              title: "Fast",
              value: .5
        }
    ]
    useEffect(() => {
        const root =  document.documentElement
        for(let key in settings){
            root.style.setProperty(key, settings[key])
        }
    })
    const[theme, setTheme] = useState("light");
    const [primaryColor, setPrimaryColor] = useState(0);
    const [fontSize, setFontSize] = useState(1)
    const [animationSpeed, setAnimationSpeed] = useState(1)

    function changeTheme(i){
        const _theme = {...themes[i]}
        setTheme(i === 0 ? "light" : "dark")
        //update settings
        let _settings = {...settings}
        for(let key in _theme){
            _settings[key] = _theme[key]
        }
        setSettings(_settings)
    }

    function changeColor(i){
        const _color = primaryColors[i]
        let _settings = {...settings}
        _settings["--primary-color"] = _color
        setPrimaryColor(i)
        setSettings(_settings)
    }

    function changeFontSize(i){
        const _size = fontSizes[i]
        let _settings = {...settings}
        _settings["--font-size"] = _size.value
        setFontSize(i)
        setSettings(_settings)
    }

    function changeAnimationSpeed(i){
        const _speed = animationSpeeds[i]
        let _settings = {...settings}
        _settings["--animation-speed"] = _speed.value
        setAnimationSpeed(i)
        setSettings(_settings)
    }

    

    return(
        <div>
        <div className="section">
            <h2>Preferred Themes</h2>
            <div className="options-container">
                <div className="option light" onClick={() => changeTheme(0)}>
                    {theme === "light" && <div className="check">
                        <FontAwesomeIcon icon={faCheck} />
                    </div>}
                </div>
                <div className="option dark" onClick={() => changeTheme(1)}>
                {theme === "dark" && <div className="check">
                        <FontAwesomeIcon icon={faCheck} />
                    </div>}
                </div>
            </div>
        </div>
        <div className="section">
            <h2>Primary Color</h2>
            <div className="options-container">
                {primaryColors.map((color,color_index) => (
                    <div className="option dark" style={{backgroundColor: color}} onClick={() => changeColor(color_index)}>
                    {primaryColor === color_index && <div className="check">
                            <FontAwesomeIcon icon={faCheck} />
                        </div>}
                    </div>
                ))}
            </div>
        </div>
        <div className="section">
            <h2>Font Sizes</h2>
            <div className="options-container">
                {fontSizes.map((size,size_index) => (
                    <button className="btn" onClick={() => changeFontSize(size_index)}>
                        {size.title}
                        
                        {fontSize === size_index}
                        
                    </button>
                ))}
            </div>
        </div>
        <div className="section">
            <h2>Animation speed</h2>
            <div className="options-container">
                {animationSpeeds.map((speed,speed_index) => (
                    <button className="btn" onClick={() => changeAnimationSpeed(speed_index)}>
                        {speed.title}
                        
                        {animationSpeed === speed_index}
                        
                    </button>
                ))}
            </div>
        </div>
        </div>
    )
}