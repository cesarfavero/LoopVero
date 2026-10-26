# `boxPixelSchema`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-computer-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-computer-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:776896-776900](../../../../../../../reference/runtime/host-main.cjs#L776896-L776900) | `FunctionDeclaration` | no | `(none)` |
| [evaluation:576541-576545](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576541-L576545) | `FunctionDeclaration` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:776896-776900](../../../../../../../reference/runtime/host-main.cjs#L776896-L776900) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:576541-576545](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576541-L576545) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:776896

Calls written directly in this body: `.int`, `.refine`, `external_exports2.number`.

SHA-256 of the source span: `8274edc6f382c4fd35037440f5797e8c5c865b6759ec21ec710cdaff1513780b`.

### evaluation:576541

Calls written directly in this body: `.int`, `.refine`, `external_exports3.number`.

SHA-256 of the source span: `f898add37ebb088502479d34a2740c4e5c0653ba0fb12c59e9602b33f5d60a01`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
