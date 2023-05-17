import { IoMdRestaurant } from "react-icons/io";
import { BsShop } from "react-icons/bs";
import {SiMcdonalds} from "react-icons/si";
import CategoryIconComponent from "../../ui/icons-category-component/CategoryIconComponent";
import { FaPizzaSlice } from "react-icons/fa";
import {BiHealth} from 'react-icons/bi'
import {ImScissors} from "react-icons/im";
import {GiGamepad} from 'react-icons/gi'
import {TbBottle} from 'react-icons/tb'
import {AiFillCar} from 'react-icons/ai'
import {BiCoffeeTogo} from 'react-icons/bi'
import {MdSmokingRooms} from 'react-icons/md'
import {BsHouseDoorFill} from 'react-icons/bs'

export const categoryIconMap: Record<string, JSX.Element> = {
  Products: <CategoryIconComponent icon={<BsShop/>} category={'Products'}/>,
  Silpo: <CategoryIconComponent icon={<BsShop/>} category={'Silpo'}/>,
  Atb: <CategoryIconComponent icon={<BsShop/>} category={'Atb'}/>,
  Restaurants: <CategoryIconComponent icon={<IoMdRestaurant/>} category={'Restaurants'}/>,
  Caffe: <CategoryIconComponent icon={<IoMdRestaurant/>} category={'Restaurants'}/>,
  Mcdonalds: <CategoryIconComponent icon={<SiMcdonalds/>} category={'Mcdonalds'}/>,
  Pizza: <CategoryIconComponent icon={<FaPizzaSlice/>} category={'Pizza'}/>,
  HousePaymant: <CategoryIconComponent icon={<BsHouseDoorFill/>} category={'House Paymant'}/>,
  Eva: <CategoryIconComponent icon={<BiHealth/>} category={'Health'}/>,
  Pharmacy: <CategoryIconComponent icon={<BiHealth/>} category={'Health'}/>,
  Vaip: <CategoryIconComponent icon={<MdSmokingRooms/>} category={'Vaip'}/>,
  Hookah: <CategoryIconComponent icon={<MdSmokingRooms/>} category={'Hookah'}/>,
  Hairdresser: <CategoryIconComponent icon={<ImScissors/>} category={'Hairdresser'}/>,
  Entertainment: <CategoryIconComponent icon={<GiGamepad/>} category={'Entertainment'}/>,
  Cola: <CategoryIconComponent icon={<TbBottle/>} category={'Cola'}/>,
  Taxi: <CategoryIconComponent icon={<AiFillCar/>} category={'Taxi'}/>,
  Coffe: <CategoryIconComponent icon={<BiCoffeeTogo/>} category={'Coffe'}/>,
};
