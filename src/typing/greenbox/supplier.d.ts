declare namespace ISupplier {
    interface ISupplierMain {
        SupplierId: string
        SupplierCode: string
        Place: string
        SupplierName: string
        ContactPerson: string
        Phone: string
        Mobile: string
        Address: string
        PostalCode: string
        CompanyName: string
        TaxId: string
        BankAccountName: string
        BankName: string
        BranchCode: string
        BankAccount: string
        Email: string
        PaymentCycle: IEnum.PaymentCycleTypeEnum
        SupplierType: IEnum.SupplierTypeEnum
        Remark: string
        SupplierLevel: IEnum.SupplierLevelEnum
        SupplierScore: number
        SupplierLevelRemark: string
        Enable: boolean
        CreateDate: string
        UpdateDate: string
    }
}