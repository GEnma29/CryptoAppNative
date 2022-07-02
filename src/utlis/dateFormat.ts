export function dateFormat(date: string){
    return date === '' || date === null ? 'unknown' : date.split('-').join('/')
}