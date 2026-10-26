# `describeConnectorConnections`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/connector-files/connection-name.ts` · [Module README](../../../../../../modules/core/runner/connector-files/connection-name-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:773732-773736](../../../../../../../reference/runtime/host-main.cjs#L773732-L773736) | `FunctionDeclaration` | no | `available` |
| [evaluation:572953-572957](../../../../../../../reference/runtime/sand-eval-runner.cjs#L572953-L572957) | `FunctionDeclaration` | no | `available` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773732-773736](../../../../../../../reference/runtime/host-main.cjs#L773732-L773736) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:572953-572957](../../../../../../../reference/runtime/sand-eval-runner.cjs#L572953-L572957) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:773732

Calls written directly in this body: `.join`, `available.map`.

SHA-256 of the source span: `d6ded9e1b2c22261071a1a0df95e1cbec52e4d460736365af884a846363a8a52`.

### evaluation:572953

Calls written directly in this body: `.join`, `available.map`.

SHA-256 of the source span: `d6ded9e1b2c22261071a1a0df95e1cbec52e4d460736365af884a846363a8a52`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
