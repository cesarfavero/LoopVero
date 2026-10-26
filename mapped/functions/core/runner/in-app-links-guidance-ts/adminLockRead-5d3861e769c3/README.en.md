# `adminLockRead`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/in-app-links-guidance.ts` · [Module README](../../../../../modules/core/runner/in-app-links-guidance-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:557670-557674](../../../../../../reference/runtime/host-main.cjs#L557670-L557674) | `FunctionDeclaration` | no | `row, facts` |
| [evaluation:546114-546118](../../../../../../reference/runtime/sand-eval-runner.cjs#L546114-L546118) | `FunctionDeclaration` | no | `row, facts` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:557670-557674](../../../../../../reference/runtime/host-main.cjs#L557670-L557674) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:546114-546118](../../../../../../reference/runtime/sand-eval-runner.cjs#L546114-L546118) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:557670

Calls written directly in this body: `isSandUiMapAdminPolicy`.

SHA-256 of the source span: `eec9c7bc89ebe2b01ba152e329b829974cfe23c486fa3bf467780975b6e592b5`.

### evaluation:546114

Calls written directly in this body: `isSandUiMapAdminPolicy`.

SHA-256 of the source span: `eec9c7bc89ebe2b01ba152e329b829974cfe23c486fa3bf467780975b6e592b5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
