# `buildSandExecutorLeanBasePrompt`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/subagents/executor-lean-prompt.ts` · [README do módulo](../../../../../../modules/core/runner/subagents/executor-lean-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:552545-552560](../../../../../../../reference/runtime/sand-eval-runner.cjs#L552545-L552560) | `FunctionDeclaration` | não | `options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:552545-552560](../../../../../../../reference/runtime/sand-eval-runner.cjs#L552545-L552560) | 3 | 0 | 0 | 1 | 0 | 0 |

### evaluation:552545

Chamadas escritas diretamente neste corpo: `.join`, `autoReviewSection`, `draftHandoff`, `sandSubagentEmailPromptLine`, `sendRulesLines`.

SHA-256 do trecho: `f5e43e2f98bd07183ff88ae1562089c4a97175dddf7b4c835a6dbabb0be7a977`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
