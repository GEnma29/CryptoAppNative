export function dateFormat(date: string){
    return date === '' || date === 'null' ? 'unknown' : date.split('-').join('/').split('/00/').join().split('00').join().split(',,').join()
}