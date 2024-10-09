import Sidebar from '@/components/sidebar';
import Header from '@/components/header';

export default function Productos() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-background">
          <div className="container mx-auto px-6 py-8">
            <h3 className="text-3xl font-medium text-foreground">Productos</h3>
            {/* Add your products content here */}
          </div>
        </main>
      </div>
    </div>
  );
}