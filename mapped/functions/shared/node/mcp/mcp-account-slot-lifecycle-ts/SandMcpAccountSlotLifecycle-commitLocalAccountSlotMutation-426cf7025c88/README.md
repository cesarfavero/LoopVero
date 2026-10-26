# `SandMcpAccountSlotLifecycle.commitLocalAccountSlotMutation`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-account-slot-lifecycle.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-account-slot-lifecycle-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:685339-685366](../../../../../../../reference/runtime/host-main.cjs#L685339-L685366) | `method` | não | `serverId, patchSlots, patchSummaries` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:685339-685366](../../../../../../../reference/runtime/host-main.cjs#L685339-L685366) | 4 | 0 | 0 | 4 | 0 | 0 |

### host:685339

Chamadas escritas diretamente neste corpo: `display.servers.find`, `display.servers.map`, `patchSlots`, `patchSummaries`, `patchedDisplayRow`, `runtimeConfigFromDisplay`, `this.deps.definitionSource.adoptAccountConfig`, `this.deps.dropBackendListing`, `this.deps.invalidateAccountRead`, `this.deps.invalidateToolsCache`, `this.deps.resetPushState`, `unnamedMcpRowIdentifier`.

Alvos de atribuição ou incremento: `this.lastAccountDisplayConfig`, `this.lastListedState`.

SHA-256 do trecho: `dd8ada05e68109e557d956efa964d119211da798ab37018aa999d1d46c51310b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
