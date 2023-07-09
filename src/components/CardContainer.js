import "../styles/MembersCard.css";
import Footer from "./Footer";
import Copyright from "./Copyright";
import React from "react";
import MainCard from "./MainCard";

import Ashith_Shetty from "../images/compressed/Ashith_Shetty.JPG";
import Mandar from "../images/compressed/Mandar.JPG";
import Pratik_Kende from "../images/compressed/Pratik_Kende.JPG";
import Uday_teja from "../images/compressed/Uday_teja.JPG";
import Bhanu from "../images/compressed/Bhanu.JPG";
import Suchit from "../images/compressed/Suchit.JPG";
import Somil from "../images/compressed/Somil.JPG";
import Priyansh from "../images/compressed/Priyansh.JPG";
import Anand from "../images/compressed/Anand.JPG";
import Varang from "../images/compressed/Varang.JPG";
import Jatin from "../images/compressed/Jatin.JPG";
import Shreyansh from "../images/compressed/Shreyansh.JPG";
import Chinmay_Shewale from "../images/compressed/Chinmay_Shewale.JPG";
import vansh from "../images/compressed/Vansh.JPG";
import Lohith from "../images/compressed/Lohith.JPG";
import Aryan_jaiswal from "../images/compressed/Aryan_Jaiswal.JPG";
import Vinay_Jain from "../images/compressed/Vinay_Jain.JPG";
import Ashitosh from "../images/compressed/Ashitosh.JPG";
import Harikiran from "../images/compressed/Harikiran.JPG";
import Aryan_TN from "../images/compressed/Aryan_TN.JPG";
import Sreehita from "../images/compressed/Sreehita.JPG";
import Meghana from "../images/compressed/Meghana.JPG";
import Ayushi from "../images/compressed/Ayushi_sinha.JPG";
import Chaytali from "../images/compressed/Chaytali.JPG";
import Ashritha from "../images/compressed/Ashritha.JPG";
import Sameera from "../images/compressed/Sameera.JPG";
import Nomatha from "../images/compressed/Nomatha.JPG";
import Prabhu_sir  from "../images/compressed/PrabhuSir.jpg"
import chintan from "../images/compressed/CHINTAN.jpg"
import ashish_lal from "../images/compressed/ASHISH LAL.JPG"
import Ratnesh from "../images/compressed/Ratnesh.JPG"

