declare namespace IEnum {
    enum PaymentCycleTypeEnum {
        Month60Days = 1,
        Month45Days = 2,
        Month30Days = 3,
        Month15Days = 4
    }

    enum SupplierTypeEnum {
        Vegetable = 1,
        Fruit = 2,
        Seafood = 3,
        Meat = 4,
        Manufactured = 5,
        Babyfood = 6,
        Other = 7
    }

    enum SupplierLevelEnum {
        A = 'A',
        B = 'B',
        C = 'C'
    }

    enum QualityLevelEnum {
        Great = 1,
        Good = 2,
        Normal = 3
    }

    enum TaxTypeEnum {
        TaxFree = 1,
        Taxable = 2
    }

    enum CertificationTypeEnum {
        Organic = 1,
        Traceable = 2,
        ISO22000 = 3,
        HACCP = 4
    }

    enum InspectionReportTypeEnum {
        Organic = 1,
        Standard = 2,
        ISO22000 = 3,
        HACCP = 4
    }

    enum StockInInspectionReportEnum {
        Reject = 1,
        Pass = 2,
        LowerThenHalf = 3,
        NoToxic = 4,
        NoCert = 5
    }

    enum UnitTypeEnum {
        Box = 1,
        Grain = 2,
        Catty = 3,
        Pack = 4,
        Bottle = 5,
        Bag = 6,
        Kilogram = 7,
        Can = 8,
        Case = 9,
        Set = 10
    }

    enum ProductCategoryEnum {
        Fruit = 1,
        Vegetable = 2,
        Frozen = 3,
        Babyfood = 4,
        Manufactured = 5
    }

    enum DepartmentEnum {
        MainWareHouse = 1,
        Boxes = 2,
        QuickOut = 3,
        Frozen = 4,
        Babyfood = 5,
        DirectDelivery = 6,
        BabySchool = 7
    }
}