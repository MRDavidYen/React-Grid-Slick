declare namespace IPurchaseRequisition {
    interface IPurchaseRequisitionMain {
        PurchaseRequisitionId: string
        SupplierId: string
        RawMaterialId: string
        InternationalCode: string
        CommodityItem: string
        Specification: string
        Quantity: number
        Cost: number
        GrossMargin: number
        Freight: number
        SalesPrice: number
        Unit: IEnum.UnitTypeEnum
        Department: IEnum.DepartmentEnum
        ExpectedArrivalDate: string
        FirstAudit: boolean
        FirstPassedAudit: boolean
        SecondAudit: boolean
        SecondPassedAudit: boolean
        Enable: boolean
        CreateDate: string
        UpdateDate: string
    }

    interface IPurchaseRequisitionEstimate {
        PurchaseRequisitionEstimateId: string
        SupplierId: string
        InternationalCode: string
        CommodityItem: string
        Specification: string
        Cost: number
        GrossMargin: number
        Freight: number
        SalesPrice: number
        Unit: IEnum.UnitTypeEnum
        ProductCategory: IEnum.ProductCategoryEnum
        Department: IEnum.DepartmentEnum
        WeekQuantity: number
        MonthQuantity: number
        QuarterQuantity: number
        RequirementFormula: string
        CreateDate: string
        UpdateDate: string
    }
}