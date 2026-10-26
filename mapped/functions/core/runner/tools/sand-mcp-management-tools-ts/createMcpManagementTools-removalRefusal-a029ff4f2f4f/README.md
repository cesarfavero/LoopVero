# `createMcpManagementTools/removalRefusal`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/tools/sand-mcp-management-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:780223-780229](../../../../../../../reference/runtime/host-main.cjs#L780223-L780229) | `ArrowFunctionExpression` | não | `intent, target` |
| [evaluation:580468-580474](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580468-L580474) | `ArrowFunctionExpression` | não | `intent, target` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780223-780229](../../../../../../../reference/runtime/host-main.cjs#L780223-L780229) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:580468-580474](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580468-L580474) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:780223

Chamadas escritas diretamente neste corpo: `intent.turnRequestSource`, `isUserStartedTurn`, `repairs.repairFor`.

SHA-256 do trecho: `490aa25e2fb5cf1ca920481bb015f176d86fe93ede2e3e9eb42f8586a7fdca33`.

### evaluation:580468

Chamadas escritas diretamente neste corpo: `intent.turnRequestSource`, `isUserStartedTurn`, `repairs.repairFor`.

SHA-256 do trecho: `490aa25e2fb5cf1ca920481bb015f176d86fe93ede2e3e9eb42f8586a7fdca33`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
