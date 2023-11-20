import { useNavigate } from "react-router-dom";
import CustomButton from "../buttons/Button";
import { CardProps } from './Card.d';

export default function Card({classAtt, title, image, content, link, key }: CardProps) {

    const navigate = useNavigate();

    const handleClick = (link: string) => {
        navigate(link, {replace:true});
    }  

  return(
    <div className={classAtt} key={key}>
        <div>
            <img src={image ? image.src : ''} alt={image ? image.alt : ''} />
        </div>
        <div>
            <h5 className="text-center text-xl"> {title} </h5>
            <p className="text-center mt-5"> {content} </p>
            <div className="flex justify-center">
            {
                link && link !== '' ? (
                    <CustomButton 
                    type="button" 
                    classAtt="border-2 bg-violet-500 border-violet-500 text-white rounded-lg p-2 px-10 mt-8 
                    cursor-pointer hover:bg-violet-200 hover:text-black hover:border-violet-200 transition
                    ease-in-out duration-700 hover:shadow-md" 
                    onClick={ () => handleClick(link)}>
                        <span>Click me!</span>
                    </CustomButton>
                ) : null
            }
            </div>
        </div>
    </div>
  )
}
