# `resolveConnectorConnectionName`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/connector-files/connection-name.ts` · [Module README](../../../../../../modules/core/runner/connector-files/connection-name-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:773705-773731](../../../../../../../reference/runtime/host-main.cjs#L773705-L773731) | `FunctionDeclaration` | no | `requested, available` |
| [evaluation:572926-572952](../../../../../../../reference/runtime/sand-eval-runner.cjs#L572926-L572952) | `FunctionDeclaration` | no | `requested, available` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773705-773731](../../../../../../../reference/runtime/host-main.cjs#L773705-L773731) | 4 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:572926-572952](../../../../../../../reference/runtime/sand-eval-runner.cjs#L572926-L572952) | 4 | 0 | 0 | 4 | 0 | 0 |

### host:773705

Calls written directly in this body: `available.filter`, `available.find`, `byService.map`, `connectorServiceKey`.

SHA-256 of the source span: `5bed1e48a3db8223dcdebf56c5a96cdff6b2ca8cc4061747232ec9707200618a`.

### evaluation:572926

Calls written directly in this body: `available.filter`, `available.find`, `byService.map`, `connectorServiceKey`.

SHA-256 of the source span: `5bed1e48a3db8223dcdebf56c5a96cdff6b2ca8cc4061747232ec9707200618a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
