import "../styles/MembersCard.css";
import Footer from "./Footer";
import Copyright from "./Copyright";
import React from "react";
import MainCard from "./MainCard";
import Ashith_Shetty from "../images/Ashith_Shetty.JPG";
import Mandar from "../images/Mandar.JPG";
import Pratik_Kende from "../images/Pratik_Kende.JPG";
import Uday_teja from "../images/Uday_teja.JPG";
import Bhanu from "../images/Bhanu.JPG";
import Suchit from "../images/Suchit.JPG";
import Somil from "../images/Somil.JPG";
import Priyansh from "../images/Priyansh.JPG";
import Anand from "../images/Anand.JPG";
import Varang from "../images/Varang.JPG";
import Jatin from "../images/Jatin.JPG";
import Shreyansh from "../images/Shreyansh.JPG";
import Chinmay_Shewale from "../images/Chinmay_Shewale.JPG";
import vansh from "../images/Vansh.JPG";
import Lohith from "../images/Lohith.JPG";
import Aryan_jaiswal from "../images/Aryan_Jaiswal.JPG";
import Vinay_Jain from "../images/Vinay_Jain.JPG";
import Ashitosh from "../images/Ashitosh.JPG";
import Harikiran from "../images/Harikiran.JPG";
import Aryan_TN from "../images/Aryan_TN.JPG";
import Sreehita from "../images/Sreehita.JPG";
import Meghana from "../images/Meghana.JPG";
import Ayushi from "../images/Ayushi_sinha.JPG";
import Chaytali from "../images/Chaytali.JPG";
import Ashritha from "../images/Ashritha.JPG";
import Sameera from "../images/Sameera.JPG";
import Nomatha from "../images/Nomatha.JPG";

