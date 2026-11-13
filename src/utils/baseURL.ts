// Get Base Url w/o trailing slash
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export default function baseURL(path: string = '/'): string {
  return path === '/' ? `${base}/` : `${base}${path}`;
};
