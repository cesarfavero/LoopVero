# `SandAgentDb.close`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-db.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-db-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:718319-718339](../../../../../../../reference/runtime/host-main.cjs#L718319-L718339) | `method` | no | `options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:718319-718339](../../../../../../../reference/runtime/host-main.cjs#L718319-L718339) | 3 | 0 | 0 | 1 | 0 | 1 |

### host:718319

Calls written directly in this body: `boundedConnectErrorClassOf`, `releaseLiveDbHandle`, `reportHostDiagnostic`, `this.db.close`, `this.db.exec`, `this.options.onFailure`.

Assignment or increment targets: `this.handleRegistered`, `this.isClosed`.

SHA-256 of the source span: `6029734dd484caacaf45e6f159d825d9f2891c90fbe954efbc532bd683e5e986`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
