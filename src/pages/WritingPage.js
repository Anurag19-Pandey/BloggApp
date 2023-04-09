import {useState} from 'react' ;
import '../css/PagesStyle/WritingPageStyle.css';
import {GrAddCircle} from "react-icons/gr" ;

const WritingPage = () => {

    const [file, setFile] = useState();

    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
  

  return (
    <div className='write'>
        <img className='writeImage' src={file} />
        <form className="writeForm">
            <div className='writeFormGroup'>
                <label htmlFor="fileInput">
                <GrAddCircle className='writeIcon'/>
                </label>
                <input type="file" id="fileInput" style={{display:'none'}} onChange={handleChange}/>
                <input type="text" placeholder="Title" className='writeInput' autoFocus={true}/>
            </div>
            <div className='writeFormGroup'>
                <textarea placeholder="Tell your story..." type="text" className='writeInput writeText'></textarea>
            </div>
            <button className='writeSubmit'>Publish</button>
        </form>
    </div>
  )
}

export default WritingPage