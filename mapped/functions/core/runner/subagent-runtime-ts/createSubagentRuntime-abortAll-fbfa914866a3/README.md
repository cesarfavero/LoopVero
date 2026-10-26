# `createSubagentRuntime/abortAll`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/subagent-runtime.ts` · [README do módulo](../../../../../modules/core/runner/subagent-runtime-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:535611-535615](../../../../../../reference/runtime/sand-eval-runner.cjs#L535611-L535615) | `ArrowFunctionExpression` | não | `reason` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:535611-535615](../../../../../../reference/runtime/sand-eval-runner.cjs#L535611-L535615) | 0 | 1 | 0 | 0 | 0 | 0 |

### evaluation:535611

Chamadas escritas diretamente neste corpo: `abortSubagent`, `backgroundSubagentRuns.keys`.

SHA-256 do trecho: `0006acb7ad564a665386839fb9f9288bcb6544d0e61c4d4840f135b7ad9293ee`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
