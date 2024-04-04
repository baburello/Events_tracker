import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import { red } from '@mui/material/colors';
import { Box, Button, Container, Paper } from '@mui/material';

function createData(id, cadastre, region, village, community, responsiblePerson, telephone, date, state) {
  return { id, cadastre, region, village, community, responsiblePerson, telephone, date, state };
}

const rows = [
  createData(1,'01:1002:04.0001', 'Кашкадаре вилояти', 'Касби', 'Камаши МФЙ', 'Аманова Мамура Абдуллаевна', '+998900000000', '27/09/2023 11.00', 'Одобрено' ),
  createData(2,'01:1002:04.0001', 'Кашкадаре вилояти', 'Касби', 'Камаши МФЙ', 'Аманова Мамура Абдуллаевна', '+998900000000', '27/09/2023 11.00', 'Одобрено' ),
  createData(3,'01:1002:04.0001', 'Кашкадаре вилояти', 'Касби', 'Камаши МФЙ', 'Аманова Мамура Абдуллаевна', '+998900000000', '27/09/2023 11.00', 'Одобрено' ),
  createData(4,'01:1002:04.0001', 'Кашкадаре вилояти', 'Касби', 'Камаши МФЙ', 'Аманова Мамура Абдуллаевна', '+998900000000', '27/09/2023 11.00', 'Одобрено' ),
];

export default function TableOrder() {
  return (
      <Container maxWidth="95vw">
          <Box sx={{ display: 'flex', justifyContent:'space-between', marginTop:'40px' }}>
              <h2 style={{fontSize:24, fontWeight:900}}>Буюртмалар</h2>
              <Button variant="contained" color="success" sx={{letterSpacing:2, fontWeight:700}}>Объект Кушиш</Button>
          </Box>
      
      <TableContainer sx={{marginTop:4, maxWidth:'95vw',border:1, borderRadius:5}}  component={Paper}>
              <Table aria-label="simple table" align="right">
        <TableHead>
          <TableRow sx={{border:0}}>
            <TableCell sx={{fontSize:14, fontWeight:900, borderBottom:1 }} >ID</TableCell>
            <TableCell sx={{fontSize:14, fontWeight:900, borderBottom:1,paddingX:2}} >Кадастр раками</TableCell>
            <TableCell sx={{fontSize:14, fontWeight:900,borderBottom:1, paddingX:6}} >Вилоят</TableCell>
            <TableCell sx={{fontSize:14, fontWeight:900, borderBottom:1, paddingX:2}}>Туман</TableCell>
            <TableCell sx={{fontSize:14, fontWeight:900, borderBottom:1, paddingX:4}}>МФЙ</TableCell>
            <TableCell sx={{width:210,fontSize:14, fontWeight:900, borderBottom:1, paddingX:6}}>Масул шахс</TableCell>
            <TableCell sx={{fontSize:14, fontWeight:900, borderBottom:1, paddingX:4}}>Телефон</TableCell>
            <TableCell sx={{fontSize:14, fontWeight:900, borderBottom:1, paddingX:6}}>Дата</TableCell>
            <TableCell sx={{fontSize:14, fontWeight:900,borderBottom:1, paddingX:2}} >Статус</TableCell>

          </TableRow>
        </TableHead>
        <TableBody sx={{border:0}}>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ border:0 }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell sx={{fontSize:13, padding:1}} align="left">{row.cadastre}</TableCell>
              <TableCell sx={{fontSize:13, padding:0}} align="left">{row.region}</TableCell>
              <TableCell sx={{fontSize:13, padding:0}} align="left">{row.village}</TableCell>
              <TableCell sx={{fontSize:13, padding:0}} align="left">{row.community}</TableCell>
              <TableCell sx={{fontSize:13, padding:0}} align="left">{row.responsiblePerson}</TableCell>
              <TableCell sx={{fontSize:13, padding:0}} align="left">{row.telephone}</TableCell>
              <TableCell sx={{fontSize:13, padding:0}} align="left">{row.date}</TableCell>
              <TableCell sx={{fontSize:13, padding:0}} align="left">{row.state}</TableCell>
              <TableCell sx={{width:20, fontSize:13}} align="center"><a href="/"><BorderColorOutlinedIcon/></a></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
   
  );
}
