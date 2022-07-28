import { TextField } from '@mui/material';
import * as React from 'react';
import axios from 'axios';
import { EventAvailableOutlined } from '@mui/icons-material';
import mockJson from '../mockJson.json'
import { searchItemResults } from '../App'

interface SearchComponentProps { 
  searchItemCallback: (list: searchItemResults[]) => void
}

const searchStyle = {
      margin: "1rem",
      width: "50%"
}

const SearchComponent = ({searchItemCallback}: SearchComponentProps) => {

    const [searchValue, setSearchValue] = React.useState('')

    React.useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
          // console.log(searchValue)
          if (searchValue != '') {
            // console.log(searchValue)
            // Send Axios request here
            // console.log('useEffect')
            // console.log(mockJson)
            searchItemCallback(mockJson)
          }
        }, 3000)
        return () => clearTimeout(delayDebounceFn)
      }, [searchValue])

    return ( <TextField id="searchBox" label="Search field" type="search" value={searchValue} onChange={(event) => { setSearchValue(event.target.value)}} sx={searchStyle}/>)
}



    export default SearchComponent
