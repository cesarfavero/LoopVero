# `withPlaywrightBoxTimingStripped`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/playwright-box-timing.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/playwright-box-timing-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:743121-743138](../../../../../../../../reference/runtime/host-main.cjs#L743121-L743138) | `FunctionDeclaration` | no | `accessor` |
| [evaluation:515972-515989](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L515972-L515989) | `FunctionDeclaration` | no | `accessor` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:743121-743138](../../../../../../../../reference/runtime/host-main.cjs#L743121-L743138) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:515972-515989](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L515972-L515989) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:743121

Calls written directly in this body: `new CombinedResourceAccessor`, `resourceEntry`.

SHA-256 of the source span: `a5b4d89a26bb9a08b5a74c055ef46a8589bf7658f22fbe1333330024b85bd5d5`.

### evaluation:515972

Calls written directly in this body: `new CombinedResourceAccessor`, `resourceEntry`.

SHA-256 of the source span: `a5b4d89a26bb9a08b5a74c055ef46a8589bf7658f22fbe1333330024b85bd5d5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
