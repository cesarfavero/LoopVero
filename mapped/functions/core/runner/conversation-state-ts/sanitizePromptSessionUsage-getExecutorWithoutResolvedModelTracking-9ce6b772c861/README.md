# `sanitizePromptSessionUsage/getExecutorWithoutResolvedModelTracking`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/conversation-state.ts` · [README do módulo](../../../../../modules/core/runner/conversation-state-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:529660-529665](../../../../../../reference/runtime/sand-eval-runner.cjs#L529660-L529665) | `ArrowFunctionExpression` | não | `state` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:529660-529665](../../../../../../reference/runtime/sand-eval-runner.cjs#L529660-L529665) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:529660 usa retorno implícito de arrow function.

### evaluation:529660

Chamadas escritas diretamente neste corpo: `sanitizePromptExecutorUsage`, `session.getExecutor`, `session.getModelId`.

SHA-256 do trecho: `a3314fdab27a9802c185e9035560279117e89f01f15b8b484dd12d2cb0e33faa`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
