export type PackageFormData = {
  title: string;
  singleRate: string;
  singleCommission: string;
  doubleRate: string;
  doubleCommission: string;
  lskSuperRate: string;
  lskSuperCommission: string;
  boxRate: string;
  boxCommission: string;
};

export type PackageFormDataForSending = {
  name: string;
  single: {
    rate: number;
    commission: number;
  };
  double: {
    rate: number;
    commission: number;
  };
  lskSuper: {
    rate: number;
    commission: number;
  };
  box: {
    rate: number;
    commission: number;
  };
};
