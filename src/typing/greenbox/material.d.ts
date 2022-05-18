declare namespace IMaterial {
    interface IMarterialMain {
        RawMaterialId: string
        SupplierId: string
        InternationalCode: string
        CommodityItem: string
        Specification: string
        QualityLevel: IEnum.QualityLevelEnum
        Cost: number
        TaxType: IEnum.TaxTypeEnum
        Price: number
        GrossProfit: number
        Freight: number
        SalesPrice: number
        MinimumOrderQuantity: number
        SafetyStock: number
        TurnoverDay: number
        ExpiryDate: string
        ExpiryDateNotice: number
        Certification: IEnum.CertificationTypeEnum[]
        InspectionReport: IEnum.InspectionReportTypeEnum[]
        Unit: IEnum.UnitTypeEnum
        LargeCategory: string
        MiddleCategory: string
        Enable: boolean
        CreateDate: string
        UpdateDate: string
    }

    interface IMarterialActivity {
        RawMaterialActivityId: string
        SupplierId: string
        RawMaterialId: string
        InternationalCode: string
        CommodityItem: string
        Specification: string
        QualityLevel: IEnum.QualityLevelEnum
        Cost: number
        SalesPrice: number
        TaxType: IEnum.TaxTypeEnum
        GrossProfit: number
        ActivityStartDate: string
        ActivityEndDate: string
        PurchaseStartDate: string
        PurchaseEndDate: string
        Enable: boolean
        CreateDate: string
        UpdateDate: string
        FirstAudit: boolean
        FirstPassedAudit: boolean
        SecondAudit: boolean
        SecondPassedAudit: boolean
    }

    interface IMarterialAdjust {
        RawMaterialAdjustId: string
        SupplierId: string
        RawMaterialId: string
        InternationalCode: string
        CommodityItem: string
        Specification: string
        Cost: number
        Price: number
        GrossProfit: number
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