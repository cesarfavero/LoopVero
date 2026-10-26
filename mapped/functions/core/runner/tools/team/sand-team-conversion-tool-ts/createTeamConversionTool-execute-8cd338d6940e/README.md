# `createTeamConversionTool/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/team/sand-team-conversion-tool.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/team/sand-team-conversion-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:781604-781620](../../../../../../../../reference/runtime/host-main.cjs#L781604-L781620) | `ArrowFunctionExpression` | sim | `_ctx, args, d` |
| [evaluation:581951-581967](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581951-L581967) | `ArrowFunctionExpression` | sim | `_ctx, args, d` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781604-781620](../../../../../../../../reference/runtime/host-main.cjs#L781604-L781620) | 5 | 0 | 3 | 4 | 0 | 0 |
| [evaluation:581951-581967](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581951-L581967) | 5 | 0 | 3 | 4 | 0 | 0 |

### host:781604

Chamadas escritas diretamente neste corpo: `d.activeTurnRequestSource`, `d.completeTurn`, `d.teamConversion.copy`, `d.teamConversion.preview`, `d.teamConversion.restart`, `describeCopy`, `describePreview`, `describeRestart`, `humanOnlyReviewLedger`, `ledger.ruleRefused`, `refusal2`.

SHA-256 do trecho: `ed151f291f54ea89436381d1e269867749321861e1e5725f23fefbbb6d748f93`.

### evaluation:581951

Chamadas escritas diretamente neste corpo: `d.activeTurnRequestSource`, `d.completeTurn`, `d.teamConversion.copy`, `d.teamConversion.preview`, `d.teamConversion.restart`, `describeCopy`, `describePreview`, `describeRestart`, `humanOnlyReviewLedger`, `ledger.ruleRefused`, `refusal2`.

SHA-256 do trecho: `ed151f291f54ea89436381d1e269867749321861e1e5725f23fefbbb6d748f93`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
