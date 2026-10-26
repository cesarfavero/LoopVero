# `recallMemory`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/memory/README.md).

**Módulo:** `core/runner/tools/recall-memory-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/recall-memory-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:769745-769760](../../../../../../../reference/runtime/host-main.cjs#L769745-L769760) | `FunctionDeclaration` | sim | `ctx, deps, args` |
| [evaluation:565414-565429](../../../../../../../reference/runtime/sand-eval-runner.cjs#L565414-L565429) | `FunctionDeclaration` | sim | `ctx, deps, args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769745-769760](../../../../../../../reference/runtime/host-main.cjs#L769745-L769760) | 2 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:565414-565429](../../../../../../../reference/runtime/sand-eval-runner.cjs#L565414-L565429) | 2 | 0 | 1 | 1 | 0 | 0 |

### host:769745

Chamadas escritas diretamente neste corpo: `.search`, `Math.min`, `args.query.trim`, `createMemoryVirtualMount`, `recordMemoryRecall`, `renderRecallMemoryLines`, `result.hits.map`, `userBotOffered`.

SHA-256 do trecho: `39e9f014d4a8c6404574f7da1c7527ad9f1627888c0e3803ddceb3b5d5bfbd77`.

### evaluation:565414

Chamadas escritas diretamente neste corpo: `.search`, `Math.min`, `args.query.trim`, `createMemoryVirtualMount`, `recordMemoryRecall`, `renderRecallMemoryLines`, `result.hits.map`, `userBotOffered`.

SHA-256 do trecho: `39e9f014d4a8c6404574f7da1c7527ad9f1627888c0e3803ddceb3b5d5bfbd77`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
