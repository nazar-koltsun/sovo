import React, { useState, useEffect } from 'react';
import BlockTitle from './BlockTitle';
import FormInput from './FormInput';
import FormLabel from './FormLabel';
import PhoneNumberField from './PhoneNumberField';
import Button from './Button';
import FileUpload from './FileUpload';

// This is for testing when user exist
// TODO: remove after testing
// const clientData = {
//   "name": "John",
//   "surname": "Doe",
//   "address": "123 Elm Street",
//   "phone": "+123456789",
//   "umowa_deweloperska": "ABC123",
//   "date": "2023-11-01",
//   "flat": "12A",
//   "square": "45",
//   "buyers": [
//     {
//       "id": 1,
//       "name": "Alice",
//       "surname": "Smith",
//       "address": "456 Maple Avenue",
//       "pesel": "12345678901"
//     },
//     {
//       "id": 2,
//       "name": "Bob",
//       "surname": "Johnson",
//       "address": "789 Oak Lane",
//       "pesel": "98765432109"
//     }
//   ],
//   "net_price": "100000",
//   "gross_price": "123000",
//   "liczba_rat": "5",
//   "installments": [
//     { "id": 1, "percentage": 20 },
//     { "id": 2, "percentage": 20 },
//     { "id": 3, "percentage": 20 },
//     { "id": 4, "percentage": 20 },
//     { "id": 5, "percentage": 20 }
//   ],
//   "file": {
//     "name": "contract.pdf",
//     "type": "application/pdf",
//     "size": 204800
//   }
// }

