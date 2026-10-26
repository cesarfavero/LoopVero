# `availabilityLine`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/claim-email-inbox-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/claim-email-inbox-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:764831-764846](../../../../../../../reference/runtime/host-main.cjs#L764831-L764846) | `FunctionDeclaration` | no | `target, result` |
| [evaluation:558199-558214](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558199-L558214) | `FunctionDeclaration` | no | `target, result` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764831-764846](../../../../../../../reference/runtime/host-main.cjs#L764831-L764846) | 8 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:558199-558214](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558199-L558214) | 8 | 0 | 0 | 4 | 0 | 0 |

### host:764831

Calls written directly in this body: `result.availability.replace`.

SHA-256 of the source span: `c9689ca9d11bc8b331e36178d8aab3f5ed58aa39074ea8496b9a611da720493a`.

### evaluation:558199

Calls written directly in this body: `result.availability.replace`.

SHA-256 of the source span: `c9689ca9d11bc8b331e36178d8aab3f5ed58aa39074ea8496b9a611da720493a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
