# `boxHelpHost`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/box-help-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/box-help-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:725289-725298](../../../../../../../reference/runtime/host-main.cjs#L725289-L725298) | `FunctionDeclaration` | no | `raw` |
| [evaluation:560375-560384](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560375-L560384) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:725289-725298](../../../../../../../reference/runtime/host-main.cjs#L725289-L725298) | 3 | 0 | 0 | 3 | 0 | 1 |
| [evaluation:560375-560384](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560375-L560384) | 3 | 0 | 0 | 3 | 0 | 1 |

### host:725289

Calls written directly in this body: `.toLowerCase`, `new URL`, `raw.trim`, `value.includes`.

SHA-256 of the source span: `a8b6cac146e18e791cd6e4f0cd162eefd8cb3e9ff934891beac89e1ed0c7296a`.

### evaluation:560375

Calls written directly in this body: `.toLowerCase`, `new URL`, `raw.trim`, `value.includes`.

SHA-256 of the source span: `c11458aa0d784f4d2cab4b2ba3c4eea36b9bc6753e5efdca393e7a573e71ea1c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
