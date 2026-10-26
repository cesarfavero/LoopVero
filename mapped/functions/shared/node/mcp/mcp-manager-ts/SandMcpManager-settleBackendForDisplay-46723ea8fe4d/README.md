# `SandMcpManager.settleBackendForDisplay`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-manager.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:689536-689556](../../../../../../../reference/runtime/host-main.cjs#L689536-L689556) | `method` | não | `visibleServers` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689536-689556](../../../../../../../reference/runtime/host-main.cjs#L689536-L689556) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:689536

Chamadas escritas diretamente neste corpo: `.then`, `Promise.all`, `httpDisplayServers`, `httpServers.map`, `this.connectorAuth.read`, `this.listingCache.joinBackend`.

SHA-256 do trecho: `94f6a7cbc0e218f9490d418eb92dffc0b47e6a03033a19a6e1ac473ce9dfd7ae`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
