# `createTeachRecordingService/stop`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/teach-recording/teach-recording-service.ts` · [Module README](../../../../../../modules/host/extensions/teach-recording/teach-recording-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:729341-729499](../../../../../../../reference/runtime/host-main.cjs#L729341-L729499) | `ArrowFunctionExpression` | yes | `{     agentId,     save,     trackCompletion   }` |
| [host:729546-729546](../../../../../../../reference/runtime/host-main.cjs#L729546-L729546) | `ArrowFunctionExpression` | no | `{ agentId, save }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:729341-729499](../../../../../../../reference/runtime/host-main.cjs#L729341-L729499) | 8 | 0 | 2 | 3 | 1 | 0 |
| [host:729546-729546](../../../../../../../reference/runtime/host-main.cjs#L729546-L729546) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:729546 uses an implicit arrow-function return.

### host:729341

Calls written directly in this body: `Date.now`, `armCap`, `new SandTeachRecordingError`, `statusOf2`.

Assignment or increment targets: `finalizing`, `finalizing.intent`, `stopInFlight`.

Explicit throw targets: `SandTeachRecordingError`.

SHA-256 of the source span: `e06bbebe765ec9098f21dc618116ee62a667a30266365f190267806666b6edda`.

### host:729546

Calls written directly in this body: `stop`.

SHA-256 of the source span: `6ed9ffc0261ce1329eae8591452281f7b1af01c1399216a0671fa923531d0e3d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
