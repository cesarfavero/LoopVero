# `dispatchesSubagentDynamicTools`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/subagents/subagent-dynamic-tools.ts` · [README do módulo](../../../../../../modules/core/runner/subagents/subagent-dynamic-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:587790-587797](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587790-L587797) | `FunctionDeclaration` | não | `gates, child` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:587790-587797](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587790-L587797) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:587790

Chamadas escritas diretamente neste corpo: `gates.subagentDynamicTools`, `isSandSubagentDynamicToolsKind`, `resolveSandAgentKind`.

SHA-256 do trecho: `fbbbbe14fdeaf6b58f4074cf41bda97172556b43f9f4fe41bc44d284bd3b4b32`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
