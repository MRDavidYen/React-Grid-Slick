declare namespace IPurchase {
    interface IPurchaseMain {
        PurchaseId: string
        SupplierId: string
        PurchaseRequisitionId: string
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
        ProductCategory: IEnum.ProductCategoryEnum
        Department: IEnum.DepartmentEnum
        FirstAudit: boolean
        FirstPassedAudit: boolean
        SecondAudit: boolean
        SecondPassedAudit: boolean
        Enable: boolean
        CreateDate: string
        UpdateDate: string
    }
}