import "./upload.scss";
import Header from "../../components/Header/header";
import Thumbnail from "../../assets/Images/Upload-video-preview.jpg";
import axios from "axios";

function Upload() {

  const handleSubmit = (e) => {
    const postUrl = "http://localhost:8080/videos/upload";
    e.preventDefault();
    const userDescription = document.getElementById('#user--description');
    const userTitle = document.getElementById('#user--title')
    axios.post(postUrl, {
      title: userTitle,
      description: userDescription
    });
  }

  return (
    <>
      <Header />
      <div className="border--bottom"></div>
      <h1 className="upload__header">Upload Video</h1>
      {/* start of desktop */}
      <div className="upload--desktop--flex">
        <div className="thumbnail--flex">
          <h4 className="video__header--desktop">VIDEO THUMBNAIL</h4>
          <img className="thumbnail--desktop" src={Thumbnail} alt="thumbnail" />
        </div>
        <form onSubmit={handleSubmit} className="video--form--desktop">
          <label htmlFor="user--title" className="title__label">
            TITLE YOUR VIDEO
          </label>
          <input
            type="text"
            id="user--title"
            placeholder="Add a title to your video"
          />
          <label htmlFor="user--description" className="video__description">
            ADD A VIDEO DESCRIPTION
          </label>
          <input
            type="text"
            id="user--description"
            placeholder="Add a description to your video"
          />
          <button type="submit" className="publish__button">PUBLISH</button>
          <button className="cancel__button">CANCEL</button>
        </form>
      </div>
      {/* end of desktop */}

      {/* tablet and mobile start */}
      <h4 className="video__header">VIDEO THUMBNAIL</h4>
      <img className="thumbnail" src={Thumbnail} alt="thumbnail" />

      <form action="" className="video--form">
        <label htmlFor="user--title" className="title__label">
          TITLE YOUR VIDEO
        </label>
        <input
          type="text"
          id="user--title"
          placeholder="Add a title to your video"
        />
        <label htmlFor="user--description" className="video__description">
          ADD A VIDEO DESCRIPTION
        </label>
        <input
          type="text"
          id="user--description"
          placeholder="Add a description to your video"
        />
        <button className="publish__button">PUBLISH</button>
        <button className="cancel__button">CANCEL</button>
      </form>

      <div className="border--bottom--tablet"> </div>
      <div className="button__container">
        <button className="cancel__button--tablet">CANCEL</button>
        <button className="publish__button--tablet">PUBLISH</button>
      </div>
    </>
  );
}
export default Upload;
