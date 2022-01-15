export interface Car{
        id: string,
        unlimitedMileage: boolean,
        cancellationDetails: {
          isCancellationFree: boolean,
          freeCancellationEndDate: string,
        },
        fare: {
          totalAmount: number,
          perDay: number,
        },
        vehicle: {
          name: string,
          type: string,
          image:string,
          specifications: {
            baggageCapacity: string,
            passengerCapacity: string,
          },
        },
}