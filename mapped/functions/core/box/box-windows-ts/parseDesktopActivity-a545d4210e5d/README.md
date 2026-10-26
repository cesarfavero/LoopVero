# `parseDesktopActivity`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/box/box-windows.ts` · [README do módulo](../../../../../modules/core/box/box-windows-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:554083-554124](../../../../../../reference/runtime/host-main.cjs#L554083-L554124) | `FunctionDeclaration` | não | `stdout, windowIndexes` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:554083-554124](../../../../../../reference/runtime/host-main.cjs#L554083-L554124) | 10 | 1 | 0 | 2 | 0 | 0 |

### host:554083

Chamadas escritas diretamente neste corpo: `.filter`, `.split`, `Math.max`, `Number.isFinite`, `Number.isInteger`, `Number.parseFloat`, `Number.parseInt`, `byWindow.set`, `line.trim`, `new Map`, `parseEpochSeconds`, `stdout.split`, `windowIndexes.flatMap`, `windowIndexes.includes`.

Alvos de atribuição ou incremento: `memory`, `nowMs2`, `psiSomeAvg10`.

SHA-256 do trecho: `08a1eea41a0ea848ece61dc798a088ce52da1349b14fa0edf455333dc592b194`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
