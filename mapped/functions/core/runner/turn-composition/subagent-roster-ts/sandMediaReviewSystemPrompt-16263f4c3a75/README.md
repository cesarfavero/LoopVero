# `sandMediaReviewSystemPrompt`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/turn-composition/subagent-roster.ts` · [README do módulo](../../../../../../modules/core/runner/turn-composition/subagent-roster-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:587622-587627](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587622-L587627) | `FunctionDeclaration` | não | `subagentType` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:587622-587627](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587622-L587627) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:587622

Chamadas escritas diretamente neste corpo: `.systemReminder`, `buildSandSubagentConfigs`, `findSubagentConfigByName`, `isMediaReviewSubagentType`.

SHA-256 do trecho: `b62ec794da2d1447cf0faa4100d5205dbebc494a1250ed3aca6ca9491aa6f8ee`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
