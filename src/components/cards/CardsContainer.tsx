import Card from "./Card"
import { CardContainerProps } from "./CardsContainer.d"


export default function CardsContainer({data}: CardContainerProps) {
  return (
    <div className="grid grid-cols-3 gap-6 px-16">
        {
            data.map( (value, index) => {
                return <Card
                        key={index}
                        classAtt="border p-10 rounded-lg shadow-md flex justify-center" 
                        title={value.title ? value.title : ''} 
                        content= {value.body ? value.body : ''}
                        link= {value.url ? value.url : 'https://jsonplaceholder.typicode.com/posts/2'}
                        />
            })
        }
    </div>
  )
}
