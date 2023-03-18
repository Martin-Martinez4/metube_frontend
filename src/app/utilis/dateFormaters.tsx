
export function formatdate(datestring: string): string{

    const secondsSinceDate = (Date.now() - Date.parse(datestring))/1000;

    console.log(secondsSinceDate)


    if(secondsSinceDate < 3600){

        return `${Math.trunc(secondsSinceDate/60)} mins`
    }

    const minutesSinceDate = secondsSinceDate/60
    if(minutesSinceDate < 1440){

        return `${Math.trunc(secondsSinceDate/60)} hours`
    }

    const hoursSinceDate = minutesSinceDate/60
    if(hoursSinceDate < 168){

        return `${Math.trunc(hoursSinceDate/24)} days`
    }

    const daysSinceDate = hoursSinceDate/24
    if(daysSinceDate < 30){

        return `${Math.trunc(daysSinceDate/30)} weeks`
    }

    const weeksSinceDate = daysSinceDate/30;
    if(weeksSinceDate < 52){

        return `${Math.trunc(weeksSinceDate/4)} months`
    }
    
    else if(weeksSinceDate >= 52){

        return `${Math.trunc(weeksSinceDate/52)} years`
    }

    return secondsSinceDate + "unknows"



}

