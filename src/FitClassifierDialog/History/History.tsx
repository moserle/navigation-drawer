import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { VictoryAxis, VictoryChart, VictoryLine, VictoryTheme } from 'victory';
import { Grid, Typography } from '@material-ui/core';
import { styles } from './History.css';

type Data = { x: Number; y: Number }[];

type HistoryProps = { data: Data };

const useStyles = makeStyles(styles);

export const History = (props: HistoryProps) => {
  const { data } = props;

  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Typography classes={{ root: classes.typography }}>Loss</Typography>

        <VictoryChart
          height={100}
          padding={0}
          theme={VictoryTheme.material}
          width={400}
        >
          <VictoryAxis
            crossAxis
            standalone={false}
            theme={VictoryTheme.material}
          />

          <VictoryAxis
            crossAxis
            dependentAxis
            standalone={false}
            theme={VictoryTheme.material}
          />

          <VictoryLine data={data} />
        </VictoryChart>
      </Grid>

      <Grid item xs={4}>
        <Typography classes={{ root: classes.typography }}>Accuracy</Typography>

        <VictoryChart
          height={100}
          padding={0}
          theme={VictoryTheme.material}
          width={400}
        >
          <VictoryAxis
            crossAxis
            standalone={false}
            theme={VictoryTheme.material}
          />

          <VictoryAxis
            crossAxis
            dependentAxis
            standalone={false}
            theme={VictoryTheme.material}
          />

          <VictoryLine data={data} />
        </VictoryChart>
      </Grid>
    </Grid>
  );
};
