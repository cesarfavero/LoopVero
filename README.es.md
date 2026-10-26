# LoopVero · Inside the Harness

[English](README.md) · [Português (Brasil)](README.pt-BR.md) · [Español](README.es.md) · [简体中文](README.zh-CN.md)

**¿Conoces ese bot al que llaman “el mejor del mundo”? Imagina poder seguir la maquinaria que hay detrás de la respuesta.**

LoopVero es un estudio de un harness de agentes con referencias directas al código: herramientas, memoria, checkpoints, subagentes y los mecanismos visibles detrás del trabajo proactivo. Explora los archivos de referencia, consulta los mapas de funciones y descubre hasta dónde llega la evidencia.

**1.070 archivos originales · 19.741 apariciones de funciones con nombre · 14.935 fichas de referencia de funciones.**

Los archivos de referencia son la fuente de verdad: la guía explica lo que implementan, las fichas describen sus funciones y cada conclusión apunta al código que la respalda.

Este es un análisis estático de los artefactos disponibles, no un agente instalable ni una descripción garantizada del sistema completo en producción.

Se han retirado la aplicación reconstruida, el frontend y sus pruebas. La estructura utiliza nombres propios en inglés y no incluye instrucciones para obtener los archivos ni reproducir una extracción.

## Empieza aquí

1. [Guía completa](guide/README.md): itinerario de lectura, responsabilidades y contratos.
2. [Arquitectura de extremo a extremo](guide/architecture/README.md): host, gateway, ejecución remota, ejecutor de evaluación y persistencia.
3. [Proactividad](guide/components/proactivity/README.md): activación, automatizaciones, ejecutor silencioso, WakeParent y límites de la evidencia.
4. [Conclusiones verificadas](guide/findings/README.md): hallazgos que cambian la interpretación del harness.
5. [Mapa completo de módulos y funciones](mapped/README.md): una ficha README para cada función con nombre catalogada.

## Organización

| Carpeta | Contenido | Uso |
| --- | --- | --- |
| [reference](reference/README.md) | Archivos originales, con sus bytes preservados y las carpetas reorganizadas | Evidencia primaria |
| [guide](guide/README.md) | Explicaciones manuales, decisiones, flujos, algoritmos y diagramas | Entender el comportamiento |
| [mapped](mapped/README.md) | READMEs por módulo y función, parámetros, llamadas y ubicación | Navegar por la implementación |
| [tools/research](tools/research/README.md) | Indexación AST, generación y verificación estática | Reproducir el mapa a partir de las referencias ya presentes |

## Tres conclusiones fundamentales

**El host no ofrece un bucle BOX local activo en este punto de entrada.** `SendPipeline.sendPrompt` retorna sin realizar trabajo cuando el prompt está vacío y no tiene adjuntos; una entrada efectiva encuentra la ruta de rechazo BOX, incluido `refuseBoxTurn`, que lanza `SandBoxHarnessRetiredError`. Para los agentes marcados como `temporal`, el gateway utiliza un proxy de acciones y transcripciones remotas. Esto se verificó en el código, no se dedujo de los nombres de las clases. [Gateway](guide/components/gateway/README.md), [turnos](guide/components/turns/README.md).

**El ejecutor de evaluación contiene implementaciones concretas del bucle.** Su recorrido conecta la creación de sesiones, la composición de herramientas, el streaming, los checkpoints, los subagentes y el cierre. Permite estudiar el funcionamiento presente en el artefacto, sin demostrar que producción utiliza exactamente esta configuración. [Inferencia](guide/components/inference/README.md).

**La proactividad es una cadena de responsabilidades.** Existe código concreto de automatización, ejecución silenciosa y comunicación con el agente padre. No se encontraron en las referencias disponibles la selección inicial de oportunidades espontáneas ni la implementación completa de la programación remota. `WakeParent` no debe confundirse con el algoritmo que decide investigar una oportunidad. [Proactividad](guide/components/proactivity/README.md).

## Cobertura y rigor

- 1.070 archivos originales conservan el mismo Git blob SHA-1. Solo se reorganizaron las carpetas; se retiraron los metadatos de Finder y un marcador vacío.
- 3 bundles centrales analizados mediante AST, con 1.466 módulos seleccionados.
- 19.741 apariciones de funciones con nombre, agrupadas en 14.935 fichas README. Se incluyen métodos y closures con nombre; los callbacks anónimos no reciben una ficha propia.
- Las guías funcionales son análisis manuales. Las fichas generadas registran hechos sintácticos y no afirman una validación semántica completa ni ejecución en producción.
- El snapshot está asociado al commit `655acca99bff0d17466547611108f94ed6a8a5e7`. El marcador original de compilación contiene `fcbae14`; no se ha convertido en una supuesta versión del producto.

Consulta [método y límites](guide/methodology/README.md) y [cobertura](guide/coverage/README.md). Los nombres internos de los símbolos se mantienen intactos: son necesarios para rastrear el código original con precisión.

## Verificar el estudio

```bash
npm ci --prefix tools/research --ignore-scripts
node --expose-gc --max-old-space-size=4096 tools/research/index-harness.cjs
python3 tools/research/render-catalog.py
python3 tools/research/verify-reference.py
```

Estos comandos leen y analizan archivos. No inician el host, no abren sesiones de inferencia ni ejecutan los bundles originales.
