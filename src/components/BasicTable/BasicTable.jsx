import * as React from 'react';
import './BasicTable.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import BtnClick from '../BtnClick';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import { red } from '@mui/material/colors';
import { Paper } from '@mui/material';

function createData(id, customer, cadastre, region, village, community, responsiblePerson, telephone, date, state, numOfCam, settings) {
  return { id, customer, cadastre, region, village, community, responsiblePerson, telephone, date, state, numOfCam, settings };
}

const rows = [
  createData(1,'BIZNES RIVOILANTIFISH BANKI', '01:1002:04.0001', 'Кашкадаре вилояти', 'Касби тумани', 'Камаши МФЙ', 'Аманова Мамура Абдуллаевна', '+998900000000', '27/09/2023 11.00', 'Одобрено', 4, ),
  createData(2,'BIZNES RIVOILANTIFISH BANKI', '01:1002:04.0001', 'Кашкадаре вилояти', 'Касби тумани', 'Камаши МФЙ', 'Аманова Мамура Абдуллаевна', '+998900000000', '27/09/2023 11.00', 'На рассмотрение', 4, ),
  createData(3,'BIZNES RIVOILANTIFISH BANKI', '01:1002:04.0001', 'Кашкадаре вилояти', 'Касби тумани', 'Камаши МФЙ', 'Аманова Мамура Абдуллаевна', '+998900000000', '27/09/2023 11.00', 'В ожидании', 4, ),
  createData(4,'BIZNES RIVOILANTIFISH BANKI', '01:1002:04.0001', 'Кашкадаре вилояти', 'Касби тумани', 'Камаши МФЙ', 'Аманова Мамура Абдуллаевна', '+998900000000', '27/09/2023 11.00', 'Отклонен', 4,),
];

export default function BasicTable() {
  return (
    <div className='tblWrapper'>
      <div className="btnContainer">
        <h2>Объектлар</h2>
        <BtnClick />
      </div>
      
      <TableContainer component={Paper} className='tblContainer'>
      <Table className='tblMain' sx={{}} size="small" aria-label="simple table" >
        <TableHead >
          <TableRow className='tblRow'>
            <TableCell style={{fontSize:`16px`, fontWeight:`bold`}} >ID</TableCell>
            <TableCell style={{fontSize:`16px`, fontWeight:`bold`}} className='borderRight wider250' size="string" padding="normal">Заказчик</TableCell>
            <TableCell style={{fontSize:`16px`, fontWeight:`bold`}} >Кадастр раками</TableCell>
            <TableCell style={{fontSize:`16px`, fontWeight:`bold`}} align="left">Вилоят</TableCell>
            <TableCell style={{fontSize:`16px`, fontWeight:`bold`}} align="left">Туман</TableCell>
            <TableCell style={{fontSize:`16px`, fontWeight:`bold`}} align="left">МФЙ</TableCell>
            <TableCell style={{fontSize:`16px`, fontWeight:`bold`}} size="medium" align="left">Масул шахс</TableCell>
            <TableCell style={{fontSize:`16px`, fontWeight:`bold`}} align="left">Телефон</TableCell>
            <TableCell style={{fontSize:`16px`, fontWeight:`bold`}} align="left">Дата</TableCell>
            <TableCell style={{fontSize:`16px`, fontWeight:`bold`}} align="left">Статус</TableCell>
            {/* <TableCell style={{fontSize:`16px`, fontWeight:`bold`}} padding="none">Кол.Камер</TableCell> */}
            <TableCell className='wider50' style={{fontSize:`16px`, fontWeight:`bold`}}>Настройки</TableCell>
              <TableCell align="left">{ }</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ border: 0 }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell className='borderRight' align="left">{row.customer}</TableCell>
              <TableCell align="left">{row.cadastre}</TableCell>
              <TableCell align="left">{row.region}</TableCell>
              <TableCell align="left">{row.village}</TableCell>
              <TableCell align="left">{row.community}</TableCell>
              <TableCell align="left">{row.responsiblePerson}</TableCell>
              <TableCell align="left">{row.telephone}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">{row.state}</TableCell>
              {/* <TableCell align="left">{row.numOfCam}</TableCell> */}
              <TableCell className='wider50' align="left"><SettingsOutlinedIcon /></TableCell>
              <TableCell align="center"><a href="/"><BorderColorOutlinedIcon/></a></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
   
  );
}
