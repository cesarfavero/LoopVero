# `createTurnMcpExecutorEntries/describeScmError`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/turn-composition/mcp-executor.ts` · [README do módulo](../../../../../../modules/core/runner/turn-composition/mcp-executor-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:585996-586005](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585996-L586005) | `ArrowFunctionExpression` | sim | `result, providerIdentifier, toolName` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585996-586005](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585996-L586005) | 4 | 0 | 0 | 5 | 0 | 0 |

### evaluation:585996

Chamadas escritas diretamente neste corpo: `.trim`, `describeScmToolError`, `host.mcpConfigJsonForTurn`, `scmToolErrorFromMcpResult`, `turnToolHost.gates.scmConnectCard`.

SHA-256 do trecho: `2671dc413f1dbf267d5f924095e6df13f12a005174373b2441f1bb3ec0caf54d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
