export interface User {
    firstName: string;
    lastName: string;
    email: string;
    companyId: number;
    phone: string;
    fbToken: string;
    id: number;
    avatar: string;
    title: string;
    cell: string;
    status: number;
    callNumber: string;
    location: ILocation;
}

export interface ILocation {
    locationName: string,
       lng: string,
       activity: string,
       created: string,
       bearing: number,
       accuracy: number,
       speed: number,
       duration: number,
       locationColor: string,
       locationId: number,
       statusName: string,
       personId: number,
       id: number,
       lat: string,
       statusCode: number,
}