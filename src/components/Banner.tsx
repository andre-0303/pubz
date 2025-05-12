export default function Banner() {
  return (
    <div className="relative bg-[url('/img1.jpg')] bg-cover bg-center h-[600px] flex items-center justify-center text-center">
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="relative z-10 px-4">
        <h1 className="text-yellow-400 text-6xl font-serif font-bold">Pub-Z</h1>
        <h2 className="text-amber-950 text-4xl font-serif mt-2">Taberna Medieval</h2>
        <p className="text-yellow-100 text-lg mt-4 max-w-xl mx-auto">
          Uma experiência única de cervejas artesanais e churrasquinhos em um ambiente medieval
        </p>
      </div>
    </div>
  );
}
