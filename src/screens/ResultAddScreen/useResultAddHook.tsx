import {useState} from 'react';
import * as Yup from 'yup';

const useResultAddHook = () => {
  const initialValues = {
    first: '',
    second: '',
    third: '',
    fourth: '',
    fifth: '',
    date: new Date(),
    guarantee: [] as number[],
  };

  const validationSchema = Yup.object().shape({
    first: Yup.number()
      .required('First Prize is required')
      .integer('No point value')
      .min(100)
      .max(999)
      .typeError('Only Number'),
    second: Yup.number()
      .required('Second Prize is required')
      .integer('No point value')
      .min(100)
      .max(999)
      .typeError('Only Number'),
    third: Yup.number()
      .required('Third Prize is required')
      .integer('No point value')
      .min(100)
      .max(999)
      .typeError('Only Number'),
    fourth: Yup.number()
      .required('Fourth Prize is required')
      .integer('No point value')
      .min(100)
      .max(999)
      .typeError('Only Number'),
    fifth: Yup.number()
      .required('Fifth Prize is required')
      .integer('No point value')
      .min(100)
      .max(999)
      .typeError('Only Number'),
    guarantee: Yup.array().of(
      Yup.number()
        .integer('No point value')
        .min(100)
        .max(999)
        .typeError('Only Number'),
    ),
    date: Yup.date().required('Date is required'),
  });

  const handleSave = (values: typeof initialValues) => {
    console.log('Form Data:', values);
  };

  const [tempGuaranteeInput, setTempGuaranteeInput] = useState('');

  return {
    validationSchema,
    tempGuaranteeInput,
    handleSave,
    initialValues,
    setTempGuaranteeInput,
  };
};

export default useResultAddHook;
