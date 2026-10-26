# `classifyStderr`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-browser-shell-diagnostic.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-browser-shell-diagnostic-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:724031-724036](../../../../../../../reference/runtime/host-main.cjs#L724031-L724036) | `FunctionDeclaration` | no | `stderr` |
| [evaluation:559989-559994](../../../../../../../reference/runtime/sand-eval-runner.cjs#L559989-L559994) | `FunctionDeclaration` | no | `stderr` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724031-724036](../../../../../../../reference/runtime/host-main.cjs#L724031-L724036) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:559989-559994](../../../../../../../reference/runtime/sand-eval-runner.cjs#L559989-L559994) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:724031

Calls written directly in this body: `/\b(?:ERR_)?MODULE_NOT_FOUND\b/.test`, `stderr.includes`.

SHA-256 of the source span: `5f8eaa83795b614d2d3b37e3ede4926d35c7ff0009e388727265e333f72abf12`.

### evaluation:559989

Calls written directly in this body: `/\b(?:ERR_)?MODULE_NOT_FOUND\b/.test`, `stderr.includes`.

SHA-256 of the source span: `5f8eaa83795b614d2d3b37e3ede4926d35c7ff0009e388727265e333f72abf12`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
