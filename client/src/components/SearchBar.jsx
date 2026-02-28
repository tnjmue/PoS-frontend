export default function SearchBar({ searchTerm, setSearchTerm }) {

    
    
    return (

        <>

            <input className="search-bar" type="text"
                placeholder="Search games..."
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)}
            />

        </>

    )
}