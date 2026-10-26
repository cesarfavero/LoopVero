# `shortenArgDescriptions`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/playwright-browser-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:750517-750526](../../../../../../../reference/runtime/host-main.cjs#L750517-L750526) | `FunctionDeclaration` | no | `properties` |
| [evaluation:523368-523377](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523368-L523377) | `FunctionDeclaration` | no | `properties` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750517-750526](../../../../../../../reference/runtime/host-main.cjs#L750517-L750526) | 3 | 1 | 0 | 0 | 0 | 0 |
| [evaluation:523368-523377](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523368-L523377) | 3 | 1 | 0 | 0 | 0 | 0 |

### host:750517

Calls written directly in this body: `Object.entries`, `jsonObjectOf`, `shortenArgDescriptions`.

Assignment or increment targets: `property.description`.

SHA-256 of the source span: `9b60db63d8576b8393f450f2fa67a3d8a26cc299e19871b7db9a9f12666d0625`.

### evaluation:523368

Calls written directly in this body: `Object.entries`, `jsonObjectOf`, `shortenArgDescriptions`.

Assignment or increment targets: `property.description`.

SHA-256 of the source span: `9b60db63d8576b8393f450f2fa67a3d8a26cc299e19871b7db9a9f12666d0625`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
