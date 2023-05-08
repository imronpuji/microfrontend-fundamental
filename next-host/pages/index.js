import dynamic from 'next/dynamic';
const ReactRemoteComponent = dynamic( () => import('app2/App'), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      hello
      <ReactRemoteComponent />
  </div>
  )
}
