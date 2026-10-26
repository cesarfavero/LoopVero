# `reportedBoxImageSha`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/playwright-browser-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:750727-750730](../../../../../../../reference/runtime/host-main.cjs#L750727-L750730) | `FunctionDeclaration` | no | `value` |
| [evaluation:523578-523581](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523578-L523581) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750727-750730](../../../../../../../reference/runtime/host-main.cjs#L750727-L750730) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:523578-523581](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523578-L523581) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:750727

Calls written directly in this body: `reportedBoxImageShaSchema.safeParse`.

SHA-256 of the source span: `c9fad6a69518d5aeb44e85b3460c49b5dd2a25c10f358d1dd0bf3d2e0d615c75`.

### evaluation:523578

Calls written directly in this body: `reportedBoxImageShaSchema.safeParse`.

SHA-256 of the source span: `1687b51012d5ac13d22111b9f347b677401d59f47313c8fd893ccee9d77dae0b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
