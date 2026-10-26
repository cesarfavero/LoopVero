# `createRecallMemoryTool`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/memory/README.md).

**Módulo:** `core/runner/tools/recall-memory-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/recall-memory-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:769808-769836](../../../../../../../reference/runtime/host-main.cjs#L769808-L769836) | `FunctionDeclaration` | não | `deps, offersMemoryUpdate = true, library = false` |
| [evaluation:565477-565505](../../../../../../../reference/runtime/sand-eval-runner.cjs#L565477-L565505) | `FunctionDeclaration` | não | `deps, offersMemoryUpdate = true, library = false` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769808-769836](../../../../../../../reference/runtime/host-main.cjs#L769808-L769836) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:565477-565505](../../../../../../../reference/runtime/sand-eval-runner.cjs#L565477-L565505) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:769808

Chamadas escritas diretamente neste corpo: `defineCommunicateTool`, `recallMemoryDescription`.

SHA-256 do trecho: `b071780683f296f9969dae414bf7930a917afda2323bcae13d6772bae6ee25cf`.

### evaluation:565477

Chamadas escritas diretamente neste corpo: `defineCommunicateTool`, `recallMemoryDescription`.

SHA-256 do trecho: `b071780683f296f9969dae414bf7930a917afda2323bcae13d6772bae6ee25cf`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
