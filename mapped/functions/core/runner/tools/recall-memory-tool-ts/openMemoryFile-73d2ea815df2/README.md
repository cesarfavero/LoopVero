# `openMemoryFile`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/memory/README.md).

**Módulo:** `core/runner/tools/recall-memory-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/recall-memory-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:769779-769806](../../../../../../../reference/runtime/host-main.cjs#L769779-L769806) | `FunctionDeclaration` | não | `ctx, deps, requested` |
| [evaluation:565448-565475](../../../../../../../reference/runtime/sand-eval-runner.cjs#L565448-L565475) | `FunctionDeclaration` | não | `ctx, deps, requested` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769779-769806](../../../../../../../reference/runtime/host-main.cjs#L769779-L769806) | 5 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:565448-565475](../../../../../../../reference/runtime/sand-eval-runner.cjs#L565448-L565475) | 5 | 0 | 0 | 3 | 0 | 0 |

### host:769779

Chamadas escritas diretamente neste corpo: `.join`, `.map`, `facts.filter`, `inFile.map`, `memoryFileLines`, `memoryFolderFactsOf`, `new Set`, `normalizedMemoryFilePath`, `paths.join`, `recordMemoryRecall`.

SHA-256 do trecho: `d11c008b6f13613cb3fb383694a8403454308c118019720d0ca1fe3175a99116`.

### evaluation:565448

Chamadas escritas diretamente neste corpo: `.join`, `.map`, `facts.filter`, `inFile.map`, `memoryFileLines`, `memoryFolderFactsOf`, `new Set`, `normalizedMemoryFilePath`, `paths.join`, `recordMemoryRecall`.

SHA-256 do trecho: `d11c008b6f13613cb3fb383694a8403454308c118019720d0ca1fe3175a99116`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
