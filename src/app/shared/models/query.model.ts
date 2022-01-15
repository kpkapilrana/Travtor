export interface Query{
    search:Search,
    sort:Sort
}

export interface Search{
    pick_up_location:string;
    pick_up_date:Date|null;
    drop_off_date:Date|null;
        pick_up_time:string;
        drop_off_time:string;
        driver_age:number;
}

export interface Sort{
    id:string;
    sort_type:string;
}