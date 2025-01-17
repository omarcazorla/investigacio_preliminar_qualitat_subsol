# Documentación Detallada de Implementación de Cards

## 1. Estructura Base de Componentes

### Componente Principal Card
```typescript
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('rounded-lg border bg-card text-card-foreground shadow-sm', className)}
      {...props}
    />
  )
);
```

### Subcomponentes
Cada subcomponente está construido como un componente forward ref independiente:

#### CardHeader
```typescript
const CardHeader = React.forwardRef<HTMLDivElement>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 p-6', className)}
    {...props}
  />
));
```

#### CardTitle
```typescript
const CardTitle = React.forwardRef<HTMLParagraphElement>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn('text-2xl font-semibold leading-none tracking-tight', className)}
    {...props}
  />
));
```

#### CardContent
```typescript
const CardContent = React.forwardRef<HTMLDivElement>(({ className, ...props }, ref) => (
  <div 
    ref={ref} 
    className={cn('p-6 pt-0', className)} 
    {...props} 
  />
));
```

## 2. Sistema de Estilos

### Clases Base
- `rounded-lg`: Bordes redondeados moderados
- `border`: Borde fino por defecto
- `bg-card`: Color de fondo temático
- `text-card-foreground`: Color de texto temático
- `shadow-sm`: Sombra sutil

### Espaciado
- Padding consistente de 1.5rem (p-6) en header y content
- Espacio vertical entre elementos del header: `space-y-1.5`
- El contenido elimina el padding superior para mejor alineación con el header

### Tipografía
- Títulos: 
  - Tamaño: `text-2xl`
  - Peso: `font-semibold`
  - Altura de línea: `leading-none`
  - Espaciado de letras: `tracking-tight`
- Descripciones:
  - Tamaño: `text-sm`
  - Color: `text-muted-foreground`

## 3. Implementación en Layout

### Grid System
```typescript
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* Cards */}
</div>
```

### Contenedor Principal
```typescript
<div className="min-h-screen bg-background p-8">
  <div className="max-w-6xl mx-auto">
    {/* Grid */}
  </div>
</div>
```

## 4. Personalización de Cards

### Estilos Personalizados
```typescript
<Card className="bg-chart-1 text-white hover:shadow-lg transition-shadow">
  <CardHeader>
    <CardTitle className="text-2xl font-bold">Título</CardTitle>
  </CardHeader>
  <CardContent>
    <p className="text-lg">Contenido</p>
  </CardContent>
</Card>
```

### Sistema de Color
- Fondos temáticos: `bg-chart-1`, `bg-chart-2`
- Texto sobre fondos oscuros: `text-white`
- Transiciones suaves: `transition-shadow`

## 5. Patrones de Diseño Responsive

### Breakpoints
- Mobile: Una columna (`grid-cols-1`)
- Tablet/Desktop: Dos columnas (`md:grid-cols-2`)

### Contenedor Adaptativo
- Ancho máximo: `max-w-6xl`
- Margen automático: `mx-auto`
- Padding consistente: `p-8`

## 6. Mejores Prácticas Implementadas

### Accesibilidad
- Uso de etiquetas semánticas (`h3` para títulos)
- Jerarquía visual clara
- Contraste de color adecuado

### Reutilización
- Composición modular de componentes
- Props spreading para flexibilidad
- Clases condicionales mediante `cn()`

### Performance
- Componentes ligeros
- Estilos basados en utilidades
- Optimización de re-renders con `forwardRef`

## 7. Guía de Uso

### Estructura Básica
```typescript
<Card>
  <CardHeader>
    <CardTitle>Título</CardTitle>
    {/* Opcional: CardDescription */}
  </CardHeader>
  <CardContent>
    {/* Contenido */}
  </CardContent>
  {/* Opcional: CardFooter */}
</Card>
```

### Personalización
- Extender estilos base mediante `className`
- Mantener consistencia con el sistema de diseño
- Usar variables CSS temáticas cuando sea posible

### Consideraciones de Layout
- Usar dentro de contenedores grid/flex
- Mantener padding consistente
- Respetar la jerarquía de componentes

## 8. Extensiones y Modificaciones

### Añadir Nuevas Variantes
```typescript
const variantStyles = {
  default: 'bg-card',
  primary: 'bg-primary text-primary-foreground',
  secondary: 'bg-secondary text-secondary-foreground',
};

// Uso
<Card variant="primary">
```

### Estados Interactivos
```typescript
<Card className="hover:scale-105 transition-transform cursor-pointer">
```

Esta documentación proporciona una base sólida para implementar cards en otras partes del proyecto, manteniendo la consistencia y las mejores prácticas establecidas.