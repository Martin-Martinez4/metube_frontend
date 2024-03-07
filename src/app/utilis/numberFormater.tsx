
// Think of a better name later
export function formatNumber(numberToFormat: number | undefined | null){

    if(numberToFormat === undefined || numberToFormat === null){
        return
    }

    if(numberToFormat < 1000){

        return numberToFormat.toString()
    }
    else if(numberToFormat >= 1000 && numberToFormat < 1000000){
        let numberConvertedToString = (numberToFormat/1000).toString();
        const locationOfDecimal = numberConvertedToString.indexOf(".");

        if(locationOfDecimal >= 0){

            if(numberConvertedToString[locationOfDecimal + 2] === "0"){

                numberConvertedToString = numberConvertedToString.substring(0, locationOfDecimal + 2);
            }
            else{

                numberConvertedToString = numberConvertedToString.substring(0, locationOfDecimal + 3);
            }

        }

        return numberConvertedToString + "K";
    }
    else if(numberToFormat >= 1000000){

        let numberConvertedToString = (numberToFormat/1000000).toString();
        const locationOfDecimal = numberConvertedToString.indexOf(".");

        if(locationOfDecimal >= 0){

            if(numberConvertedToString[locationOfDecimal + 2] === "0"){

                numberConvertedToString = numberConvertedToString.substring(0, locationOfDecimal + 2);
            }
            else{

                numberConvertedToString = numberConvertedToString.substring(0, locationOfDecimal + 3);
            }


        }

        return numberConvertedToString + "M";
    }

    return numberToFormat.toString()


}

