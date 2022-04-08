import { LightningElement,track} from 'lwc';

export default class Summary extends LightningElement {

    @track obj=[{'Total_Sprint_Capacity':'100','Total_Estimated_Hours':'100'}];

    @track colorClass='GREEN';
    
    connectedCallback(){
        this.remainHrs();
    }
    remainHrs(){
        
        for(let i=0;i<this.obj.length;i++){
            var a=this.obj[i].Total_Sprint_Capacity-this.obj[i].Total_Estimated_Hours;
            this.obj[i].percentage= a * 100/this.obj[i].Total_Sprint_Capacity ;
        }
        
    }
    
    get colorCode(){
        
        for(let i=0;i<this.obj.length;i++){
            if(this.obj[i].percentage>=0 && this.obj[i].percentage<10){
                return this.colorClass;
            }
            else if (this.obj[i].percentage >=10 && this.obj[i].percentage<=20){
                return this.colorClass='ORANGE';
            }
            else if (this.obj[i].percentage >20){
                return this.colorClass='RED';
            }
        }
    }
}