import Weekends from './Weekends'
import Workdays from './Workdays'
export default function CurrentMessage(){
    const day = new Date().getDay();
    if(day>=1&&day<=5){
        return <Workdays/>
    }
    else return <Weekends/>
}
