import React from 'react';

const getFileTypeIcon = (type) => {
  switch (type) {
    case 'pdf':
      return (
        <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      );
    case 'image':
      return (
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L20 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-2-4l4.586-4.586a2 2 0 012.828 0L20 6m-2-2l1.586-1.586a2 2 0 012.828 0L20 2m-2-2V2a2 2 0 00-2 2H2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2h-1z" />
        </svg>
      );
    default:
      return (
        <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-5.447a2 2 0 012.894-3.74L6.456 5 2 9.39a2 2 0 013.74 3.74l5.447 5.447 6.656-6.656a2 2 0 013.74-3.74z" />
        </svg>
      );
  }
};

const ClientFilesList = ({ files }) => {
  return (
    <ul>
      {files.map((file, index) => (
        <li key={index} className="w-64 h-64 bg-white rounded-lg shadow-md p-4 m-4">
          <div className="flex justify-between">
            <div className="w-1/3">
              {getFileTypeIcon(file.type)}
            </div>
            <div className="w-1/2">
              <h2 className="text-lg font-bold">{file.name}</h2>
              <p className="text-sm">{file.size} KB</p>
            </div>
            <div className="w-1/3 text-right">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ClientFilesList;