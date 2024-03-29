import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useGlobalState } from './state'


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '20px',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const linkStyle = {
  color: '#F9FAFD'
}

const filterStyle = {
  backgroundColor: '#56565680',
  color: '#CECECE',
  height: '40px',
  width: '150px',
}

export default function Navbar(props) {

  const [searchText, setSearchText] = useState([]);
  const [filterByRatings, setFilterByRatings] = useState([]);
  const [hideSearchBar] = useGlobalState('hideSearchBar');

  useEffect(() => {
    props.searchedText(searchText)
  }, [searchText])

  useEffect(() => {
    props.filterByRatings(filterByRatings)
  }, [filterByRatings])



  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "#171717" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <Link to={'/'} style={linkStyle}>
              <HomeIcon />
            </Link>
          </IconButton>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
          </Typography>

          {!hideSearchBar &&
            <>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                  onChange={event => { setSearchText(event.target.value) }}
                />
              </Search>

              <FormControl sx={{ m: 1, minWidth: 80 }}>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={filterByRatings}
                  onChange={event => { setFilterByRatings(event.target.value) }}
                  style={filterStyle}
                >
                  <MenuItem value={0}>
                    <em>-filter</em>
                  </MenuItem>
                  <MenuItem value={1}>IMDB rating</MenuItem>
                </Select>
              </FormControl>
            </>
          }


        </Toolbar>
      </AppBar>
    </Box>
  );
}
