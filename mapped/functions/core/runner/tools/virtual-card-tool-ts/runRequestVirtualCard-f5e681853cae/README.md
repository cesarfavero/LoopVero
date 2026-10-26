# `runRequestVirtualCard`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/virtual-card-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/virtual-card-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:775351-775375](../../../../../../../reference/runtime/host-main.cjs#L775351-L775375) | `FunctionDeclaration` | sim | `args, deps` |
| [evaluation:574996-575020](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574996-L575020) | `FunctionDeclaration` | sim | `args, deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775351-775375](../../../../../../../reference/runtime/host-main.cjs#L775351-L775375) | 5 | 0 | 2 | 4 | 0 | 0 |
| [evaluation:574996-575020](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574996-L575020) | 5 | 0 | 2 | 4 | 0 | 0 |

### host:775351

Chamadas escritas diretamente neste corpo: `Date.now`, `buildVirtualCardApprovalMessage`, `deps.endTurn`, `deps.getAgentId`, `deps.onSendMessage`, `deps.requestCard`, `deps.retireCard`, `deps.toolDecisions.askAPerson`, `invariant`, `normalizeVirtualCardRequest`.

SHA-256 do trecho: `df00504e653f59786cf09bd5a920cdba9c26c109ba18d9af5e243275a74fb5db`.

### evaluation:574996

Chamadas escritas diretamente neste corpo: `Date.now`, `buildVirtualCardApprovalMessage`, `deps.endTurn`, `deps.getAgentId`, `deps.onSendMessage`, `deps.requestCard`, `deps.retireCard`, `deps.toolDecisions.askAPerson`, `invariant`, `normalizeVirtualCardRequest`.

SHA-256 do trecho: `df00504e653f59786cf09bd5a920cdba9c26c109ba18d9af5e243275a74fb5db`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