const AddEditClient = ({ client = null, onSave, onCancel }) => {
  const [filePreview, setFilePreview] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    address: '',
    phone: '',
    umowa_deweloperska: '',
    date: '',
    flat: '',
    square: '',
    buyers: [
      {
        id: Math.random() * 100,
        name: '',
        surname: '',
        address: '',
        pesel: '',
      },
    ],
    net_price: '',
    gross_price: '',
    liczba_rat: '',
    installments: [], // Installments dynamically populated based on "liczba_rat"
    file: null, // Store uploaded file
  });

  // Populate form data if editing an existing client
  useEffect(() => {
    if (client) {
      setFormData(client);
    }
  }, [client]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({});
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      // Update installments when "liczba_rat" changes
      if (name === 'liczba_rat') {
        const numInstallments = parseInt(value, 10) || 0;
        const updatedInstallments = Array.from(
          { length: numInstallments },
          (_, index) => ({
            id: index + 1,
            percentage: '',
          })
        );
        return {
          ...prevData,
          liczba_rat: value,
          installments: updatedInstallments,
        };
      }
      return { ...prevData, [name]: value };
    });
  };

  const onPhoneChange = (phone) => {
    setFormData((prevData) => ({
      ...prevData,
      phone,
    }));
  };

  const handleBuyerChange = (id, field, value) => {
    setFormData((prevData) => {
      const updatedBuyers = [...prevData.buyers];
      const index = updatedBuyers.findIndex((buyer) => buyer.id === id);
      updatedBuyers[index] = { ...updatedBuyers[index], [field]: value };
      return { ...prevData, buyers: updatedBuyers };
    });
  };

  const handleInstallmentChange = (id, value) => {
    setFormData((prevData) => {
      const updatedInstallments = prevData.installments.map((inst) =>
        inst.id === id ? { ...inst, percentage: value } : inst
      );
      return { ...prevData, installments: updatedInstallments };
    });
  };

  const addBuyer = () => {
    setFormData((prevData) => ({
      ...prevData,
      buyers: [
        ...prevData.buyers,
        {
          id: Math.random() * 100,
          name: '',
          surname: '',
          address: '',
          pesel: '',
        },
      ],
    }));
  };

  const removeBuyer = (id) => {
    setFormData((prevData) => ({
      ...prevData,
      buyers: prevData.buyers.filter((buyer) => buyer.id !== id),
    }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type (only allow images and PDFs)
      const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
      if (!allowedTypes.includes(file.type)) {
        alert('Only PDF or image files (JPEG/PNG) are allowed.');
        return;
      }

      // Set file in state
      setFormData((prevData) => ({ ...prevData, file }));

      // Generate preview if it's an image
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = () => setFilePreview(reader.result);
        reader.readAsDataURL(file);
      } else {
        setFilePreview(null); // No preview for PDFs
      }
    }
  };

  const handleRemoveFile = () => {
    setFormData((prevData) => ({ ...prevData, file: null }));
    setFilePreview(null);
  };

  return (
    <div className="font-figtree max-h-[calc(100vh-40px)]">
      <BlockTitle className="text-[22px]">
        {client ? 'Edit client' : 'Add a new client'}
      </BlockTitle>

      <form onSubmit={handleSubmit} className="grid max-600:block max-600:space-y-4 md:grid-cols-2 gap-4 mt-8 ">
        <div>
          <FormLabel htmlFor="name">Name</FormLabel>
          <FormInput
            id="name"
            name="name"
            value={formData.name}
            onChange={onChange}
            placeholder="Enter name"
            required
          />
        </div>

        <div>
          <FormLabel htmlFor="surname">Surname</FormLabel>
          <FormInput
            id="surname"
            name="surname"
            value={formData.surname}
            onChange={onChange}
            placeholder="Enter surname"
            required
          />
        </div>

        <div>
          <FormLabel htmlFor="phone">Phone</FormLabel>
          <PhoneNumberField
            id="phone"
            name="phone"
            phone={formData.phone}
            onChange={onPhoneChange}
            placeholder="Enter phone number"
            required
          />
        </div>

        <div>
          <FormLabel htmlFor="address">Address</FormLabel>
          <FormInput
            id="address"
            name="address"
            value={formData.address}
            onChange={onChange}
            placeholder="Enter address"
            required
          />
        </div>

        <div>
          <FormLabel htmlFor="umowa_deweloperska">Umowa deweloperska</FormLabel>
          <FormInput
            id="umowa_deweloperska"
            name="umowa_deweloperska"
            value={formData.umowa_deweloperska}
            onChange={onChange}
            placeholder="Enter Umowa deweloperska"
            required
          />
        </div>

        <div>
          <FormLabel htmlFor="date">Date</FormLabel>
          <FormInput
            id="date"
            type="date"
            name="date"
            value={formData.date}
            onChange={onChange}
            placeholder="Enter date"
            required
          />
        </div>

        <div>
          <FormLabel htmlFor="flat">Mieszkanie</FormLabel>
          <FormInput
            id="flat"
            name="flat"
            value={formData.flat}
            onChange={onChange}
            placeholder="Enter flat number"
            required
          />
        </div>

        <div>
          <FormLabel htmlFor="square">Powierzchnia (space in m2)</FormLabel>
          <FormInput
            id="square"
            type="number"
            name="square"
            value={formData.square}
            onChange={onChange}
            placeholder="Enter square"
            required
          />
        </div>
        <div className="col-span-2">
          <p className="block text-sm font-medium text-[var(--arsenic)]">
            Nabywa (buyer)
          </p>
          <div className="px-3 py-2 border rounded-md text-[var(--electric-blue)]">
            <div className="grid grid-cols-2 gap-4 max-600:grid-cols-1">
              {formData.buyers.map((buyer) => (
                <div key={buyer.id} className="space-y-3">
                  <FormLabel>
                    Buyer Name
                    <FormInput
                      name="buyer_name"
                      value={buyer.name}
                      onChange={(e) =>
                        handleBuyerChange(buyer.id, 'name', e.target.value)
                      }
                      placeholder="Enter Buyer Name"
                      required
                    />
                  </FormLabel>

                  <FormLabel>
                    Buyer Surname
                    <FormInput
                      id="buyer_surname"
                      name="buyer_surname"
                      value={buyer.surname}
                      onChange={(e) =>
                        handleBuyerChange(buyer.id, 'surname', e.target.value)
                      }
                      placeholder="Enter Buyer Surname"
                      required
                    />
                  </FormLabel>

                  <FormLabel>
                    Buyer Address
                    <FormInput
                      id="buyer_address"
                      name="buyer_address"
                      value={buyer.address}
                      onChange={(e) =>
                        handleBuyerChange(buyer.id, 'address', e.target.value)
                      }
                      placeholder="Enter Buyer Address"
                      required
                    />
                  </FormLabel>

                  <FormLabel>
                    Buyer PESEL
                    <FormInput
                      id="buyer_pesel"
                      name="buyer_pesel"
                      value={buyer.pesel}
                      onChange={(e) =>
                        handleBuyerChange(buyer.id, 'pesel', e.target.value)
                      }
                      placeholder=" Enter Buyer PESEL"
                      required
                    />
                  </FormLabel>
                  <Button
                    className="text-[var(--maroon)] font-medium pl-0 pt-0 pr-0 pb-0"
                    variant="flat"
                    onClick={() => removeBuyer(buyer.id)}
                  >
                    Remove
                  </Button>
                </div>
              ))}
            </div>
            <Button
              className="mt-4 pt-[7px] pb-[7px] pl-[15px] pr-[15px]"
              type="button"
              onClick={addBuyer}
            >
              Add Buyer
            </Button>
          </div>
        </div>

        <div>
          <FormLabel htmlFor="net_price">Net price</FormLabel>
          <FormInput
            id="net_price"
            type="number"
            name="net_price"
            value={formData.net_price}
            onChange={onChange}
            placeholder="Enter Net price"
            required
          />
        </div>

        <div>
          <FormLabel htmlFor="gross_price">Gross price</FormLabel>
          <FormInput
            id="gross_price"
            type="number"
            name="gross_price"
            value={formData.gross_price}
            onChange={onChange}
            placeholder="Enter Gross price"
            required
          />
        </div>

        <div>
          <FormLabel htmlFor="liczba_rat">Liczba rat</FormLabel>
          <FormInput
            id="liczba_rat"
            type="number"
            name="liczba_rat"
            value={formData.liczba_rat}
            onChange={onChange}
            min="1"
            max="20"
            placeholder="Enter the number of installments"
            required
          />
        </div>

        {formData.installments.length > 0 && (
          <div className="col-span-2">
            <p className="block text-sm font-medium text-[var(--arsenic)]">
              Installments
            </p>
            <div className="px-3 py-2 border rounded-md text-[var(--electric-blue)]">
              {formData.installments.map((installment) => (
                <div key={installment.id} className="mb-4">
                  <FormLabel>
                    Installment {installment.id}: Percentage of Gross Price
                    <FormInput
                      type="number"
                      value={installment.percentage}
                      onChange={(e) =>
                        handleInstallmentChange(installment.id, e.target.value)
                      }
                      placeholder="Enter percentage"
                      required
                    />
                  </FormLabel>
                </div>
              ))}
            </div>
          </div>
        )}

        <FileUpload
          file={formData.file}
          onChange={handleFileUpload}
          onRemoveFile={handleRemoveFile}
          filePreview={filePreview}
        />

        <div className="col-span-2 flex justify-end space-x-2 pb-8 mt-10">
          <Button
            type="button"
            variant='bordered'
            onClick={onCancel}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant='default'
          >
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddEditClient;
