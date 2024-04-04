import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import './AnotherBasicTable.css'
import BtnClick from '../BtnClick';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';

function createData(id, cadastre, region, village, community, responsiblePerson, telephone, date, state) {
    return { id, cadastre, region, village, community, responsiblePerson, telephone, date, state, state};
  }

const rows = [
    createData(1, '01:1002:04.0001', 'Кашкадаре вилояти', 'Касби тумани', 'Камаши МФЙ', 'Аманова Мамура Абдуллаевна', '+998900000000', '27/09/2023 11.00', 'Одобрено'),
    createData(2, '01:1002:04.0001', 'Кашкадаре вилояти', 'Касби тумани', 'Камаши МФЙ', 'Аманова Мамура Абдуллаевна', '+998900000000', '27/09/2023 11.00', 'На рассмотрение'),
    createData(3, '01:1002:04.0001', 'Кашкадаре вилояти', 'Касби тумани', 'Камаши МФЙ', 'Аманова Мамура Абдуллаевна', '+998900000000', '27/09/2023 11.00', 'В ожидании'),
    createData(4, '01:1002:04.0001', 'Кашкадаре вилояти', 'Касби тумани', 'Камаши МФЙ', 'Аманова Мамура Абдуллаевна', '+998900000000', '27/09/2023 11.00', 'Отклонен' )
];

export default function AnotherBasicTable() {
  return (
    <div className='tblWrapper'>
      <div className="btnContainer">
        <h2>Буюртмалар</h2>
        <BtnClick />
      </div>
      
      <TableContainer className='tblContainer'>
      <Table className='tblMain' sx={{}} size="small" aria-label="simple table" >
        <TableHead>
          <TableRow >
            <TableCell style={{fontSize:`16px`, fontWeight:`bold`}} className='borderRight' >ID</TableCell>
            <TableCell style={{fontSize:`16px`, fontWeight:`bold`}}  >Кадастр раками</TableCell>
            <TableCell style={{fontSize:`16px`, fontWeight:`bold`}}  align="left">Вилоят</TableCell>
            <TableCell style={{fontSize:`16px`, fontWeight:`bold`}}  align="left">Туман</TableCell>
            <TableCell style={{fontSize:`16px`, fontWeight:`bold`}}  align="left">МФЙ</TableCell>
            <TableCell style={{fontSize:`16px`, fontWeight:`bold`}}  align="left">Масул шахс</TableCell>
            <TableCell style={{fontSize:`16px`, fontWeight:`bold`}}  align="left">Телефон</TableCell>
            <TableCell style={{fontSize:`16px`, fontWeight:`bold`}}  align="left">Дата</TableCell>
            <TableCell style={{fontSize:`16px`, fontWeight:`bold`}}  align="left">Статус</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
            //   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell className='borderRight' component="th" scope="row">
                {row.id}
                </TableCell>
              <TableCell  align="left">{row.cadastre}</TableCell>
            <TableCell align="left">{row.region}</TableCell>
             <TableCell align="left">{row.village}</TableCell>
              <TableCell align="left">{row.community}</TableCell>
              <TableCell align="left">{row.responsiblePerson}</TableCell>
              <TableCell align="left">{row.telephone}</TableCell>
                  <TableCell align="left">{row.date}</TableCell>
                  <TableCell align="left">{row.state}</TableCell>
                  

            
                  <TableCell><BorderColorOutlinedIcon/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
   
  );
}
