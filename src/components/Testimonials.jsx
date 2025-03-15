export default function Testimonials() {
  return (
    <div className="py-10 text-center">
      <h2 className="text-2xl font-bold">O que nossos clientes dizem</h2>
      <div className="mt-4 flex justify-center gap-4">
        <img src="/depoimento1.png" alt="Depoimento 1" loading="lazy" className="h-40" />
        <img src="/depoimento2.png" alt="Depoimento 2" loading="lazy" className="h-40" />
      </div>
    </div>
  );
}