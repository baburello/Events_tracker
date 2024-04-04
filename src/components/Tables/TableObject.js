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

function createData(id, customer, cadastre, region, village, community, responsiblePerson, telephone, date, state, numOfCam, settings) {
  return { id, customer, cadastre, region, village, community, responsiblePerson, telephone, date, state, numOfCam, settings };
}

const rows = [
  createData(1,'BIZNES RIVOILANTIRISH BANKI', '01:1002:04.0001', 'Кашкадаре вилояти', 'Касби', 'Камаши МФЙ', 'Аманова Мамура Абдуллаевна', '+998900000000', '27/09/2023 11.00', 'Одобрено', 4, ),
  createData(2,'BIZNES RIVOILANTIRISH BANKI', '01:1002:04.0001', 'Кашкадаре вилояти', 'Касби', 'Камаши МФЙ', 'Аманова Мамура Абдуллаевна', '+998900000000', '27/09/2023 11.00', 'На рассмотрение', 4, ),
  createData(3,'BIZNES RIVOILANTIRISH BANKI', '01:1002:04.0001', 'Кашкадаре вилояти', 'Касби', 'Камаши МФЙ', 'Аманова Мамура Абдуллаевна', '+998900000000', '27/09/2023 11.00', 'В ожидании', 4, ),
  createData(4,'BIZNES RIVOILANTIRISH BANKI', '01:1002:04.0001', 'Кашкадаре вилояти', 'Касби', 'Камаши МФЙ', 'Аманова Мамура Абдуллаевна', '+998900000000', '27/09/2023 11.00', 'Отклонен', 4,),
];

export default function TableObject() {
  return (
      <Container maxWidth="90vw">
          <Box sx={{ display: 'flex', justifyContent:'space-between' }}>
              <h2 style={{fontSize:24, fontWeight:900}}>Объектлар</h2>
              <Button variant="contained" color="success" sx={{letterSpacing:2, fontWeight:700}}>Объект Кушиш</Button>
          </Box>
      
      <TableContainer sx={{marginTop:4, maxWidth:'95vw',border:1, borderRadius:5}}  component={Paper}>
              <Table aria-label="simple table" align="right">
        <TableHead>
          <TableRow sx={{border:0}}>
            <TableCell sx={{fontSize:14, fontWeight:900, borderBottom:1 }} >ID</TableCell>
            <TableCell sx={{fontSize:14, fontWeight:900, borderBottom:1, paddingX:1}}>Заказчик</TableCell>
            <TableCell sx={{fontSize:14, fontWeight:900, borderBottom:1,paddingX:2}} >Кадастр раками</TableCell>
            <TableCell sx={{fontSize:14, fontWeight:900,borderBottom:1, paddingX:6}} >Вилоят</TableCell>
            <TableCell sx={{fontSize:14, fontWeight:900, borderBottom:1, paddingX:2}}>Туман</TableCell>
            <TableCell sx={{fontSize:14, fontWeight:900, borderBottom:1, paddingX:4}}>МФЙ</TableCell>
            <TableCell sx={{width:210,fontSize:14, fontWeight:900, borderBottom:1, paddingX:6}}>Масул шахс</TableCell>
            <TableCell sx={{fontSize:14, fontWeight:900, borderBottom:1, paddingX:4}}>Телефон</TableCell>
            <TableCell sx={{fontSize:14, fontWeight:900, borderBottom:1, paddingX:6}}>Дата</TableCell>
            <TableCell sx={{fontSize:14, fontWeight:900,borderBottom:1, paddingX:2}} >Статус</TableCell>
            <TableCell  sx={{ width:60,fontSize:14, fontWeight:900, borderBottom:1, padding:0}} >Камеры</TableCell>
            <TableCell sx={{fontSize:14, fontWeight:900, borderBottom:1, paddingX:0}} >Настр.</TableCell>

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
              <TableCell sx={{fontSize:13, paddingX:1}} align="left">{row.customer}</TableCell>
              <TableCell sx={{fontSize:13, padding:1}} align="left">{row.cadastre}</TableCell>
              <TableCell sx={{fontSize:13, padding:0}} align="left">{row.region}</TableCell>
              <TableCell sx={{fontSize:13, padding:0}} align="left">{row.village}</TableCell>
              <TableCell sx={{fontSize:13, padding:0}} align="left">{row.community}</TableCell>
              <TableCell sx={{fontSize:13, padding:0}} align="left">{row.responsiblePerson}</TableCell>
              <TableCell sx={{fontSize:13, padding:0}} align="left">{row.telephone}</TableCell>
              <TableCell sx={{fontSize:13, padding:0}} align="left">{row.date}</TableCell>
              <TableCell sx={{fontSize:13, padding:0}} align="left">{row.state}</TableCell>
              <TableCell sx={{fontSize:13, padding:0}} align="center">{row.numOfCam}</TableCell>
                  <TableCell sx={{ width: 50,fontSize:13, padding:0}} align="center"><SettingsOutlinedIcon /></TableCell>
              <TableCell sx={{width:20, fontSize:13}} align="center"><BorderColorOutlinedIcon/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
   
  );
}
