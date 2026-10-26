# `startComputerUseSpan`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/computer-use-tracing/computer-use-spans.ts` · [Module README](../../../../../../../modules/core/runner/tools/computer-use-tracing/computer-use-spans-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:743033-743038](../../../../../../../../reference/runtime/host-main.cjs#L743033-L743038) | `FunctionDeclaration` | no | `ctx, name18, attributes = {}` |
| [evaluation:515884-515889](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L515884-L515889) | `FunctionDeclaration` | no | `ctx, name18, attributes = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:743033-743038](../../../../../../../../reference/runtime/host-main.cjs#L743033-L743038) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:515884-515889](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L515884-L515889) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:743033

Calls written directly in this body: `ctx.withName`, `getSpan2`, `isTraced`, `new TracedComputerUseSpan`, `new UntracedComputerUseSpan`, `withSpan`.

SHA-256 of the source span: `ed0c9538884873599427363c8bf2a6b39949268156a6c9fcd738f00acbb6efb5`.

### evaluation:515884

Calls written directly in this body: `ctx.withName`, `getSpan2`, `isTraced`, `new TracedComputerUseSpan`, `new UntracedComputerUseSpan`, `withSpan`.

SHA-256 of the source span: `ed0c9538884873599427363c8bf2a6b39949268156a6c9fcd738f00acbb6efb5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
