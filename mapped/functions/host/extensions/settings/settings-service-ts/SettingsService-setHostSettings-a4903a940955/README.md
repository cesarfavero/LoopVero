# `SettingsService.setHostSettings`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/settings/settings-service.ts` · [README do módulo](../../../../../../modules/host/extensions/settings/settings-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:728592-728700](../../../../../../../reference/runtime/host-main.cjs#L728592-L728700) | `method` | não | `update` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:728592-728700](../../../../../../../reference/runtime/host-main.cjs#L728592-L728700) | 27 | 3 | 0 | 1 | 0 | 0 |

### host:728592

Chamadas escritas diretamente neste corpo: `.map`, `Number.isSafeInteger`, `Object.entries`, `Object.fromEntries`, `isValidIanaTimeZone`, `listener`, `normalizeSandLocalToolPermission`, `sandComputerUseModelSchema.safeParse`, `storedSandSettingText`, `this.announceChange`, `this.getHostSettings`, `this.getSelectedTeamId`, `this.setLocalToolPermission`, `this.store.clearAccountScope`, `this.store.getUserTimeZone`, `this.store.scopeToAccount`, `this.store.setAutoReviewInstructions`, `this.store.setComputerUseModel`, `this.store.setHasSeenOnboarding`, `this.store.setLocalToolPermissionsForMachines`, `this.store.setMcpBoxServers`, `this.store.setMcpCustomInstructions`, `this.store.setMcpCustomInstructionsByServerId`, `this.store.setMcpDisabledToolsByServerId`, `this.store.setMessagesEnabled`, `this.store.setNotificationConfig`, `this.store.setPinnedAgentIds`, `this.store.setSelectedTeam`, `this.store.setSidebarSections`, `this.store.setToolPermissions`, `this.store.setUserTimeZone`, `this.store.setUserTimeZoneOverride`, `this.store.setWebauthnProxyEnabled`.

Alvos de atribuição ou incremento: `this.experimentOverrides`, `this.featureFlagOverrides`, `this.lastAnnouncedSelectedTeamId`, `this.osLocale`.

SHA-256 do trecho: `789bf69d5007fc1c2842d7ab878e9d21910ed23b8c237df2b206ef9b1c5eaa66`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
