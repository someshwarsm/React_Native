import { Alert } from "react-native";

export default function calculatePremium(inputData) {
    if(inputData.policy=="TwoWheelerLiabilityPolicy"){
        let liabilityPremium=0, llToPaidDriverValue=0, llToEmployeesValue=0, paToUnnamedPassengerValue=0, paToOwnerDriver=0, netTPPremium=0, netPremiumPayable=0;

        const resultData = {
            liabilityPremium,
            paToOwnerDriver,
            llToPaidDriverValue,
            llToEmployeesValue,
            paToUnnamedPassengerValue,
            netTPPremium,
            netPremiumPayable
        }

        if(inputData.cubicCapacity=="< 75 CC"){
            liabilityPremium=538
        }
        else if(inputData.cubicCapacity=="76-150 CC"){
            liabilityPremium=714
        }
        else if(inputData.cubicCapacity=="151-350 CC"){
            liabilityPremium=1366
        }
        else{
            liabilityPremium=2804
        }

        if(inputData.paToOwnerDriverValue=="1 YEAR"){
            paToOwnerDriver=275
        }
        else if(inputData.paToOwnerDriverValue=="5 YEAR"){
            paToOwnerDriver = 275 * 5
        }
        
        
        if(inputData.llToPaidDriverValue=="Yes")
            llToPaidDriverValue=50

        
        if(inputData.llToEmployeesValue=="Yes")
            llToEmployeesValue=50

        paToUnnamedPassengerValue = inputData.sumInsuredEachValue / 2000;

        paToUnnamedPassengerValue = paToUnnamedPassengerValue * inputData.noOfPassengers;

        netTPPremium = liabilityPremium + paToOwnerDriver + llToPaidDriverValue + llToEmployeesValue + paToUnnamedPassengerValue;

        resultData.liabilityPremium=liabilityPremium;
        resultData.paToOwnerDriver=paToOwnerDriver;
        resultData.llToEmployeesValue=llToEmployeesValue;
        resultData.llToPaidDriverValue=llToPaidDriverValue;
        resultData.paToUnnamedPassengerValue=paToUnnamedPassengerValue
        resultData.netTPPremium=netTPPremium;
        resultData.netPremiumPayable = Math.round(netTPPremium + (netTPPremium * 0.18))
        

        return resultData;
    }
    

}
