# `pageChangeCannotRedirect`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/playwright-browser-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:750568-750570](../../../../../../../reference/runtime/host-main.cjs#L750568-L750570) | `FunctionDeclaration` | no | `name18, args` |
| [evaluation:523419-523421](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523419-L523421) | `FunctionDeclaration` | no | `name18, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750568-750570](../../../../../../../reference/runtime/host-main.cjs#L750568-L750570) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:523419-523421](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523419-L523421) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:750568

Calls written directly in this body: `PAGE_INDEPENDENT_ROWS.has`, `isAbsoluteHttpUrl`.

SHA-256 of the source span: `5c54656e2d2a0c170d53c9efcbd71585e2a427921cb4018cc13fd704d65c5afd`.

### evaluation:523419

Calls written directly in this body: `PAGE_INDEPENDENT_ROWS.has`, `isAbsoluteHttpUrl`.

SHA-256 of the source span: `5c54656e2d2a0c170d53c9efcbd71585e2a427921cb4018cc13fd704d65c5afd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
