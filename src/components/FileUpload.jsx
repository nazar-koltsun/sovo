import Button from './Button';
import FormLabel from './FormLabel';

const FileUpload = ({
  files,
  filePreviews,
  onChange,
  onRemoveFile,
}) => {
  return (
    <div>
      <FormLabel htmlFor="file">Upload Files</FormLabel>
      <input
        id="file"
        type="file"
        accept=".pdf, .jpg, .jpeg, .png"
        onChange={onChange}
        multiple
        className="hidden"
      />
      <label
        htmlFor="file"
        className="block w-full text-sm text-gray-500 py-2 px-4 border-2 border-dashed rounded-full cursor-pointer text-center
                   file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
      >
        {files.length === 0 ? 'Choose files to upload' : 'Change files'}
      </label>

      <div className="mt-4">
        {files.map(({ id, file }) => (
          <div key={id} className="flex items-center space-x-4">
            {filePreviews[id] ? (
              <img
                src={filePreviews[id]}
                alt={file.name}
                className="w-16 h-16 object-cover border"
              />
            ) : (
              <p className="text-sm text-gray-700">{file.name}</p>
            )}
            <Button
              variant="flat"
              className="text-[var(--maroon)] px-0 py-0"
              onClick={() => onRemoveFile(id)}
            >
              Remove
            </Button>
          </div>
        ))}
      </div>

      <p className="mt-4 text-sm text-gray-500">
        Total files uploaded: {files.length}
      </p>
    </div>
  );
};

export default FileUpload;
