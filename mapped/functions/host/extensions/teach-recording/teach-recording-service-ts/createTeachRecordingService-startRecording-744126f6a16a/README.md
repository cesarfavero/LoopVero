# `createTeachRecordingService/startRecording`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/teach-recording/teach-recording-service.ts` · [README do módulo](../../../../../../modules/host/extensions/teach-recording/teach-recording-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:729247-729310](../../../../../../../reference/runtime/host-main.cjs#L729247-L729310) | `ArrowFunctionExpression` | sim | `{     agentId,     entryPoint   }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:729247-729310](../../../../../../../reference/runtime/host-main.cjs#L729247-L729310) | 5 | 0 | 4 | 1 | 4 | 2 |

### host:729247

Chamadas escritas diretamente neste corpo: `.join`, `.replace`, `.toISOString`, `Date.now`, `Math.round`, `String`, `armCap`, `cleanupFailedStart`, `crypto.randomUUID`, `deps.box.ensureReady`, `deps.box.getAgentWindowIndex`, `deps.trackRecordingStarted`, `emit`, `ffmpegCmdlineOwnsVideo`, `isForkWindowIndex`, `new Date`, `new SandBoxNoMonitorAvailableError`, `new SandTeachRecordingError`, `recoverFailedStart`, `resolveCaptureInput`, `runShell`, `sessionJson`, `statusOf2`.

Alvos de atribuição ou incremento: `active`, `failedStart`, `queuePersisted`.

Alvos de lançamento explícito: `SandBoxNoMonitorAvailableError`, `SandTeachRecordingError`, `error64`.

SHA-256 do trecho: `8e4ff9e647149163df0d2ea3d9ebbb833cc27bb18d9396394d264c2f0cf6d559`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
