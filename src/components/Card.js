import { useState } from 'react';
function Card({id,image,info,name,price,removeTour})

{
    // console.log(props)
    // const description = props.info;
    const[readmore,setreadmore] = useState(false);
    let subDescription = readmore?info:`${info.substring(0,200)}...`;
    
    //Readmore functionality
    
    function readmoreHandler()
    {
        setreadmore(!readmore);
    }

    return(
    <div className='card'>
    {/* image */}
        <img src={image}></img>


        {/* Tour-all-details */}

     <div className="tour-info">
             {/* tour-details */}
        <div className="tour-details">
            <h4 className="tour-price">{price}</h4>
            <h4 className="tour-name">{name}</h4>
        </div>

        {/* tour-description */}
        <div className="description">
            {subDescription}

            {/* read-more */}
            <span className="read-more" onClick={readmoreHandler}>
                {readmore? '...Show Less' : 'Read More'}
            </span>
        </div>
    </div>
        {/* button */}
        <button className="btn-red" onClick={()=>removeTour(id)}>
            Not intrested
        </button>
    </div>
 )
}
export default Card;