# `createTurnAgentComposition/buildAgentForRun/getExecutor`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-agent-composition.ts` · [README do módulo](../../../../../modules/core/runner/turn-agent-composition-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:588141-588141](../../../../../../reference/runtime/sand-eval-runner.cjs#L588141-L588141) | `ArrowFunctionExpression` | não | `state` |
| [evaluation:588242-588250](../../../../../../reference/runtime/sand-eval-runner.cjs#L588242-L588250) | `ArrowFunctionExpression` | não | `state` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:588141-588141](../../../../../../reference/runtime/sand-eval-runner.cjs#L588141-L588141) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:588141 usa retorno implícito de arrow function.
| [evaluation:588242-588250](../../../../../../reference/runtime/sand-eval-runner.cjs#L588242-L588250) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:588141

Chamadas escritas diretamente neste corpo: `applyParentConversationCall`, `summarizationSession.getExecutor`.

SHA-256 do trecho: `a7430dcb3751957b453f648721e8492036d333e07a053a7d6052530afa912c42`.

### evaluation:588242

Chamadas escritas diretamente neste corpo: `applyFrozenToolDescriptions`, `applyParentConversationCall`, `frozenPromptTools.middleware`, `new SandSelfSummaryPromptToolExecutor`, `session.getExecutorWithoutResolvedModelTracking`.

SHA-256 do trecho: `83380a368527d35be77236b3df99eb1da70e54da86aac6b4e43a18e7c33e65d6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
