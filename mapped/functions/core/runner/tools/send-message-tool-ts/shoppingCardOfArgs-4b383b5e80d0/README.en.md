# `shoppingCardOfArgs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-message-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:760814-760832](../../../../../../../reference/runtime/host-main.cjs#L760814-L760832) | `FunctionDeclaration` | no | `rawArgs, deps` |
| [evaluation:551629-551647](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551629-L551647) | `FunctionDeclaration` | no | `rawArgs, deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760814-760832](../../../../../../../reference/runtime/host-main.cjs#L760814-L760832) | 4 | 0 | 0 | 2 | 2 | 0 |
| [evaluation:551629-551647](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551629-L551647) | 4 | 0 | 0 | 2 | 2 | 0 |

### host:760814

Calls written directly in this body: `Date.now`, `deps.renderCards.shoppingOffered`, `new SandToolInputError`, `read2.errors.join`, `readShoppingCard`, `shoppingFallbackText`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `2c342120c1373f335cd120af3a1d126a8f414e1d2ca903b79b38078de32a5679`.

### evaluation:551629

Calls written directly in this body: `Date.now`, `deps.renderCards.shoppingOffered`, `new SandToolInputError`, `read2.errors.join`, `readShoppingCard`, `shoppingFallbackText`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `2c342120c1373f335cd120af3a1d126a8f414e1d2ca903b79b38078de32a5679`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
