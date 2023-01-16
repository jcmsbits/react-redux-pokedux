import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import { useDispatch } from "react-redux";
import { setFavorite } from "../slices/dataslice";
import { StartButton } from "./StartButton";
const PokemonCard =({name, image, types, id,favorite})=>{
    const distpach = useDispatch();
    const handleDistpach=()=>{distpach(setFavorite(id))}
    
    const typeString= types.map(elemt=>elemt.type.name).join(", ")
    return(
    <Card
        
        title={name}
        cover={<img src={image} alt={name}/>}
        extra={<StartButton isFavorite={favorite} onClick={handleDistpach}/>}
   >
        <Meta description={typeString}/>
    </Card>)
}

export default PokemonCard;