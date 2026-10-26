# `SettingsService.getHostSettings`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/settings/settings-service.ts` · [README do módulo](../../../../../../modules/host/extensions/settings/settings-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:728554-728591](../../../../../../../reference/runtime/host-main.cjs#L728554-L728591) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:728554-728591](../../../../../../../reference/runtime/host-main.cjs#L728554-L728591) | 11 | 0 | 0 | 1 | 0 | 0 |

### host:728554

Chamadas escritas diretamente neste corpo: `this.getSelectedTeamId`, `this.store.getActiveAccountScope`, `this.store.getAutoReviewInstructions`, `this.store.getComputerUseModel`, `this.store.getDetectedUserTimeZone`, `this.store.getHasSeenOnboarding`, `this.store.getHasSeenOnboardingAccountScope`, `this.store.getHeldAccountScopes`, `this.store.getLocalToolPermission`, `this.store.getLocalToolPermissionByMachineId`, `this.store.getMcpBoxServers`, `this.store.getMcpCustomInstructions`, `this.store.getMcpCustomInstructionsByServerId`, `this.store.getMcpDisabledToolsByServerId`, `this.store.getMessagesEnabled`, `this.store.getNotificationConfig`, `this.store.getPinnedAgentIds`, `this.store.getSelectedTeam`, `this.store.getSidebarSections`, `this.store.getToolPermissions`, `this.store.getUserTimeZoneOverride`, `this.store.getWebauthnProxyEnabled`.

SHA-256 do trecho: `8ff625780d64157da6e1864af293ac78f407bf645704cc79418fccbbab4765f4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
