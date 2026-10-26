# `codeSpanRanges`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/media/markdown-preview.ts` · [README do módulo](../../../../../modules/shared/media/markdown-preview-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:721992-722054](../../../../../../reference/runtime/host-main.cjs#L721992-L722054) | `FunctionDeclaration` | não | `input2, fences, options2 = {}` |
| [evaluation:539969-540031](../../../../../../reference/runtime/sand-eval-runner.cjs#L539969-L540031) | `FunctionDeclaration` | não | `input2, fences, options2 = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:721992-722054](../../../../../../reference/runtime/host-main.cjs#L721992-L722054) | 9 | 5 | 0 | 1 | 0 | 0 |
| [evaluation:539969-540031](../../../../../../reference/runtime/sand-eval-runner.cjs#L539969-L540031) | 9 | 5 | 0 | 1 | 0 | 0 |

### host:721992

Chamadas escritas diretamente neste corpo: `blankLineGaps`, `cursorByLength.get`, `cursorByLength.set`, `indices.push`, `input2.matchAll`, `insideRanges`, `isBackslashEscaped`, `new Map`, `new Set`, `ranges.push`, `runIndicesByLength.get`, `runIndicesByLength.set`, `runs.entries`, `runs.push`, `unopenable.add`, `unopenable.has`.

Alvos de atribuição ou incremento: `cursor`, `gapIndex`, `index`.

SHA-256 do trecho: `a1c50e85efc92f00f34e7f50659224445cae10e719900079af8ca63d074782fe`.

### evaluation:539969

Chamadas escritas diretamente neste corpo: `blankLineGaps`, `cursorByLength.get`, `cursorByLength.set`, `indices.push`, `input2.matchAll`, `insideRanges`, `isBackslashEscaped`, `new Map`, `new Set`, `ranges.push`, `runIndicesByLength.get`, `runIndicesByLength.set`, `runs.entries`, `runs.push`, `unopenable.add`, `unopenable.has`.

Alvos de atribuição ou incremento: `cursor`, `gapIndex`, `index`.

SHA-256 do trecho: `40c8c17378e834888258d588b26eaa7ff0dcd90b1f5f7e60738abd2d7891a0ab`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