import Carousel from "./Carousel";

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
            <MainCard name="Prabhu Prasad" email="prabhuprasad@iiitdwd.ac.in" image={Prabhu_sir}  hash="LaJbBY$xoyIq~pi^W?WCK-W?RPxu"/>
          </div>
          <h1>Video Editing</h1>

          <div className="row">
            <MainCard
              name="Ratnesh Kherudkar"
              role="President"
              email="21bcs091@iiitdwd.ac.in"
              image={Ratnesh}
              hash="L2DIab5Z00}j00^c0A5?$i=w~AE4"
            />
            <MainCard
              name="Chinmay Shewale"
              role="Editing Head"
              email="21bcs108@iiitdwd.ac.in"
              image={Chinmay_Shewale}
              hash="L;Jt-cV?%Lt7~pV?t7ofx^jFWCaz"
            />
            <MainCard
              name="Mandar Dighe"
              role="Member"
              email="21bcs033@iiitdwd.ac.in"
              image={Mandar}
              hash="LrLN9{V?-:RP~WRjf,aetQaxjrof"
            />
            <MainCard
              name="Ashitosh Sable"
              role="Member"
              email="21bcs096@iiitdwd.ac.in"
              image={Ashitosh}
              hash="LWI#V{~q.8xt%$ogRjIU%ixaxaoe"
            />
          </div>

          <div className="row">
            <MainCard
              name="Lohith B"
              role="Member"
              email="22bcs061@iiitdwd.ac.in"
              image={Lohith}
              hash="L4D+C}y=02ADxI^QBiMwGa^*~AAB"
            />
            <MainCard
              name="Jatin Kushwaha"
              role="Member"
              email="22bds030@iiitdwd.ac.in"
              image={Jatin}
              hash="LhKKZP-:yAsC~Ut6ocV@%Mt7%1j]"
            />
            <MainCard
              name="Harikiran"
              role="Member"
              email="22bcs060@iiitdwd.ac.in"
              image={Harikiran}
              hash="L$NAO,bw?YV@_4t7WGjYo%WDRkaz"
            />
            <MainCard
              name="Sreehitha"
              role="Member"
              email="22bcs050@iiitdwd.ac.in"
              image={Sreehita}
              hash="LiJHdWW=t7M|_Nj^NJRkx^kCRka}"
            />
          </div>

          <h1>Photography & Videography</h1>
          <div className="row">
            <MainCard
              name="Ashith Shetty"
              role="Vice President"
              email="21bcs019@iiitdwd.ac.in"
              image={Ashith_Shetty}
              hash="L7BfhK-;.9NH00D*01WA~V?H~Bxt"
            />
            <MainCard
              name="Aryan TN"
              role="Member"
              email="21bds006@iiitdwd.ac.in"
              image={Aryan_TN}
              hash="LFFrkbDjY6NL_Ls;t2xvpyad$*of"
            />
            <MainCard
              name="Anand Singh"
              role="Member"
              email="21bcs009@iiitdwd.ac.in"
              image={Anand}
              hash="L29Zv89F0Bq]BsNI?vIT?dxD}QNx"
            />
            <MainCard
              name="Ashish Lal"
              role="Member"
              email="21bcs017@iiitdwd.ac.in"
              image={ashish_lal}
              hash="LHEnn=?w2Z;1HD?I}DEK5RE2v~n$"
            />
          </div>

          <div className="row">
            <MainCard
              name="Uday Teja"
              role="Member"
              email="21bcs121@iiitdwd.ac.in"
              image={Uday_teja}
              hash="L6D[z+9YBo4o02D*ElRi~VRP~ANG"
            />
            <MainCard
              name="Kasi Bhanu Sameer"
              role="Member"
              email="21bec022@iiitdwd.ac.in"
              image={Bhanu}
              hash="L%LNh}xb-:jd~pW:t7WXtSj?agj["
            />
            <MainCard
              name="Suchit Artal"
              role="Member"
              email="22bcs126@iiitdwd.ac.in"
              image={Suchit}
              hash="LVIN:SD%_NWCa{IUNGs.%Mof-oay"
            />
          </div>

          <div className="row">
            <MainCard
              name="Priyansh"
              role="Member"
              email="22bcs092@iiitdwd.ac.in"
              image={Priyansh}
              hash="L?J*VNWA%LoJ_Ne-ofoJtSjZRjf6"
            />
            <MainCard
              name="Varang Pratap Singh"
              role="Member"
              email="22bds062@iiitdwd.ac.in"
              image={Varang}
              hash="L+KA.jWo%Ls:~oWVt7oftljuWXbH"
            />
            <MainCard
              name="Vansh Tolani"
              role="Member"
              email="22bds061@iiitdwd.ac.in"
              image={vansh}
              hash="LCD]M3D+GFxbyqRQt2RkpfaJv~WB"
            />
            <MainCard
              name="Somil Jain"
              role="Member"
              email="22bec045@iiitdwd.ac.in"
              image={Somil}
              hash="LSK,mKxt^%My~pkVE3RQ%Mj?niaz"
            />
          </div>

          <h1>Content writing</h1>
          <div className="row">
            <MainCard
              name="Chaytali Jawalekar"
              role="Content Head"
              email="21bcs026@iiitdwd.ac.in"
              image={Chaytali}
              hash="LSK,mKxt^%My~pkVE3RQ%Mj?niaz"
            />
            <MainCard
              name="Aayushi Sinha"
              role="Member"
              email="21bcs120@iiitdwd.ac.in"
              image={Ayushi}
              hash="LjIOIQR:o|WF?wNIR:ofyEogM|ay"
            />
            <MainCard
              name="Shreyansh Tiwari"
              role="Member"
              email="21bcs114@iiitdwd.ac.in"
              image={Shreyansh}
              hash="L+Ma62of-:og~qWWogofWZWURjbF"
            />

            <MainCard
              name="Nomtha Prakash"
              role="Member"
              email="22bcs103@iiitdwd.ac.in"
              image={Nomatha}
              hash="LKGR*Y%Ml9S1~pxH-;Sc%3RPwdM{"
            />
          </div>

          <div className="row">
            <MainCard
              name="Azmeera Ashritha"
              role="Member"
              email="22bcs019@iiitdwd.ac.in"
              image={Ashritha}
              hash="LQHUnC-o%KI@~qs.R.oz^+RPnhbF"
            />
          </div>

          <h1>Social media & Event management</h1>
          <div className="row">
            <MainCard
              name="Pratik Kende"
              role="Event Head"
              email="21bcs053@iiitdwd.ac.in"
              image={Pratik_Kende}
              hash="L[I#opRjozRj_NWBogf6%Ns:s;oe"
            />
            <MainCard
              name="Chintan Chawda"
              role="Member"
              email="21bds013@iiitdwd.ac.in"
              image={chintan}
              hash="LvJt*dIU-:t7~WM{tRt7M|WCRlay"
            />

            <MainCard
              name="K Meghana"
              role="Member"
              email="22bcs054@iiitdwd.ac.in"
              image={Meghana}
              hash="LCH1-xtgD~~p?^s.02?H?bn%rWWU"
            />
            <MainCard
              name="Vinay Jain"
              role="Member"
              email="22bcs137@iiitdwd.ac.in"
              image={Vinay_Jain}
              hash="L7E{2x0K68Dk~R9aNuIU$ln.#kb]"
            />
          </div>

          <div className="row">
            <MainCard
              name="T Sameera"
              role="Member"
              email="22bec047@iiitdwd.ac.in"
              image={Sameera}
              hash="LCFrY2?Zpt?a~qs=?G?aj_IVrst7"
            />
            <MainCard
              name="Aryan Jaiswal"
              role="Member"
              email="22bcs018@iiitdwd.ac.in"
              image={Aryan_jaiswal}
              hash="LOKw:y0J?sx^~oE04n-=^--owKt8"
            />
          </div>
        </div>
      </div>

      <Carousel/>

      <Footer />
      <Copyright />
    </>
  );
};

export default CardContainer;
