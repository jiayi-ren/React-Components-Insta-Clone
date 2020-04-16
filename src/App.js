/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React, {useState} from "react";
import "./App.css";
import PostsPage from "./components/PostsContainer/PostsPage"
import SearchBar from "./components/SearchBar/SearchBarContainer"
// import the PostsPage and SearchBar and add them to the App
import dummyData from "./dummy-data"

const App = () => {

  const [data, setData] = useState(dummyData)
  const [searchTerm, setSearchTerm] = useState('')

  const getFiltered = () => {
    const term = searchTerm.trim()
    return data.filter(datum => {
      if (!term) {
        return datum
      }
      if (datum.username.toLowerCase().includes(term.toLowerCase())) {
        return datum
      }
    })
  }


  return (
    <div className="App">
      {/* Add imported components here to render them */}
      <SearchBar setSearchTerm={setSearchTerm}/>
      <PostsPage posts={getFiltered()}/>
    </div>
  );
};

export default App;
