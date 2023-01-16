import { Button } from "antd";
import { StarOutlined } from "@ant-design/icons";
import { StarFilled } from "@ant-design/icons";
export const StartButton =({isFavorite, onClick})=>{
    const Ico = isFavorite?StarFilled:StarOutlined;
    return <Button icon={<Ico/>} onClick={onClick}></Button>

}