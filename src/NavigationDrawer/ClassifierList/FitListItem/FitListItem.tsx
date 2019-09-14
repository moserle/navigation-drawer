import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import * as React from 'react';
import ScatterPlotIcon from '@material-ui/icons/ScatterPlot';
import { useTranslation } from 'react-i18next';
import { useDialog } from '@piximi/hooks';
import { Category, Image } from '@piximi/types';
import { ConnectedFitClassifierDialog } from '../../../FitClassifierDialog/FitClassifierDialog/ConnectedFitClassifierDialog';

type FitListItemProps = {
  categories: Category[];
  images: Image[];
  datasetInitialized: boolean;
  setDatasetInitialized: (datasetInitialized: boolean) => void;
};

export const FitListItem = (props: FitListItemProps) => {
  const {
    categories,
    images,
    datasetInitialized,
    setDatasetInitialized
  } = props;

  const { openedDialog, openDialog, closeDialog } = useDialog();

  const { t: translation } = useTranslation();

  const fit = async () => {
    openDialog();
  };

  return (
    <React.Fragment>
      <ListItem button dense onClick={fit}>
        <ListItemIcon>
          <ScatterPlotIcon />
        </ListItemIcon>

        <ListItemText primary={translation('Fit')} />
      </ListItem>

      <ConnectedFitClassifierDialog
        closeDialog={closeDialog}
        openedDialog={openedDialog}
        openedDrawer={true}
        datasetInitialized={datasetInitialized}
        setDatasetInitialized={setDatasetInitialized}
      />
    </React.Fragment>
  );
};
