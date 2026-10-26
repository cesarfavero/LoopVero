# `memoryFileLines`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/memory/README.md).

**Módulo:** `core/runner/tools/recall-memory-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/recall-memory-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:769768-769778](../../../../../../../reference/runtime/host-main.cjs#L769768-L769778) | `FunctionDeclaration` | não | `facts` |
| [evaluation:565437-565447](../../../../../../../reference/runtime/sand-eval-runner.cjs#L565437-L565447) | `FunctionDeclaration` | não | `facts` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769768-769778](../../../../../../../reference/runtime/host-main.cjs#L769768-L769778) | 1 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:565437-565447](../../../../../../../reference/runtime/sand-eval-runner.cjs#L565437-L565447) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:769768

Chamadas escritas diretamente neste corpo: `.reverse`, `formatMemoryDate`, `kept.push`, `kept.reverse`.

Alvos de atribuição ou incremento: `budget`.

SHA-256 do trecho: `c1667701ac25ba190b4b204645475a9aeb9b872b2d0800616f3dccbeac28b570`.

### evaluation:565437

Chamadas escritas diretamente neste corpo: `.reverse`, `formatMemoryDate`, `kept.push`, `kept.reverse`.

Alvos de atribuição ou incremento: `budget`.

SHA-256 do trecho: `c1667701ac25ba190b4b204645475a9aeb9b872b2d0800616f3dccbeac28b570`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
