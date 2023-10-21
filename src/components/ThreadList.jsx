import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';

const tweets = [
  {
    id: 1,
    author: 'John Doe',
    username: '@johndoe',
    tweetText: 'This is a sample tweet. #sampletweet',
  },
  {
    id: 2,
    author: 'Jane Smith',
    username: '@janesmith',
    tweetText: 'Another example tweet. #example',
  },
  // Add more tweet objects here
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function ThreadList() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0.1} columns={16} gap={2}>
        <Grid xs={10} mt={1} ml={5}>
          <Box sx={{
            width: 1000,
            maxWidth: '100%',
            display: 'flex',
            alignItems: 'flex-end',
            marginTop: 2,
            marginBottom: 2,
          }}
          >
            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField fullWidth id="input-with-sx" label="With sx" variant="standard" sx={{ margin: 2 }} />
            <Button variant="contained" endIcon={<SendIcon />}>
              Send
            </Button>
          </Box>
          {tweets.map((tweet) => (
            <Card key={tweet.id} sx={{ maxWidth: 1000 }}>
              <CardHeader
                avatar={(
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    R
                  </Avatar>
              )}
                action={(
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
              )}
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
              />

              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  This impressive paella is a perfect party dish and a fun meal to cook
                  together with your guests. Add 1 cup of frozen peas along with the mussels,
                  if you like.
                </Typography>
              </CardContent>

              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Card>
          ))}

        </Grid>
        <Grid xs={5} mt={1} mr={1}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ThreadList;