# `leanExecutorPromptDeps/holdsCloudAgent`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/subagents/executor-lean-options.ts` · [README do módulo](../../../../../../modules/core/runner/subagents/executor-lean-options-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:582757-582760](../../../../../../../reference/runtime/sand-eval-runner.cjs#L582757-L582760) | `ArrowFunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:582757-582760](../../../../../../../reference/runtime/sand-eval-runner.cjs#L582757-L582760) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:582757

Chamadas escritas diretamente neste corpo: `gates.cloudAgentsDisabledByTeam`, `gates.cloudAgentsUnavailableOnPlan`, `host`.

SHA-256 do trecho: `50d3e9959576234248d9f777f00fa0130b6d61b2034fe47ec63ea2f076637b46`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
