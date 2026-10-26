# `requestReviewedApproval`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/action-audit/tool-decision-audit.ts` · [README do módulo](../../../../../../modules/core/runner/action-audit/tool-decision-audit-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:699238-699249](../../../../../../../reference/runtime/host-main.cjs#L699238-L699249) | `FunctionDeclaration` | sim | `ctx, controller, request5, decision` |
| [evaluation:489970-489981](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489970-L489981) | `FunctionDeclaration` | sim | `ctx, controller, request3, decision` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699238-699249](../../../../../../../reference/runtime/host-main.cjs#L699238-L699249) | 3 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:489970-489981](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489970-L489981) | 3 | 0 | 1 | 1 | 0 | 0 |

### host:699238

Chamadas escritas diretamente neste corpo: `.recordApproval`, `ctx.get`, `withToolExecutionTimeoutSuspended`.

SHA-256 do trecho: `d10cd0964e98263ce8c2e3b2bac310e608df3e36a341a1d933d4740d094feff4`.

### evaluation:489970

Chamadas escritas diretamente neste corpo: `.recordApproval`, `ctx.get`, `withToolExecutionTimeoutSuspended`.

SHA-256 do trecho: `ad43462f682d35e9178f1334f006eb9f6b19efa16561ed605ea81c54c8b6861b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
