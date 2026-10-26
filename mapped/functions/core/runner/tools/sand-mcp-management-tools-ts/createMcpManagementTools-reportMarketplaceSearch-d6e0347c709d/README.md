# `createMcpManagementTools/reportMarketplaceSearch`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/tools/sand-mcp-management-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:780192-780201](../../../../../../../reference/runtime/host-main.cjs#L780192-L780201) | `ArrowFunctionExpression` | não | `ctx, query2, plugins, recall2` |
| [evaluation:580437-580446](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580437-L580446) | `ArrowFunctionExpression` | não | `ctx, query2, plugins, recall2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780192-780201](../../../../../../../reference/runtime/host-main.cjs#L780192-L780201) | 2 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:580437-580446](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580437-L580446) | 2 | 0 | 0 | 0 | 0 | 0 |

### host:780192

Chamadas escritas diretamente neste corpo: `boundMarketplaceSearch`, `ctx.get`, `getRequestingAgentId`, `options2.getTranscriptId`, `options2.onMarketplaceSearch`, `plugins.map`.

SHA-256 do trecho: `baf401f7468e540a3e6fbb31837051f0408cfc2dad1330cf9ef950e82a98ffc9`.

### evaluation:580437

Chamadas escritas diretamente neste corpo: `boundMarketplaceSearch`, `ctx.get`, `getRequestingAgentId`, `options2.getTranscriptId`, `options2.onMarketplaceSearch`, `plugins.map`.

SHA-256 do trecho: `4007be92d5350380e07fc862812a57ba3845f17b31ebb582d949177d30c94461`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
