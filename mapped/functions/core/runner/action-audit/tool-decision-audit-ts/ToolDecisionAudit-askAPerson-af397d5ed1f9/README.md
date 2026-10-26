# `ToolDecisionAudit.askAPerson`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/action-audit/tool-decision-audit.ts` · [README do módulo](../../../../../../modules/core/runner/action-audit/tool-decision-audit-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:489821-489823](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489821-L489823) | `method` | não | `toolCallId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:489821-489823](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489821-L489823) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:489821

Chamadas escritas diretamente neste corpo: `this.touch`.

Alvos de atribuição ou incremento: `.askedAPerson`.

SHA-256 do trecho: `33d82c782f01677f3e57f0bf5155107661316e5a71191278c41c5f2c6cd4599d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
