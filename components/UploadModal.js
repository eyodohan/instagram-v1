import { useRecoilState } from 'recoil';
import { modalState } from '../atom/modalAtom';

const UploadModal = () => {
  const [open, setOpen] = useRecoilState(modalState);

  return (
    <div>
      <h1>modal</h1>
      {open && <h1>The Modal is opened</h1>}
    </div>
  );
};

export default UploadModal;
