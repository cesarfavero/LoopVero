# `SharedDesktopSandBox.ensureAgentReady`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/box/shared-desktop-sand-box.ts` · [README do módulo](../../../../../modules/core/box/shared-desktop-sand-box-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:554940-555001](../../../../../../reference/runtime/host-main.cjs#L554940-L555001) | `method` | sim | `ctx, agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:554940-555001](../../../../../../reference/runtime/host-main.cjs#L554940-L555001) | 15 | 1 | 12 | 11 | 0 | 1 |

### host:554940

Chamadas escritas diretamente neste corpo: `isPrimaryWindowIndex`, `this.adoptPersistedAssignment`, `this.agentWindowTokens.has`, `this.agentWindowTokens.set`, `this.agentWindows.has`, `this.assignOrReclaimWindow`, `this.claimSeat`, `this.deletedAgents.has`, `this.ensureAssignmentsLoaded`, `this.establishFork`, `this.establishedForks.has`, `this.forgetRefusedSeat`, `this.forkConnection`, `this.freeDeletedAgentSeatsOnce`, `this.gateComputerUse`, `this.inner.ensureReady`, `this.inner.ensureWindow`, `this.keepFailedSeat`, `this.migrateLegacyPrimarySeat`, `this.reattachAdoptedFork`, `this.releaseUnstartableSeat`, `this.windowOptions`, `this.withoutDeletedAgentSeat`.

Alvos de atribuição ou incremento: `assigned`, `attempt`, `isNewAssignment`, `seat`, `tokenIsNew`, `window2`.

SHA-256 do trecho: `0ca5cd89dd1151e001eadc3d4e6218aa577c0da69a4a1b257a7ca9fd66b22cc3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
