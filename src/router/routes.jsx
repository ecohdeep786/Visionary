import Home from '@/features/home';
import Students from '@/features/students';
import Educators from '@/features/educators';
import Professionals from '@/features/professionals';
import Parents from '@/features/parents';
import Download from '@/features/download';

export const routes = [
  { path: '/', element: Home, label: 'Home' },
  { path: '/Students', element: Students, label: 'Students' },
  { path: '/Educators', element: Educators, label: 'Educators' },
  { path: '/Professionals', element: Professionals, label: 'Professionals' },
  { path: '/Parents', element: Parents, label: 'Parents' },
  { path: '/Download', element: Download, label: 'Download' },
];
