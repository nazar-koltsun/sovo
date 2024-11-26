import Button from './Button';
import FormLabel from './FormLabel';

const FileUpload = ({ file, onChange, onRemoveFile, filePreview }) => {
  return (
    <div>
      <FormLabel htmlFor="file">Upload File</FormLabel>
      <input
        id="file"
        type="file"
        accept=".pdf, .jpg, .jpeg, .png"
        onChange={onChange}
        className="block w-full text-sm text-gray-500
                   file:mr-4 file:py-2 file:px-4
                   file:rounded-full file:border-0
                   file:text-sm file:font-semibold
                   file:bg-blue-50 file:text-blue-700
                   hover:file:bg-blue-100"
      />
      {filePreview ? (
        <>
          <img
            src={filePreview}
            alt="Preview"
            className="mt-4 w-32 h-32 object-cover border"
          />
          <Button
            variant="flat"
            className="mt-4 pt-0 pl-0 pr-0 pb-0 text-[var(--maroon)]"
            onClick={onRemoveFile}
          >
            Remove file
          </Button>
        </>
      ) : (
        file && (
          <p className="mt-4 text-sm text-gray-700">
            Uploaded file: {file.name}
          </p>
        )
      )}
    </div>
  );
};

export default FileUpload;
