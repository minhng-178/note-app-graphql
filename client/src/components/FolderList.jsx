import { Card, CardContent, IconButton, List, Tooltip, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import NewFolder from './NewFolder';

export default function FolderList({ folders }) {
  const { folderId } = useParams();
  console.log({ folderId });
  const [activeFolderId, setActiveFolderId] = useState(folderId);

  const handleDeleteNote = () => {
    console.log({ folderId });
  }


  return (
    <List
      sx={{
        width: '100%',
        bgcolor: '#7D9D9C',
        height: '100%',
        padding: '10px',
        textAlign: 'left',
        overflowY: 'auto',
      }}
      subheader={
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography sx={{ fontWeight: 'bold', color: 'white' }}>
            Folders
          </Typography>
          <NewFolder />
        </Box>
      }
    >
      {folders.map(({ id, name }) => {
        return (
          <Link
            key={id}
            to={`folders/${id}`}
            style={{
              textDecoration: 'none',
            }}
            onClick={() => setActiveFolderId(id)}
          >
            <Card
              sx={{
                mb: '5px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor:
                  id === activeFolderId ? 'rgb(255 211 140)' : null,
              }}
            >
              <CardContent
                sx={{ '&:last-child': { pb: '10px' }, padding: '10px' }}
              >
                <Typography sx={{ fontSize: 16, fontWeight: 'bold' }}>{name}</Typography>
              </CardContent>
              <Tooltip title='Delete Note' onClick={handleDeleteNote}>
                <IconButton size='small'>
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </Card>
          </Link>
        );
      })}
    </List>
  );
}
