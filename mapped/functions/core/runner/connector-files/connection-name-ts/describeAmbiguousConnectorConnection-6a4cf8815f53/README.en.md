# `describeAmbiguousConnectorConnection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/connector-files/connection-name.ts` · [Module README](../../../../../../modules/core/runner/connector-files/connection-name-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:773737-773739](../../../../../../../reference/runtime/host-main.cjs#L773737-L773739) | `FunctionDeclaration` | no | `requested, resolution` |
| [evaluation:572958-572960](../../../../../../../reference/runtime/sand-eval-runner.cjs#L572958-L572960) | `FunctionDeclaration` | no | `requested, resolution` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773737-773739](../../../../../../../reference/runtime/host-main.cjs#L773737-L773739) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:572958-572960](../../../../../../../reference/runtime/sand-eval-runner.cjs#L572958-L572960) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:773737

Calls written directly in this body: `JSON.stringify`, `resolution.candidates.join`.

SHA-256 of the source span: `5717ea8e8799a432b5436b9926902167d5e8d2ab1db56fd196a46fec4213d8da`.

### evaluation:572958

Calls written directly in this body: `JSON.stringify`, `resolution.candidates.join`.

SHA-256 of the source span: `5717ea8e8799a432b5436b9926902167d5e8d2ab1db56fd196a46fec4213d8da`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
