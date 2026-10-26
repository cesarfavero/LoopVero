# `findTurnMcpTool`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/turn-composition/mcp-executor.ts` · [README do módulo](../../../../../../modules/core/runner/turn-composition/mcp-executor-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:585887-585890](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585887-L585890) | `FunctionDeclaration` | não | `mcp, host, lookup3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585887-585890](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585887-L585890) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:585887

Chamadas escritas diretamente neste corpo: `host.mcpConfigJsonForTurn`, `mcp.findTool`.

SHA-256 do trecho: `009bf0428121ae921533f5a45a215d4cf2beb34e5a04d1f72642cb625417bd41`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
