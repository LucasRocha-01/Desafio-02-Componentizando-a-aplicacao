import { useEffect, useState } from 'react';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

export function App() {
  const [genreId, setGenreId] = useState<number>(0);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <nav className="sidebar">      
        <SideBar onSelectGender={(id) => setGenreId(id)} />
      </nav>
      <Content selectedGenreId={genreId} />
    </div>
  )
}