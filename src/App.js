// 김하늘
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import EventByBootstrap from './pages/EventByBootstrap';
import EventByAntd from './pages/EventByAntd';
import EventByMui from './pages/EventByMUI';

import Notice from './pages/Notice';
import VideoEditor from './pages/VideoEditor/VideoEditor';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<VideoEditor />} /> */}

        <Route path='/' element={<EventByBootstrap />} />
        {/* <Route path='/' element={<EventByAntd />} /> */}
        {/* <Route path='/' element={<EventByMui />} /> */}
        <Route path='/notice' element={<Notice />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
