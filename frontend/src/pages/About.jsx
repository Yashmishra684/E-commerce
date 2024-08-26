import React from "react";
import Title from "../components/title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
    return(
       <div>
        <div className="text-2xl text-center pt-8 border-t">
            <Title text1={'ABOUT'} text2={'US'} />
        </div>

        <div className="my-10 flex flex-col md:flex-row gap-16">
            <img className="w-full md:max-w-[450px]" src={assets.about_img} alt= "" />
            <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, natus mollitia. Veniam quidem error vero harum velit quasi. Vero tempora dolore deleniti? Molestiae hic consectetur nobis qui. Quibusdam ex eligendi praesentium modi est optio cumque. Nemo accusantium accusamus quis beatae quo natus non ipsum nisi inventore. Blanditiis provident saepe dolor.</p>

            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus deserunt hic, laboriosam perferendis distinctio accusamus nesciunt officiis veniam rem quos?</p>

            <b className="text-gray-800">Our Missions</b>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates dolore veniam dolores minima ut hic consequatur esse tempora blanditiis, recusandae et exercitationem ratione nam vero praesentium dolor molestias rerum accusamus!</p>
            </div>
        </div>

        <div className="text-xl py-4">
            <Title text1={'WHY'} text2={'CHOOSE US'} />
        </div>

        <div className="flex flex-col md:flex-row text-sm mv-20">
            <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                <b>Quality Assurance:</b>
                <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quisquam soluta nam, explicabo cumque officiis quo omnis dolorum? Aut, ipsum.</p>
            </div>

            <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                <b>Convenience:</b>
                <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quisquam soluta nam, explicabo cumque officiis quo omnis dolorum? Aut, ipsum.</p>
            </div>

            <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                <b>Exceoptional Cutomer Service:</b>
                <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quisquam soluta nam, explicabo cumque officiis quo omnis dolorum? Aut, ipsum.</p>
            </div>
        </div>

                <NewsletterBox />
       </div>
    )
}

export default About;