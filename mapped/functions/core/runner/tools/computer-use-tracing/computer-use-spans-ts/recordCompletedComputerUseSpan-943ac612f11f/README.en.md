# `recordCompletedComputerUseSpan`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/computer-use-tracing/computer-use-spans.ts` · [Module README](../../../../../../../modules/core/runner/tools/computer-use-tracing/computer-use-spans-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:743055-743063](../../../../../../../../reference/runtime/host-main.cjs#L743055-L743063) | `FunctionDeclaration` | no | `ctx, name18, args` |
| [evaluation:515906-515914](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L515906-L515914) | `FunctionDeclaration` | no | `ctx, name18, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:743055-743063](../../../../../../../../reference/runtime/host-main.cjs#L743055-L743063) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:515906-515914](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L515906-L515914) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:743055

Calls written directly in this body: `Date.now`, `Math.max`, `recordComputerUseSpanAt`.

SHA-256 of the source span: `5ea9ec1f1432e0997f9880b798aecefe45187002a5d9f3b11d46a73529d2bb03`.

### evaluation:515906

Calls written directly in this body: `Date.now`, `Math.max`, `recordComputerUseSpanAt`.

SHA-256 of the source span: `5ea9ec1f1432e0997f9880b798aecefe45187002a5d9f3b11d46a73529d2bb03`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
