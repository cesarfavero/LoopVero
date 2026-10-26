# `ToolDecisionAudit.personApprovedCard`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/action-audit/tool-decision-audit.ts` · [README do módulo](../../../../../../modules/core/runner/action-audit/tool-decision-audit-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:489846-489848](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489846-L489848) | `method` | não | `toolCallId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:489846-489848](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489846-L489848) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:489846

Chamadas escritas diretamente neste corpo: `this.cardsApprovedPastSettle.has`.

SHA-256 do trecho: `658eb1e194f01fc10e65368b298f6e8c868157b2fcf90b5fbacd0c8850ae5f25`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
