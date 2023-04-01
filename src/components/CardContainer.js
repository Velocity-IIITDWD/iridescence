import "../styles/MembersCard.css";
import Footer from "./Footer";
import Copyright from "./Copyright";
import React from "react";
import MainCard from "./MainCard";

import low_Ashith_Shetty from "../images/Compressed/Ashith_Shetty-min.JPG";
import low_Mandar from "../images/Compressed/Mandar-min.JPG";
import low_Pratik_Kende from "../images/Compressed/Pratik_Kende-min.JPG";
import low_Uday_teja from "../images/Compressed/Uday_teja-min.JPG";
import low_Bhanu from "../images/Compressed/Bhanu-min.JPG";
import low_Suchit from "../images/Compressed/Suchit-min.JPG";
import low_Somil from "../images/Compressed/Somil-min.JPG";
import low_Priyansh from "../images/Compressed/Priyansh-min.JPG";
import low_Anand from "../images/Compressed/Anand-min.JPG";
import low_Varang from "../images/Compressed/Varang-min.JPG";
import low_Jatin from "../images/Compressed/Jatin-min.JPG";
import low_Shreyansh from "../images/Compressed/Shreyansh-min.JPG";
import low_Chinmay_Shewale from "../images/Compressed/Chinmay_Shewale-min.JPG";
import low_vansh from "../images/Compressed/Vansh-min.JPG";
import low_Lohith from "../images/Compressed/Lohith-min.JPG";
import low_Aryan_jaiswal from "../images/Compressed/Aryan_Jaiswal-min.JPG";
import low_Vinay_Jain from "../images/Compressed/Vinay_Jain-min.JPG";
import low_Ashitosh from "../images/Compressed/Ashitosh-min.JPG";
import low_Harikiran from "../images/Compressed/Harikiran-min.JPG";
import low_Aryan_TN from "../images/Compressed/Aryan_TN-min.JPG";
import low_Sreehita from "../images/Compressed/Sreehita-min.JPG";
import low_Meghana from "../images/Compressed/Meghana-min.JPG";
import low_Ayushi from "../images/Compressed/Ayushi_sinha-min.JPG";
import low_Chaytali from "../images/Compressed/Chaytali-min.JPG";
import low_Ashritha from "../images/Compressed/Ashritha-min.JPG";
import low_Sameera from "../images/Compressed/Sameera-min.JPG";
import low_Nomatha from "../images/Compressed/Nomatha-min.JPG";
import low_Prabhu_sir  from "../images/Compressed/Prabhu Sir.jpg"
import chintan from "../images/CHINTAN.jpg"
import ashish_lal from "../images/ASHISH LAL.JPG"
import low_yashraj from "../images/Compressed/yashraj.jpg"
import Ratnesh from "../images/Ratnesh.JPG"

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
            <MainCard name="Prabhu Prasad" email="prabhuprasad@iiitdwd.ac.in" image={low_Prabhu_sir} />
          </div>
          <h1>Video Editing</h1>

          <div className="row">
            <MainCard
              name="Ratnesh Kherudkar"
              role="President"
              email="21bcs091@iiitdwd.ac.in"
              image={Ratnesh}
            />
            <MainCard
              name="Chinmay Shewale"
              role="Editing Head"
              email="21bcs108@iiitdwd.ac.in"
              image={low_Chinmay_Shewale}
            />
            <MainCard
              name="Mandar Dighe"
              role="Member"
              email="21bcs033@iiitdwd.ac.in"
              image={low_Mandar}
            />
            <MainCard
              name="Ashitosh Sable"
              role="Member"
              email="21bcs096@iiitdwd.ac.in"
              image={low_Ashitosh}
            />
          </div>

          <div className="row">
            <MainCard
              name="Lohith B"
              role="Member"
              email="22bcs061@iiitdwd.ac.in"
              image={low_Lohith}
            />
            <MainCard
              name="Jatin Kushwaha"
              role="Member"
              email="22bds030@iiitdwd.ac.in"
              image={low_Jatin}
            />
            <MainCard
              name="Harikiran"
              role="Member"
              email="22bcs060@iiitdwd.ac.in"
              image={low_Harikiran}
            />
            <MainCard
              name="Sreehitha"
              role="Member"
              email="22bcs050@iiitdwd.ac.in"
              image={low_Sreehita}
            />
          </div>

          <h1>Photography & Videography</h1>
          <div className="row">
            <MainCard
              name="Ashith Shetty"
              role="Vice President"
              email="21bcs019@iiitdwd.ac.in"
              image={low_Ashith_Shetty}
            />
            <MainCard
              name="Aryan TN"
              role="Member"
              email="21bds006@iiitdwd.ac.in"
              image={low_Aryan_TN}
            />
            <MainCard
              name="Anand Singh"
              role="Member"
              email="21bcs009@iiitdwd.ac.in"
              image={low_Anand}
            />
            <MainCard
              name="Ashish Lal"
              role="Member"
              email="21bcs017@iiitdwd.ac.in"
              image={ashish_lal}
            />
          </div>

          <div className="row">
            <MainCard
              name="Uday Teja"
              role="Member"
              email="21bcs121@iiitdwd.ac.in"
              image={low_Uday_teja}
            />
            <MainCard
              name="Kasi Bhanu Sameer"
              role="Member"
              email="21bec022@iiitdwd.ac.in"
              image={low_Bhanu}
            />
            <MainCard
              name="Suchit Artal"
              role="Member"
              email="22bcs126@iiitdwd.ac.in"
              image={low_Suchit}
            />
            <MainCard
              name="Yashraj Kadam"
              role="Member"
              email="22bds066@iiitdwd.ac.in"
              image={low_yashraj}
            />
          </div>

          <div className="row">
            <MainCard
              name="Priyansh"
              role="Member"
              email="22bcs092@iiitdwd.ac.in"
              image={low_Priyansh}
            />
            <MainCard
              name="Varang Pratap Singh"
              role="Member"
              email="22bds062@iiitdwd.ac.in"
              image={low_Varang}
            />
            <MainCard
              name="Vansh Tolani"
              role="Member"
              email="22bds061@iiitdwd.ac.in"
              image={low_vansh}
            />
            <MainCard
              name="Somil Jain"
              role="Member"
              email="22bec045@iiitdwd.ac.in"
              image={low_Somil}
            />
          </div>

          <h1>Content writing</h1>
          <div className="row">
            <MainCard
              name="Chaytali Jawalekar"
              role="Content Head"
              email="21bcs026@iiitdwd.ac.in"
              image={low_Chaytali}
            />
            <MainCard
              name="Aayushi Sinha"
              role="Member"
              email="21bcs120@iiitdwd.ac.in"
              image={low_Ayushi}
            />
            <MainCard
              name="Shreyansh Tiwari"
              role="Member"
              email="21bcs114@iiitdwd.ac.in"
              image={low_Shreyansh}
            />

            <MainCard
              name="Nomtha Prakash"
              role="Member"
              email="22bcs103@iiitdwd.ac.in"
              image={low_Nomatha}
            />
          </div>

          <div className="row">
            <MainCard
              name="Azmeera Ashritha"
              role="Member"
              email="22bcs019@iiitdwd.ac.in"
              image={low_Ashritha}
            />
          </div>

          <h1>Social media & Event management</h1>
          <div className="row">
            <MainCard
              name="Pratik Kende"
              role="Event Head"
              email="21bcs053@iiitdwd.ac.in"
              image={low_Pratik_Kende}
            />
            <MainCard
              name="Chintan Chawda"
              role="Member"
              email="21bds013@iiitdwd.ac.in"
              image={chintan}
            />

            <MainCard
              name="K Meghana"
              role="Member"
              email="22bcs054@iiitdwd.ac.in"
              image={low_Meghana}
            />
            <MainCard
              name="Vinay Jain"
              role="Member"
              email="22bcs137@iiitdwd.ac.in"
              image={low_Vinay_Jain}
            />
          </div>

          <div className="row">
            <MainCard
              name="T Sameera"
              role="Member"
              email="22bec047@iiitdwd.ac.in"
              image={low_Sameera}
            />
            <MainCard
              name="Aryan Jaiswal"
              role="Member"
              email="22bcs018@iiitdwd.ac.in"
              image={low_Aryan_jaiswal}
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
