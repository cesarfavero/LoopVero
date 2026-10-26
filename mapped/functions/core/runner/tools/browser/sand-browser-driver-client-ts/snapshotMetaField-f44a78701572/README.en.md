# `snapshotMetaField`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/sand-browser-driver-client.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/sand-browser-driver-client-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:724189-724203](../../../../../../../../reference/runtime/host-main.cjs#L724189-L724203) | `FunctionDeclaration` | no | `fields3, key` |
| [evaluation:560083-560097](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L560083-L560097) | `FunctionDeclaration` | no | `fields3, key` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724189-724203](../../../../../../../../reference/runtime/host-main.cjs#L724189-L724203) | 5 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:560083-560097](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L560083-L560097) | 5 | 0 | 0 | 2 | 0 | 0 |

### host:724189

Calls written directly in this body: `booleanField`, `fields3.get`, `objectFields`, `raw.get`.

SHA-256 of the source span: `4e4ebaad8ae4ba5fc1c996ad038f0f6d2ec681ea678808ee6b5c050841920b04`.

### evaluation:560083

Calls written directly in this body: `booleanField`, `fields3.get`, `objectFields`, `raw.get`.

SHA-256 of the source span: `4e4ebaad8ae4ba5fc1c996ad038f0f6d2ec681ea678808ee6b5c050841920b04`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
