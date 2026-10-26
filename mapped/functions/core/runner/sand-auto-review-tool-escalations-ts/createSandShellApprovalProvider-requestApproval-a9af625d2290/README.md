# `createSandShellApprovalProvider/requestApproval`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/sand-auto-review-tool-escalations.ts` · [README do módulo](../../../../../modules/core/runner/sand-auto-review-tool-escalations-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:583543-583584](../../../../../../reference/runtime/sand-eval-runner.cjs#L583543-L583584) | `ArrowFunctionExpression` | sim | `request3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:583543-583584](../../../../../../reference/runtime/sand-eval-runner.cjs#L583543-L583584) | 8 | 0 | 2 | 2 | 0 | 0 |

### evaluation:583543

Chamadas escritas diretamente neste corpo: `appliedRulesOf`, `args.beforeApproval`, `args.controller.requestApproval`, `args.getExpiryPolicy`, `args.toolDecisionAudit.recordApproval`, `args.toolDecisionAudit.recordLocalToolAuthorization`, `cautionNoteOf`, `describeSandShellAutoReviewActionSource`, `request3.target.description.trim`.

SHA-256 do trecho: `a654ac7323276e29e8de2f69a3d3e8804891ce342679c22e3be6223a5b5b5925`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
