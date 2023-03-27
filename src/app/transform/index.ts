
class Transform {

    transformCollection<T>(data: T[], items: string[]) {
        return data.map((dataItem: T) => {
            let trnasformedDataItem = {};
            items.map((item: string) => { trnasformedDataItem[item] = dataItem?.[item] })
            return trnasformedDataItem;
        });
    
    }
}

export default Transform