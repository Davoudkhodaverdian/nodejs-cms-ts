
class Transform {

    transform<T>(dataItem: T, items: string[]) {

            let trnasformedDataItem = {};
            items.map((item: string) => { trnasformedDataItem[item] = dataItem?.[item] })
            return trnasformedDataItem;
    }

    transformCollection<T>(data: T[], items: string[]) {

        return data.map((dataItem: T) => {
            let trnasformedDataItem = {};
            items.map((item: string) => { trnasformedDataItem[item] = dataItem?.[item] })
            return trnasformedDataItem;
        });
    
    }
}

export default Transform