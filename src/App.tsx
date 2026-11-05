export interface AppProps {
  title?: string;
}

export function App({ title = 'demo-poc-frontend' }: AppProps) {
  return (
    <main>
      <h1>{title}</h1>
    </main>
  );
}