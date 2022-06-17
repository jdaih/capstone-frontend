import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';


export default function InfoCard() {
  return (
    <Card sx={{ minWidth: 200 }}>
     <CardMedia
        component="img"
        height="300"
        image="https://www.usda.gov/sites/default/files/covid-items-2.png"
        alt="covid-19"
      />
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        </Typography>
        <Typography variant="h3" component="div">
          COVID-19 Tracker
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        ~ Remember to stay vaccinated ~
        </Typography>
      </CardContent>
    </Card>
  );
}
