import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success")
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success")
    }

    const handleClearClick = () => {
        setText('')
        props.showAlert("Cleared!", "success")
    }
    
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleCopyClick = () => {
        var text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        document.getSelection().removeAllRanges();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!", "success")
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed extra spaces!", "success")
    }

    const [text, setText] = useState('');
    return (
        <>
        <div className='container' style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <buttton disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</buttton>
            <buttton disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</buttton>
            <buttton disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</buttton>
            <buttton disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy Text</buttton>
            <buttton disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</buttton>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").filter((ele) => {return ele.length !== 0}).length} words, {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((ele) => {return ele.length !== 0}).length} minutes to read</p>
            <h3>Preview</h3>
            <p>{text.length > 0 ? text : "Nothing to preview here"}</p>
        </div>
        </>
        )
}
