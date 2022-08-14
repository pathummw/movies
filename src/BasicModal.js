import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useGlobalState, setGlobalState } from './state'
import YoutubeEmbed from './YoutubeEmbed';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

export default function BasicModal(props) {
  const handleClose = () => {
    setGlobalState('openModal', false);
  } ;

  const [open] = useGlobalState('openModal');

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <YoutubeEmbed embedId={props.embedId} />
        </Box>
      </Modal>
    </div>
  );
}
