# `SandMcpAccountSlotLifecycle.signOutGrokRow`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-account-slot-lifecycle.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-account-slot-lifecycle-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:685323-685338](../../../../../../../reference/runtime/host-main.cjs#L685323-L685338) | `method` | sim | `serverId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:685323-685338](../../../../../../../reference/runtime/host-main.cjs#L685323-L685338) | 2 | 0 | 3 | 1 | 1 | 0 |

### host:685323

Chamadas escritas diretamente neste corpo: `new SandMcpConfigError`, `server.serverIdentifier.trim`, `this.deps.backendMcpExec.logoutAccount`, `this.deps.clearPendingAuthWatch`, `this.deps.invalidateToolsCache`, `this.deps.notifyWatchCancelled`, `this.deps.reloadServers`, `this.deps.resolveDisplayServer`.

Alvos de lançamento explícito: `SandMcpConfigError`.

SHA-256 do trecho: `0d6ed210f444586d6cf005c2b7ce98e10d3ebb4ae62075a835a5865e35ea89fc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
