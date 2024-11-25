import React, { useState, useEffect } from 'react';
import BlockTitle from './BlockTitle';
import FormInput from './FormInput';
import FormLabel from './FormLabel';
import PhoneNumberField from './PhoneNumberField';

const AddEditClient = ({ user = null, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  });

  console.log('formData', formData);

  // Populate form data if editing an existing user
  useEffect(() => {
    if (user) {
      setFormData(user);
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({});
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onPhoneChange = (phone) => {
    setFormData((prevData) => ({
      ...prevData,
      phone,
    }));
  };


  return (
    <div className="font-figtree">
      <BlockTitle className="text-[22px]">
        {user ? 'Edit client' : 'Add a new client'}
      </BlockTitle>

      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 mt-8 ">
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
          <FormLabel htmlFor="phone">Phone</FormLabel>
          <PhoneNumberField
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={onPhoneChange}
            placeholder="Enter phone number"
            required
          />
        </div>

        {/* <div>
          <label className="block text-sm font-medium text-gray-700">
            Role
          </label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          >
            <option value="">Select role</option>
            <option value="admin">Admin</option>
            <option value="editor">Editor</option>
            <option value="viewer">Viewer</option>
          </select>
        </div> */}
        {/* <div className="flex justify-end space-x-2">
          <button
            type="button"
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            {user ? "Update" : "Save"}
          </button>
        </div> */}
      </form>
    </div>
  );
};

export default AddEditClient;
