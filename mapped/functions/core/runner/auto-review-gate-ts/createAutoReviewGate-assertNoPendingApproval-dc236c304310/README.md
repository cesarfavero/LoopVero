# `createAutoReviewGate/assertNoPendingApproval`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/auto-review-gate.ts` · [README do módulo](../../../../../modules/core/runner/auto-review-gate-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:490152-490157](../../../../../../reference/runtime/sand-eval-runner.cjs#L490152-L490157) | `FunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:490152-490157](../../../../../../reference/runtime/sand-eval-runner.cjs#L490152-L490157) | 1 | 0 | 0 | 0 | 1 | 0 |

### evaluation:490152

Chamadas escritas diretamente neste corpo: `.getPendingApprovals`, `deps.controller`, `new SandAutoReviewPendingApprovalError`.

Alvos de lançamento explícito: `SandAutoReviewPendingApprovalError`.

SHA-256 do trecho: `2156df4fcc099b6b924574cc646bf9d5bb85079131c0f10d116e0844c9d17bfd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
