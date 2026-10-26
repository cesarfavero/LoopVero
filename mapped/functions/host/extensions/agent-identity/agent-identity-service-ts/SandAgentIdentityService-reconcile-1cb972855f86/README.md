# `SandAgentIdentityService.reconcile`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/agent-identity/agent-identity-service.ts` · [README do módulo](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:495759-495841](../../../../../../../reference/runtime/host-main.cjs#L495759-L495841) | `method` | sim | `signal` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:495759-495841](../../../../../../../reference/runtime/host-main.cjs#L495759-L495841) | 7 | 1 | 3 | 4 | 0 | 2 |

### host:495759

Chamadas escritas diretamente neste corpo: `errorMessage`, `logFields`, `signal.throwIfAborted`, `this.deps.getAgentsRootDir`, `this.deps.isEnabled`, `this.deps.log`, `this.deps.report`, `this.deps.retry.runWithRetry`, `this.isAwaitingLocalMaterialization`, `this.reconcileAvatar`, `this.removeDeletedAgentDirs`, `this.reportAgentReconcileFailure`, `this.resolvePendingDeletes`, `this.serverAvatarVersions.set`, `this.syncDownAgent`, `this.syncDownRetry.passFailed`, `this.syncDownRetry.passSucceeded`, `this.syncDownRetry.passUnreadable`, `this.unlistedTemporalMirrorIdsOf`.

Alvos de atribuição ou incremento: `agentsFailed`, `avatarOutcome`, `avatarRestoreFailed`, `avatarsRestored`, `listing`, `skippedLocal`, `synced`.

SHA-256 do trecho: `b0bde9082fca767610f8ed1e49eb29b2d312cc2519b6231625c9826e14b99d72`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
