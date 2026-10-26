# `forkedExecutorContext`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/subagents/executor-fork.ts` · [README do módulo](../../../../../../modules/core/runner/subagents/executor-fork-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:587591-587602](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587591-L587602) | `FunctionDeclaration` | não | `parentMessages, forkTurns` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:587591-587602](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587591-L587602) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:587591

Chamadas escritas diretamente neste corpo: `budgetForkedEntries`, `clampExecutorForkTurns`, `renderForkedConversation`, `selectForkedConversation`.

SHA-256 do trecho: `579f9b210bfe67f8ad4a300bcd6ad571a1b4b9db154f8bde2f4e8bab40de4e1f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
