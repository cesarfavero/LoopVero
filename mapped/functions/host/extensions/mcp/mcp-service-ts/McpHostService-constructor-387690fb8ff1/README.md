# `McpHostService.constructor`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `host/extensions/mcp/mcp-service.ts` · [README do módulo](../../../../../../modules/host/extensions/mcp/mcp-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:701504-701589](../../../../../../../reference/runtime/host-main.cjs#L701504-L701589) | `method` | não | `deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701504-701589](../../../../../../../reference/runtime/host-main.cjs#L701504-L701589) | 3 | 0 | 0 | 0 | 0 | 0 |

### host:701504

Chamadas escritas diretamente neste corpo: `createAccountMcpWriter`, `createBoxSandMcpExec`, `createDashboardSandBackendMcpExec`, `marketplaceDashboardClientFor`.

Alvos de atribuição ou incremento: `this.api`, `this.deps`, `this.hostMcp`.

SHA-256 do trecho: `be5a78b3a787e6aefa4cf1878f298402449f6dae9da4188e652547f0e4245d16`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
