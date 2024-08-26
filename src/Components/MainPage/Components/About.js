export const About = () => {
  return (
    <section className="about">
      <div className="container">
        <h2 className="title">
        Resource is <span className="italic">the perfect and cozy place</span> 
        where you can enjoy a variety of hot beverages, relax, catch up with friends, 
        or get some work done.
        </h2>
        <div className="about__content">
          <div className="about__content-item about__content-item-one">
            <img src="../assets/images/about/about-1.jpg" alt="Woman" />
          </div>

          <div className="about__content-item about__content-item-two">
            <img src="../assets/images/about/about-2.jpg" alt="Cup" />
          </div>

          <div className="about__content-item about__content-item-three">
            <img src="../assets/images/about/about-3.jpg" alt="Men" />
          </div>

          <div className="about__content-item about__content-item-four">
            <img src="../assets/images/about/about-4.jpg" alt="Couple" />
          </div>
        </div>
      </div>
    </section>
  )
}