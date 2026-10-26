# `createTeachRecordingService/recoverPending`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/teach-recording/teach-recording-service.ts` · [Module README](../../../../../../modules/host/extensions/teach-recording/teach-recording-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:729204-729246](../../../../../../../reference/runtime/host-main.cjs#L729204-L729246) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:729204-729246](../../../../../../../reference/runtime/host-main.cjs#L729204-L729246) | 4 | 1 | 8 | 3 | 1 | 0 |

### host:729204

Calls written directly in this body: `agentIds.map`, `deps.box.ensureReady`, `deps.ensureLearningSkill`, `deps.listAgentIds`, `deps.sendLearningPrompt`, `entries.filter`, `entries.flatMap`, `learningPrompt`, `learningPromptRichText`, `markPromptDelivered`, `new Map`, `new SandTeachRecordingError`, `parseQueueScan`, `quarantineQueueFiles`, `queueKey`, `queueScanCommand`, `runShell`.

Explicit throw targets: `SandTeachRecordingError`.

SHA-256 of the source span: `a4ef4e6d8c1576b54acb7baae1d5af9b93e12d2fafdabfb1e81b8edffa11f7d5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
