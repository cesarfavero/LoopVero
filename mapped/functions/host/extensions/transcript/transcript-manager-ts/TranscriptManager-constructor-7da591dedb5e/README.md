# `TranscriptManager.constructor`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/transcript-manager.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/transcript-manager-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:783222-783252](../../../../../../../reference/runtime/host-main.cjs#L783222-L783252) | `method` | não | `deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:783222-783252](../../../../../../../reference/runtime/host-main.cjs#L783222-L783252) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:783222

Chamadas escritas diretamente neste corpo: `createTaskBoundaryPolicy`, `new PromptAcceptanceLedger`, `new RunLifecycle`, `new SessionRuntime`, `new UpgradeRecreateResume`, `this.sessionStore.cleanupLegacyGroupMemberDirs`, `this.sessionStore.setBeingDeletedPredicate`, `this.sessionStore.setMemory`.

Alvos de atribuição ou incremento: `this.acceptanceLedger`, `this.attachments`, `this.boxHarnessRefusals`, `this.boxSecretStore`, `this.clock`, `this.contentSearch`, `this.draftExecution`, `this.execution`, `this.hostLog`, `this.memory`, `this.productAnalytics`, `this.requestCredentialAutoFill`, `this.runLifecycle`, `this.sessionStore`, `this.sessions`, `this.taskBoundary`, `this.telemetry`, `this.temporalMemberDelegate`, `this.traceFlusher`, `this.trayErrors`, `this.upgradeResume`, `this.userFormPort`.

SHA-256 do trecho: `73c7672005c5ad8bf38066ac7cb9e5e4f34d47951b9879e6aee06874cb9e9f37`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