const CardContainer = () => {
  function fade() {
    var fadeElems = document.querySelectorAll(".container h1");
    for (var i = 0; i < fadeElems.length; i++) {
      var elem = fadeElems[i];
      var bounding = elem.getBoundingClientRect();
      if (bounding.top < window.innerHeight && bounding.bottom > 0) {
        elem.classList.add("is-visible");
      } else {
        elem.classList.remove("is-visible");
      }
    }
  }

  window.addEventListener("load", fade);

  window.addEventListener("scroll", fade);
  window.addEventListener("click", fade);

  return (
    <>
      <div>
        <div className="container">
          <h1>Faculty Advisor</h1>
          <div className="row">
            <MainCard name="Prabhu Prasad" email="21bcs000@iiitdwd.ac.in" />
          </div>
          <h1>Video Editing</h1>

          <div className="row">
            <MainCard
              name="Ratnesh Kherudkar"
              role="President"
              email="21bcs091@iiitdwd.ac.in"
            />
            <MainCard
              name="Chinmay Shewale"
              role="Editing Head"
              email="21bcs108@iiitdwd.ac.in"
              image={Chinmay_Shewale}
            />
            <MainCard
              name="Mandar Dighe"
              role="Member"
              email="21bcs033@iiitdwd.ac.in"
              image={Mandar}
            />
            <MainCard
              name="Ashitosh Sable"
              role="Member"
              email="21bcs096@iiitdwd.ac.in"
              image={Ashitosh}
            />
          </div>

          <div className="row">
            <MainCard
              name="Lohith B"
              role="Member"
              email="22bcs061@iiitdwd.ac.in"
              image={Lohith}
            />
            <MainCard
              name="Jatin Kushwaha"
              role="Member"
              email="22bds030@iiitdwd.ac.in"
              image={Jatin}
            />
            <MainCard
              name="Harikiran"
              role="Member"
              email="22bcs060@iiitdwd.ac.in"
              image={Harikiran}
            />
            <MainCard
              name="Sreehitha"
              role="Member"
              email="22bcs050@iiitdwd.ac.in"
              image={Sreehita}
            />
          </div>

          <h1>Photography & Videography</h1>
          <div className="row">
            <MainCard
              name="Ashith Shetty"
              role="Vice President"
              email="21bcs019@iiitdwd.ac.in"
              image={Ashith_Shetty}
            />
            <MainCard
              name="Aryan TN"
              role="Member"
              email="21bds006@iiitdwd.ac.in"
              image={Aryan_TN}
            />
            <MainCard
              name="Anand Singh"
              role="Member"
              email="21bcs009@iiitdwd.ac.in"
              image={Anand}
            />
            <MainCard
              name="Ashish Lal"
              role="Member"
              email="21bcs017@iiitdwd.ac.in"
            />
          </div>

          <div className="row">
            <MainCard
              name="Uday Teja"
              role="Member"
              email="21bcs121@iiitdwd.ac.in"
              image={Uday_teja}
            />
            <MainCard
              name="Kasi Bhanu Sameer"
              role="Member"
              email="21bec022@iiitdwd.ac.in"
              image={Bhanu}
            />
            <MainCard
              name="Suchit Artal"
              role="Member"
              email="22bcs126@iiitdwd.ac.in"
              image={Suchit}
            />
            <MainCard
              name="Yashraj Kadam"
              role="Member"
              email="22bds066@iiitdwd.ac.in"
            />
          </div>

          <div className="row">
            <MainCard
              name="Priyansh"
              role="Member"
              email="22bcs092@iiitdwd.ac.in"
              image={Priyansh}
            />
            <MainCard
              name="Varang Pratap Singh"
              role="Member"
              email="22bds062@iiitdwd.ac.in"
              image={Varang}
            />
            <MainCard
              name="Vansh Tolani"
              role="Member"
              email="22bds061@iiitdwd.ac.in"
              image={vansh}
            />
            <MainCard
              name="Somil Jain"
              role="Member"
              email="22bec045@iiitdwd.ac.in"
              image={Somil}
            />
          </div>

          <h1>Content writing</h1>
          <div className="row">
            <MainCard
              name="Chaytali Jawalekar"
              role="Content Head"
              email="21bcs026@iiitdwd.ac.in"
              image={Chaytali}
            />
            <MainCard
              name="Aayushi Sinha"
              role="Member"
              email="21bcs120@iiitdwd.ac.in"
              image={Ayushi}
            />
            <MainCard
              name="Shreyansh Tiwari"
              role="Member"
              email="21bcs114@iiitdwd.ac.in"
              image={Shreyansh}
            />

            <MainCard
              name="Nomtha Prakash"
              role="Member"
              email="22bcs103@iiitdwd.ac.in"
              image={Nomatha}
            />
          </div>

          <div className="row">
            <MainCard
              name="Azmeera Ashritha"
              role="Member"
              email="22bcs019@iiitdwd.ac.in"
              image={Ashritha}
            />
          </div>

          <h1>Social media & Event management</h1>
          <div className="row">
            <MainCard
              name="Pratik Kende"
              role="Event Head"
              email="21bcs053@iiitdwd.ac.in"
              image={Pratik_Kende}
            />
            <MainCard
              name="Chintan Chawda"
              role="Member"
              email="21bds013@iiitdwd.ac.in"
            />

            <MainCard
              name="K Meghana"
              role="Member"
              email="22bcs054@iiitdwd.ac.in"
              image={Meghana}
            />
            <MainCard
              name="Vinay Jain"
              role="Member"
              email="22bcs137@iiitdwd.ac.in"
              image={Vinay_Jain}
            />
          </div>

          <div className="row">
            <MainCard
              name="T Sameera"
              role="Member"
              email="22bec047@iiitdwd.ac.in"
              image={Sameera}
            />
            <MainCard
              name="Aryan Jaiswal"
              role="Member"
              email="22bcs018@iiitdwd.ac.in"
              image={Aryan_jaiswal}
            />
          </div>
        </div>
      </div>

      <Footer />
      <Copyright />
    </>
  );
};

export default CardContainer;
