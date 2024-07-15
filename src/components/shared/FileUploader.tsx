import { useCallback, useState } from 'react';
import { FileWithPath, useDropzone, FileRejection } from 'react-dropzone';
import { Button } from '../ui/button';
import { useToast } from '../ui/use-toast';

type FileUploaderProps = {
  fieldChange: (FILES: File[]) => void,
  mediaUrl: string,
  fileSize: string; 
}

const FileUploader = ({ fieldChange, mediaUrl, fileSize }: FileUploaderProps) => {
  const [file, setFile] = useState<File[]>([]);
  const [fileUrl, setFileUrl] = useState(mediaUrl);
  const { toast } = useToast(); // Initialize the toast hook

  const convertSizeToBytes = (size: string) => {
    const units: { [key: string]: number } = { b: 1, kb: 1024, mb: 1024 * 1024 };
    const match = size.toLowerCase().match(/(\d+)([bkm]*)/);
    if (match) {
      const value = parseInt(match[1], 10);
      const unit = match[2] || 'b';
      return value * units[unit as keyof typeof units];
    }
    return 0;
  };  

  const maxSize = convertSizeToBytes(fileSize);

  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles);
      fieldChange(acceptedFiles);
      setFileUrl(URL.createObjectURL(acceptedFiles[0]));
    }
  }, [fieldChange]);

  const onDropRejected = useCallback((fileRejections: FileRejection[]) => {
    fileRejections.forEach(({ file, errors }) => {
      errors.forEach(e => {
        if (e.code === 'file-too-large') {
          toast({
            title: 'File Too Large',
            description: `File ${file.name} is too large. Maximum file size is ${fileSize}.`,
            variant: 'warning',
          });
        }
      });
    });
  }, [toast, fileSize]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    onDropRejected,
    accept: {
      'image/*': ['.png', '.jpeg', '.jpg', '.svg']
    },
    maxSize
  });

  return (
    <div {...getRootProps()} className='flex flex-center flex-col bg-dark-3 rounded-xl cursor-pointer'>
      <input {...getInputProps()} className='cursor-pointer' />
      {
        fileUrl ? (
          <>
            <div className='flex flex-1 justify-center w-full p-2 lg:p-5'>
              <img
                src={fileUrl} 
                alt="Upload preview"
                className='file_uploader-img'
              />
            </div>
            <p className='file_uploader-label'>Click or drag photo to replace</p>
          </>
        ) : (
          <div className='file_uploader-box'>
            <img
              src='/assets/icons/file-upload.svg'
              alt='file-upload'
              width={96}
              height={77}
            />
            <h3 className='base-medium text-light-2 mb-2 mt-6'>Drag photo here</h3>
            <p className='text-light-4 small-regular mb-6'>SVG, PNG, JPG</p>
            <Button className='shad-button_dark_4'>
              Select from computer
            </Button>
          </div>
        )
      }
    </div>
  );
};

export default FileUploader;
