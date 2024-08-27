import { MenuPage } from "../../MenuPage/MenuPage";
import Video from "../../../assets/video/video.mp4";

export const Enjoy = () => {
  return (
    <section className="main__enjoy" id="enjoy">
      <div className="container enjoy__container">
        <video autoPlay="autoplay"
          loop="loop"
          muted
          defaultmuted="true"
          playsInline
          className="enjoy__video">
          <source src={Video}
            type="video/mp4" />
        </video>
        <div className="enjoy__content">
          <h1 className="enjoy__title">
            <span className="title__italic">Enjoy</span> premium coffee at our charming cafe
          </h1>
          <p className="enjoy__text">
            With its inviting atmosphere and delicious coffee options,
            the Coffee House Resource is a popular destination for coffee lovers
            and those seeking a warm and inviting space to enjoy their favorite beverage.
          </p>
          <a href={ MenuPage } className="btn enjoy__btn"><span>Menu</span></a>
        </div>
      </div>
    </section>
  )
}