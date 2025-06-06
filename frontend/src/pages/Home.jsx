import ObjetivoForm from '../components/ObjetivoForm';
import ObjetivoList from '../components/ObjetivoList';

export default function Home() {
  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todo App</h1>
      <ObjetivoForm onCreated={() => window.location.reload()} />
      <ObjetivoList />
    </div>
  );
}
