# `ToolDecisionAudit.recordAutoReviewRoute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/action-audit/tool-decision-audit.ts` · [README do módulo](../../../../../../modules/core/runner/action-audit/tool-decision-audit-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:489861-489868](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489861-L489868) | `method` | não | `toolCallId, route` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:489861-489868](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489861-L489868) | 2 | 0 | 0 | 0 | 0 | 0 |

### evaluation:489861

Chamadas escritas diretamente neste corpo: `.next`, `this.autoReviewRoutes.delete`, `this.autoReviewRoutes.keys`, `this.autoReviewRoutes.set`.

SHA-256 do trecho: `f3a027e09c3020f96546b01e209df40552b34d7d9025f2af00600ecace706f69`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
