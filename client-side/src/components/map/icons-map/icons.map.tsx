import { IoMdRestaurant } from "react-icons/io";
import { BsShop } from "react-icons/bs";
import {SiMcdonalds} from "react-icons/si";
import CategoryIconComponent from "../../ui/icons-category-component/CategoryIconComponent";
import { FaPizzaSlice } from "react-icons/fa";
import {BiHealth} from 'react-icons/bi'
import {ImScissors} from "react-icons/im";
import {GiGamepad} from 'react-icons/gi'
import {TbBottle} from 'react-icons/tb'

export const categoryIconMap: Record<string, JSX.Element> = {
  Products: <CategoryIconComponent icon={<BsShop/>} category={'Products'}/>,
  Silpo: <CategoryIconComponent icon={<BsShop/>} category={'Silpo'}/>,
  Atb: <CategoryIconComponent icon={<BsShop/>} category={'Atb'}/>,
  Restaurants: <CategoryIconComponent icon={<IoMdRestaurant/>} category={'Restaurants'}/>,
  Caffe: <CategoryIconComponent icon={<IoMdRestaurant/>} category={'Restaurants'}/>,
  Mcdonalds: <CategoryIconComponent icon={<SiMcdonalds/>} category={'Mcdonalds'}/>,
  Pizza: <CategoryIconComponent icon={<FaPizzaSlice/>} category={'Pizza'}/>,
  HousePaymant: <CategoryIconComponent icon={<FaPizzaSlice/>} category={'House Paymant'}/>,
  Eva: <CategoryIconComponent icon={<BiHealth/>} category={'Health'}/>,
  Pharmacy: <CategoryIconComponent icon={<BiHealth/>} category={'Health'}/>,
  Vaip: <CategoryIconComponent icon={<BiHealth/>} category={'Vaip'}/>,
  Hairdresser: <CategoryIconComponent icon={<ImScissors/>} category={'Hairdresser'}/>,
  Entertainment: <CategoryIconComponent icon={<GiGamepad/>} category={'Entertainment'}/>,
  Cola: <CategoryIconComponent icon={<TbBottle/>} category={'Cola'}/>,
};
