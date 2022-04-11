import React, { FC } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useTheme } from 'styled-components';
import { Dialog } from '@/src/shared/ui/Dialog';
import { PhotoDialogProps } from './types';

const PhotoDialog: FC<PhotoDialogProps> = ({
  open,
  onDismiss,
  onFadeOut,
  photo,
}) => {
  const { colors, screens } = useTheme();
  const isDesktop = useMediaQuery({ minWidth: screens.sm });

  return (
    <Dialog
      open={open}
      onDismiss={onDismiss}
      onFadeOut={onFadeOut}
      bgColor={colors.transparent}
      size={isDesktop ? 'xs' : 'l'}
    >
      {photo && (
        <div>
          <img src={photo?.imageUrl} alt={photo.title} className="w-full" />
          <div className="p-16 bg-white">
            <p className="font-lato font-bold text-xl mb-12">{photo?.title}</p>
            <p className="font-noto text-sm">
              {photo?.subtitle} - {photo?.publicationDate}
            </p>
            <p className="font-noto text-sm">{photo?.description}</p>
          </div>
        </div>
      )}
    </Dialog>
  );
};

export default PhotoDialog;
