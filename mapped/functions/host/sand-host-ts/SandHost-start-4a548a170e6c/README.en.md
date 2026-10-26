# `SandHost.start`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/sand-host.ts` · [Module README](../../../../modules/host/sand-host-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:786441-786465](../../../../../reference/runtime/host-main.cjs#L786441-L786465) | `method` | yes | `hooks = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786441-786465](../../../../../reference/runtime/host-main.cjs#L786441-L786465) | 0 | 1 | 2 | 0 | 1 | 1 |

### host:786441

Calls written directly in this body: `.createHostLifecycleProgress`, `hostExtensions.api`, `lifecycle2.fail`, `performance.now`, `this.diagnosticsBeforeStart.splice`, `this.reportHostDiagnostic`, `this.startExtensions`, `this.startWithLifecycle`.

Assignment or increment targets: `this.hostExtensions`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `b7538f6ee2a349799ef839263452fa0aa8688feb9f98bebd8cf1555bd170478a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
