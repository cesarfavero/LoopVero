# `SandMcpAccountSlotLifecycle.renameAccount`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-account-slot-lifecycle.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-account-slot-lifecycle-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:685269-685298](../../../../../../../reference/runtime/host-main.cjs#L685269-L685298) | `method` | sim | `rawServerId, rawAccountKey, rawNewAccountKey` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:685269-685298](../../../../../../../reference/runtime/host-main.cjs#L685269-L685298) | 2 | 0 | 3 | 2 | 0 | 0 |

### host:685269

Chamadas escritas diretamente neste corpo: `normalizeAccountKey`, `parseInt32McpServerId`, `this.commitLocalAccountSlotMutation`, `this.deps.backendMcpExec.renameAccount`, `this.deps.clearPendingAuthWatch`, `this.deps.notifyWatchCancelled`, `this.deps.reloadServers`, `this.resolveHttpDisplayServer`.

SHA-256 do trecho: `68fe084ca060aa845e10273354dccffce225f563462cd357920c052c738c504b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
