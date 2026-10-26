# `gateRead`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/in-app-links-guidance.ts` · [Module README](../../../../../modules/core/runner/in-app-links-guidance-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:557649-557651](../../../../../../reference/runtime/host-main.cjs#L557649-L557651) | `FunctionDeclaration` | no | `facts, gate` |
| [evaluation:546096-546098](../../../../../../reference/runtime/sand-eval-runner.cjs#L546096-L546098) | `FunctionDeclaration` | no | `facts, gate` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:557649-557651](../../../../../../reference/runtime/host-main.cjs#L557649-L557651) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:546096-546098](../../../../../../reference/runtime/sand-eval-runner.cjs#L546096-L546098) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:557649

Calls written directly in this body: `isSandUiMapGateName`.

SHA-256 of the source span: `60a8410e4506ebbc2f059cfcc0b1874d7718eaa319fc50df9ff58102cc9d9e90`.

### evaluation:546096

Calls written directly in this body: `isSandUiMapGateName`.

SHA-256 of the source span: `60a8410e4506ebbc2f059cfcc0b1874d7718eaa319fc50df9ff58102cc9d9e90`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
