
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

export function formatdate(datestring: string): string {

    return dayjs(datestring).fromNow(true)

}

export function durationFromSeconds(durationSeconds: number){

    const secondsInAnHour = 3600;
    
    if(durationSeconds >= secondsInAnHour){

        return `${new Date(durationSeconds * 1000).toISOString().substring(11, 19)}`;
    }
    return new Date(durationSeconds * 1000).toISOString().substring(14, 19);
}

