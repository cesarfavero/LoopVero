# `SandAgentIdentityService.syncDownAgent`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/agent-identity/agent-identity-service.ts` · [README do módulo](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:495972-496005](../../../../../../../reference/runtime/host-main.cjs#L495972-L496005) | `method` | sim | `root, agent` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:495972-496005](../../../../../../../reference/runtime/host-main.cjs#L495972-L496005) | 8 | 0 | 3 | 4 | 0 | 0 |

### host:495972

Chamadas escritas diretamente neste corpo: `agent.name.trim`, `assertSandProfileNotLinked`, `getSandProfilePath`, `identityFromRowKeepingNamedBy`, `local.name.trim`, `mirrorDraftingDisabled`, `readSandProfileFile`, `seededGroupChatTitleRepair`, `this.bindDirToRow`, `this.deferBindUntilEditPushed`, `this.deletedAgents.has`, `this.deps.onBoxAgentRenamed`, `this.expectedEditCounts.has`, `this.keptServerTitles.has`, `this.keptServerTitles.set`, `this.noteAgentIdentityChanged`, `this.noteRoomPeople`, `this.pendingEditIds.has`, `this.prepareMediaRoots`, `this.rememberServerIdentity`, `this.repairGroupChatTitle`, `this.unacknowledgedEditIds.delete`, `this.unacknowledgedEditIds.has`.

SHA-256 do trecho: `0a872450d8d0656ac92b4714fcf36ae43406bc43e9aa148b373752bb79f5a43f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
