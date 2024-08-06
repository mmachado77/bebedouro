'use client'
import Image from "next/image";
import { useEffect, useState } from "react";


export default function Home() {
  const [relatorio, setRelatorio] = useState([])

  useEffect(() => {
    //Implementing the setInterval method
    const interval = setInterval(() => {
        pop();
    }, 1000);

    //Clearing the interval
    return () => clearInterval(interval);
}, []);

// setInterval(pop,3000);

  async function pop(){
    const response = await fetch('/api/relatorio');
    const acionamentos = await response.json();
    setRelatorio(acionamentos);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Número de acionamentos: {relatorio.length}</h1>

      </div>
    </main>
  );
}
