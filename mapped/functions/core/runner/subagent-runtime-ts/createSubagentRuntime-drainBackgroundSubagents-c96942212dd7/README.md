# `createSubagentRuntime/drainBackgroundSubagents`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/subagent-runtime.ts` · [README do módulo](../../../../../modules/core/runner/subagent-runtime-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:535596-535600](../../../../../../reference/runtime/sand-eval-runner.cjs#L535596-L535600) | `FunctionDeclaration` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:535596-535600](../../../../../../reference/runtime/sand-eval-runner.cjs#L535596-L535600) | 0 | 1 | 1 | 0 | 0 | 0 |

### evaluation:535596

Chamadas escritas diretamente neste corpo: `Promise.allSettled`, `backgroundSubagentRuns.values`.

SHA-256 do trecho: `6f594977a804696651f6b35c79ae2596885893f25825a0f21e8e88347840efff`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
