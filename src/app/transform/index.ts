
class Transform {

    transform<T>(dataItem: T, items: string[]) {

            let trnasformedDataItem = {};
            items.map((item: string) => { 
                if (item === "updated_at")  trnasformedDataItem[item] = dataItem?.["updatedAt"]
                else if (item === "created_at")  trnasformedDataItem[item] = dataItem?.["createdAt"]
                else trnasformedDataItem[item] = dataItem?.[item]
             })
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