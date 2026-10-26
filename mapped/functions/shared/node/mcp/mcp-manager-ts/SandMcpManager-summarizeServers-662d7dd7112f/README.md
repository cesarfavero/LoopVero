# `SandMcpManager.summarizeServers`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-manager.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:689500-689527](../../../../../../../reference/runtime/host-main.cjs#L689500-L689527) | `method` | não | `visibleServers, listing` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689500-689527](../../../../../../../reference/runtime/host-main.cjs#L689500-L689527) | 4 | 1 | 0 | 1 | 0 | 0 |

### host:689500

Chamadas escritas diretamente neste corpo: `isWithheldMcpDisplayServer`, `listing.backendEntriesFor`, `listing.boxServerFor`, `servers.push`, `this.summaries.createBackendServerSummaries`, `this.summaries.createBoxServerSummary`, `this.withheldSummaries`.

SHA-256 do trecho: `caf3368449aaf8342496a075d325ea1f3648246167f7ed2613bec1c382c8d24d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
