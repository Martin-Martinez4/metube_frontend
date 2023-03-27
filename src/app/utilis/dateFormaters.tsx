
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

export function formatdate(datestring: string): string {

    return dayjs(datestring).fromNow(true)

}

