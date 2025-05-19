import AnimatedTitle from "./AnimatedTitle";
import Butoon from "./Butoon";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen  px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
       

       

        <div className="flex flex-col items-center text-center">
          <p className="mb-10  font-general text-[16px] ">
            hey.sanjeevsingh@gmail.com
          </p>

          <AnimatedTitle
            title="let&#39;s b<b>u</b>ild a <br /> new era of <br /> Dev<b>e</b>lopment t<b>o</b>gether."
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />

          <Butoon title="hey.sanjeevsingh@gmail.com" containerClass="mt-10 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Contact;