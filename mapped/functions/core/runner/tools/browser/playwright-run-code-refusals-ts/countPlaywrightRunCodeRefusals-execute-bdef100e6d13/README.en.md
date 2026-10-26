# `countPlaywrightRunCodeRefusals/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/playwright-run-code-refusals.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/playwright-run-code-refusals-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:776156-776163](../../../../../../../../reference/runtime/host-main.cjs#L776156-L776163) | `ArrowFunctionExpression` | yes | `ctx, interactionHandler, args, meta3` |
| [evaluation:575812-575819](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L575812-L575819) | `ArrowFunctionExpression` | yes | `ctx, interactionHandler, args, meta3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:776156-776163](../../../../../../../../reference/runtime/host-main.cjs#L776156-L776163) | 1 | 0 | 1 | 1 | 1 | 1 |
| [evaluation:575812-575819](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L575812-L575819) | 1 | 0 | 1 | 1 | 1 | 1 |

### host:776156

Calls written directly in this body: `offer.recordRefusal`, `tool.execute`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `9f5d68fa81360b7641127fbb67e59b905af2f58f7f0cf08715b1815daa2d9432`.

### evaluation:575812

Calls written directly in this body: `offer.recordRefusal`, `tool.execute`.

Explicit throw targets: `error63`.

SHA-256 of the source span: `5742dd37c63a87443886a9bb47bbd1d25724717d44fb42cf2f086dc74e3b8773`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
