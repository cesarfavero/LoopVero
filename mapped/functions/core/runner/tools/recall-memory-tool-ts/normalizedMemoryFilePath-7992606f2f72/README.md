# `normalizedMemoryFilePath`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/memory/README.md).

**Módulo:** `core/runner/tools/recall-memory-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/recall-memory-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:769761-769767](../../../../../../../reference/runtime/host-main.cjs#L769761-L769767) | `FunctionDeclaration` | não | `raw` |
| [evaluation:565430-565436](../../../../../../../reference/runtime/sand-eval-runner.cjs#L565430-L565436) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769761-769767](../../../../../../../reference/runtime/host-main.cjs#L769761-L769767) | 2 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:565430-565436](../../../../../../../reference/runtime/sand-eval-runner.cjs#L565430-L565436) | 2 | 1 | 0 | 1 | 0 | 0 |

### host:769761

Chamadas escritas diretamente neste corpo: `.replace`, `file2.endsWith`, `file2.slice`, `file2.startsWith`, `raw.trim`.

Alvos de atribuição ou incremento: `file2`.

SHA-256 do trecho: `6287ab49d71c2d5bda0e2da905450de017e9355a298e62214f281ccc036da0f7`.

### evaluation:565430

Chamadas escritas diretamente neste corpo: `.replace`, `file2.endsWith`, `file2.slice`, `file2.startsWith`, `raw.trim`.

Alvos de atribuição ou incremento: `file2`.

SHA-256 do trecho: `f94a058a9fb7eeb4bd50856976ce50d7a8f69d3b02cd68e37d3a877a6e082311`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
