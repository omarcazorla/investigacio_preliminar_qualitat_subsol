'use client';

import { useState } from 'react';
import { Calculator } from 'lucide-react';
import { Card, CardBody, CardHeader } from "@nextui-org/react";

export default function SubsoilInvestigationCalculator() {
  const [area, setArea] = useState<string>('');
  const [waterTableDepth, setWaterTableDepth] = useState<string>('');
  const [hasPreInfo, setHasPreInfo] = useState<boolean>(false);
  const [focusType, setFocusType] = useState<string>('homogeni');
  const [hasCalculated, setHasCalculated] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(false);

  const calculatePoints = (): number => {
    const areaNum = Number(area);
    if (!hasPreInfo) {
      if (areaNum <= 3000) return 4;
      if (areaNum <= 10000) return 4 + Math.floor((areaNum - 3000) / 1000);
      return Math.ceil(10 * (areaNum / 10000));
    } else {
      if (focusType === 'homogeni') return 5 + Math.ceil(areaNum / 10000);
      if (focusType === 'unic') return 4 + Math.floor(areaNum / 2000);
      return 6;
    }
  };

  const calculateWaterTablePoints = (): number => {
    const depthNum = Number(waterTableDepth);
    if (depthNum <= 6) return Math.ceil(calculatePoints() * 0.75);
    if (depthNum <= 15) return Math.ceil(calculatePoints() * 0.5);
    if (depthNum <= 20) return 3;
    return 0;
  };

  const handleCalculate = (): void => {
    if (area && waterTableDepth) {
      setHasCalculated(true);
      setIsValid(true);
    } else {
      setIsValid(false);
      setHasCalculated(true);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="flex items-center gap-4 mb-8 border-b pb-4">
        <Calculator className="w-10 h-10 text-[#9B6747]" />
        <h1 className="text-3xl font-bold text-[#9B6747]">
          Investigació Preliminar del Subsòl
        </h1>
      </div>

      <div className="space-y-4">
        {/* Campos de entrada */}
        <div className="space-y-2">
          <label className="block font-bold">
            Superfície a investigar (m²) *
          </label>
          <input
            type="number"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            className="w-full p-3 border-2 rounded-lg"
            placeholder="Introdueix la superfície"
          />
        </div>

        <div className="space-y-2">
          <label className="block font-bold">
            Profunditat del nivell freàtic (m) *
          </label>
          <input
            type="number"
            value={waterTableDepth}
            onChange={(e) => setWaterTableDepth(e.target.value)}
            className="w-full p-3 border-2 rounded-lg"
            placeholder="Introdueix la profunditat"
          />
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-3 font-bold">
            <input
              type="checkbox"
              checked={hasPreInfo}
              onChange={(e) => setHasPreInfo(e.target.checked)}
              className="w-5 h-5 rounded"
            />
            Disposem d'informació prèvia
          </label>
        </div>

        {hasPreInfo && (
          <div className="space-y-2">
            <label className="block font-bold">
              Tipus de focus
            </label>
            <select
              value={focusType}
              onChange={(e) => setFocusType(e.target.value)}
              className="w-full p-3 border-2 rounded-lg"
            >
              <option value="homogeni">Distribució homogènia</option>
              <option value="unic">Focus únic</option>
              <option value="compost">Focus compost</option>
            </select>
          </div>
        )}

        <button
          onClick={handleCalculate}
          className="w-full p-3 bg-[#9B6747] text-white rounded-lg hover:bg-opacity-90 transition-colors font-bold mt-4"
        >
          Calcular
        </button>

        {!isValid && hasCalculated && (
          <p className="text-red-600 font-bold">
            * Si us plau, omple tots els camps obligatoris
          </p>
        )}

        {isValid && hasCalculated && (
          <>
            <section className="space-y-6">
              <h2 className="text-xl font-bold border-b pb-2">
                Resultats
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card
                  classNames={{
                    base: "bg-[#FBD4B4] border-2 border-[#9B6747]",
                    header: "border-b border-[#9B6747] p-4",
                    body: "p-4"
                  }}
                >
                  <CardHeader>
                    <h3 className="text-xl font-bold text-[#9B6747]">Punts d'investigació</h3>
                  </CardHeader>
                  <CardBody>
                    <p className="text-3xl font-bold text-[#9B6747]">{calculatePoints()}</p>
                  </CardBody>
                </Card>

                <Card
                  classNames={{
                    base: "bg-[#FBD4B4] border-2 border-[#9B6747]",
                    header: "border-b border-[#9B6747] p-4",
                    body: "p-4"
                  }}
                >
                  <CardHeader>
                    <h3 className="text-xl font-bold text-[#9B6747]">Punts fins el nivell freàtic</h3>
                  </CardHeader>
                  <CardBody>
                    <p className="text-3xl font-bold text-[#9B6747]">{calculateWaterTablePoints()}</p>
                  </CardBody>
                </Card>
              </div>

              <Card
                classNames={{
                  base: "bg-white border-2 border-[#9B6747]",
                  header: "border-b border-[#9B6747] p-4",
                  body: "p-4"
                }}
              >
                <CardHeader>
                  <h3 className="text-xl font-bold text-[#9B6747]">Profunditat mínima</h3>
                </CardHeader>
                <CardBody>
                  <p className="text-[#9B6747]">
                    {!hasPreInfo 
                      ? "Mínim 10 metres o fins travessar el nivell freàtic"
                      : "2 metres per sota de la cota inferior del focus potencial"}
                  </p>
                </CardBody>
              </Card>
            </section>

            <section className="space-y-4 mt-8">
              <h2 className="text-2xl font-bold mb-6">
                Mostres mínimes per punt
              </h2>

              <div className="grid grid-cols-1 gap-6">
                <Card
                  classNames={{
                    base: "bg-[#FBD4B4] border-2 border-[#9B6747]",
                    header: "border-b border-[#9B6747] p-4",
                    body: "p-4"
                  }}
                >
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <span>◄</span>
                      <h3 className="text-xl font-bold text-[#9B6747]">Mostres de sòl</h3>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <ul className="space-y-2 ml-9 text-[#9B6747]">
                      <li>Fins a 3m: 2 mostres</li>
                      <li>3-10m: +1 mostra (total 3)</li>
                      <li>Cada 10m addicionals: +1 mostra</li>
                      <li>Una mostra sempre a la zona d'oscil·lació del nivell freàtic</li>
                      <li>En cas de dipòsits soterrats &gt;3m: mínim 1 mostra</li>
                    </ul>
                  </CardBody>
                </Card>

                <Card
                  classNames={{
                    base: "bg-[#89CFF0] border-2 border-[#063898]",
                    header: "border-b border-[#063898] p-4",
                    body: "p-4"
                  }}
                >
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <span>◄</span>
                      <h3 className="text-xl font-bold text-[#063898]">Mostres d'aigua</h3>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <ul className="space-y-2 ml-9 text-[#063898]">
                      <li>Una mostra per cada piezòmetre instal·lat</li>
                      <li>Purga prèvia del piezòmetre segons protocol ACA</li>
                      <li className="mb-2">Mesures in situ:</li>
                      <ul className="space-y-2 ml-6">
                        <li>Potencial REDOX</li>
                        <li>pH i Temperatura</li>
                        <li>Conductivitat elèctrica</li>
                      </ul>
                    </ul>
                  </CardBody>
                </Card>
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  );
}