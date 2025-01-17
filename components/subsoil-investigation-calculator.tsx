'use client';

import { useState } from 'react';
import { Calculator } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function SubsoilInvestigationCalculator() {
  // ... (todos los estados y funciones se mantienen igual)

  return (
    <div className="min-h-screen bg-white">
      {/* ... (todo el contenido anterior se mantiene igual hasta la línea problemática) ... */}
      
      <ul className="space-y-2 ml-9 text-[#9B6747]">
        <li>Fins a 3m: 2 mostres</li>
        <li>3-10m: +1 mostra (total 3)</li>
        <li>Cada 10m addicionals: +1 mostra</li>
        <li>Una mostra sempre a la zona d&apos;oscil·lació del nivell freàtic</li>
        <li>En cas de dipòsits soterrats &gt;3m: mínim 1 mostra</li>
      </ul>

      {/* ... (el resto del contenido se mantiene igual) ... */}
    </div>
  );
}