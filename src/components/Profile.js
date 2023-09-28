import Image from "next/image";
import photo_cv from "../assets/photo-cv.png";
import colors from 'tailwindcss/colors';

const Profile = () =>{

    const imageStyle = {
        width: '50%',
        height: 'auto',
        borderRadius: '50%',
        border: '3px solid'+ colors.sky[600] 
    }

    return(
        <div className="text-center"> 
            <div className="mx-auto mt-4 mb-4 grid justify-items-center">
                <Image
                src= {photo_cv}
                alt="Picture of the author"
                style={imageStyle}
                ></Image>
            </div>
            <h5 className="mb-2 text-xl font-medium leading-tight">
                Eden Parks
            </h5>
            <p className="text-neutral-500 dark:text-neutral-400">
                Product designer
            </p>
        </div>
    );     
};

export default Profile