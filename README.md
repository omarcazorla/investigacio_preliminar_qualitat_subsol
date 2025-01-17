##Proba-ho aquí: https://investigacio-preliminar-qualitat-subsol.vercel.app/

# Investigació Preliminar de la Qualitat del Subsòl

Calculadora web per determinar els requisits mínims d'una investigació preliminar de la qualitat del subsòl i el seu corresponent informe.

## Descripció

Aquesta aplicació web ajuda als professionals del sector a calcular:
- El nombre de punts d'investigació necessaris segons la superfície
- El nombre de punts d'investigació que han d'arribar al nivell freàtic
- Les mostres mínimes per punt, segons la profunditat d'investigació
- Els requisits específics per mostres d'aigua

## Funcionalitats

- Càlcul automàtic basat en:
  - Superfície a investigar (m²)
  - Profunditat del nivell freàtic (m)
  - Disponibilitat d'informació prèvia
  - Tipus de focus (en cas d'informació prèvia)

- Resultats detallats sobre:
  - Nombre total de punts d'investigació
  - Punts fins el nivell freàtic
  - Profunditat mínima requerida
  - Requisits de mostreig per sòl i aigua

## Tecnologies Utilitzades

- React 18
- Next.js 14
- TypeScript
- Tailwind CSS
- NextUI
- Framer Motion

## Requisits Previs

- Node.js (versió 18 o superior)
- npm (versió 9 o superior)

## Instal·lació

1. Clona el repositori:
```bash
git clone https://github.com/teu-usuari/investigacio_preliminar_qualitat_subsol.git
```

2. Navega al directori del projecte:
```bash
cd investigacio_preliminar_qualitat_subsol
```

3. Instal·la les dependències:
```bash
npm install
```

4. Inicia el servidor de desenvolupament:
```bash
npm run dev
```

5. Obre el navegador i accedeix a [http://localhost:3000](http://localhost:3000)

## Compilació per a Producció

Per generar una versió optimitzada per a producció:

```bash
npm run build
```

Per iniciar la versió de producció:

```bash
npm run start
```

## Estructura del Projecte

```
investigacio_preliminar_qualitat_subsol/
├── app/                    # Directori principal de l'aplicació Next.js
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Pàgina principal
│   └── globals.css        # Estils globals
├── components/            # Components reutilitzables
├── public/               # Assets estàtics
├── styles/               # Estils addicionals
└── lib/                  # Utilitats i funcions auxiliars
```

## Com Utilitzar

1. Introdueix la superfície a investigar en metres quadrats
2. Indica la profunditat del nivell freàtic en metres
3. Marca si disposes d'informació prèvia
4. Si tens informació prèvia, selecciona el tipus de focus
5. Fes clic a "Calcular" per obtenir els resultats

## Llicència

Aquest projecte està sota la Llicència MIT. Això significa que pots:
- Utilitzar el codi per a qualsevol propòsit
- Modificar-lo
- Distribuir-lo
- Utilitzar-lo comercialment

L'única condició és mantenir la nota de copyright i la llicència en qualsevol còpia o porció substancial del programari.

Consulta el fitxer `LICENSE` per veure el text complet de la llicència.

Aplicació creada per Omar Cazorla (https://omarcazorla.github.io/)
