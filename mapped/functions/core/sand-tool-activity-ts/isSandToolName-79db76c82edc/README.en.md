# `isSandToolName`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/tools/README.en.md).

**Module:** `core/sand-tool-activity.ts` · [Module README](../../../../modules/core/sand-tool-activity-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:719668-719670](../../../../../reference/runtime/host-main.cjs#L719668-L719670) | `FunctionDeclaration` | no | `value` |
| [evaluation:526016-526018](../../../../../reference/runtime/sand-eval-runner.cjs#L526016-L526018) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:719668-719670](../../../../../reference/runtime/host-main.cjs#L719668-L719670) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:526016-526018](../../../../../reference/runtime/sand-eval-runner.cjs#L526016-L526018) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:719668

Calls written directly in this body: `sandToolNames.has`.

SHA-256 of the source span: `ac549e99a2b917fce031738f4794bda9438ba7ff9ee2b7e8041d3c30281740cf`.

### evaluation:526016

Calls written directly in this body: `sandToolNames.has`.

SHA-256 of the source span: `ac549e99a2b917fce031738f4794bda9438ba7ff9ee2b7e8041d3c30281740cf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
