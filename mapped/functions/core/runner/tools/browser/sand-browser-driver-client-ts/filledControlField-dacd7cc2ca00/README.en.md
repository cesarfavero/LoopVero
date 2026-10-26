# `filledControlField`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/sand-browser-driver-client.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/sand-browser-driver-client-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:724217-724242](../../../../../../../../reference/runtime/host-main.cjs#L724217-L724242) | `FunctionDeclaration` | no | `fields3, key` |
| [evaluation:560111-560136](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L560111-L560136) | `FunctionDeclaration` | no | `fields3, key` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724217-724242](../../../../../../../../reference/runtime/host-main.cjs#L724217-L724242) | 11 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:560111-560136](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L560111-L560136) | 11 | 0 | 0 | 3 | 0 | 0 |

### host:724217

Calls written directly in this body: `booleanField`, `fields3.get`, `objectFields`, `stringField2`.

SHA-256 of the source span: `9896cacf5ab1ec1a67d6ab778810331787d827801cae8b860928a8316e891538`.

### evaluation:560111

Calls written directly in this body: `booleanField`, `fields3.get`, `objectFields`, `stringField2`.

SHA-256 of the source span: `924b13325b37cc8f4f2c8bdf94d9cb0780d6a109a182fbd5ec767ee7f6393a7a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
