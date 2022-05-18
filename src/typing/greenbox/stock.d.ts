declare namespace IStock {
    interface IStockMain {
        
    }

    interface IStockIn {
        StockInId: string
        PurchaseId: string
        RawMaterialId: string
        InternationalCode: string
        CommodityItem: string
        Specification: string
        Quantity: number
        Unit: IEnum.UnitTypeEnum
        CommodityCategory: IEnum.ProductCategoryEnum
        Department: IEnum.DepartmentEnum
        ExpiryDate: string
        PreservationDays: number
        InspectionReport: IEnum.StockInInspectionReportEnum
        FirstAudit: boolean
        FirstPassedAudit: boolean
        ArrivalDate: string
        CreateDate: string
        UpdateDate: string
    }

    interface IStockSplit {
        SplitProcessingID: string
        StockInId: string
        PurchaseId: string
        RawMaterialId: string
        InternationalCode: string
        CommodityItem: string
        Specification: string
        UnitPerSpecification: number
        Cost: number
        SalesPrice: number
        Quantity: number
        Unit: IEnum.UnitTypeEnum
        Department: IEnum.DepartmentEnum
        CommodityCategory: IEnum.ProductCategoryEnum
        FirstAudit: boolean
        FirstPassedAudit: boolean
        CreateDate: string
        UpdateDate: string
    }

    interface IStockReturn {
        StockReturnID: string
        PurchaseId: string
        RawMaterialId: string
        InternationalCode: string
        CommodityItem: string
        Specification: string
        Quantity: number
        UnitName: number
        CommodityCategory: IEnum.ProductCategoryEnum
        FirstAudit: boolean
        FirstPassedAudit: boolean
        CreateDate: string
        UpdateDate: string
    }
}