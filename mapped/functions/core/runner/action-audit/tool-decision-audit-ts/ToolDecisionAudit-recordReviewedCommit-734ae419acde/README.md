# `ToolDecisionAudit.recordReviewedCommit`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/action-audit/tool-decision-audit.ts` · [README do módulo](../../../../../../modules/core/runner/action-audit/tool-decision-audit-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:489849-489857](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489849-L489857) | `method` | não | `toolCallId, commit2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:489849-489857](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489849-L489857) | 3 | 0 | 0 | 1 | 0 | 0 |

### evaluation:489849

Chamadas escritas diretamente neste corpo: `.next`, `countsAsOutboundAction`, `this.reviewedCommits.delete`, `this.reviewedCommits.keys`, `this.reviewedCommits.set`.

SHA-256 do trecho: `49efe8afe5486e173f373ca269c1dc8c9aef71f4ef27b6e917210a2d4d8c8986`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
