# `recordComputerUseSpanAt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/computer-use-tracing/computer-use-spans.ts` · [Module README](../../../../../../../modules/core/runner/tools/computer-use-tracing/computer-use-spans-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:743064-743074](../../../../../../../../reference/runtime/host-main.cjs#L743064-L743074) | `FunctionDeclaration` | no | `ctx, name18, args` |
| [evaluation:515915-515925](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L515915-L515925) | `FunctionDeclaration` | no | `ctx, name18, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:743064-743074](../../../../../../../../reference/runtime/host-main.cjs#L743064-L743074) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:515915-515925](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L515915-L515925) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:743064

Calls written directly in this body: `Math.max`, `ctx.withName`, `endSpan`, `getSpan2`, `isTraced`, `withSpan`.

SHA-256 of the source span: `dd195a25608476455e564252f21b30ce81c34cca497ef3e42d712d1266cf1459`.

### evaluation:515915

Calls written directly in this body: `Math.max`, `ctx.withName`, `endSpan`, `getSpan2`, `isTraced`, `withSpan`.

SHA-256 of the source span: `dd195a25608476455e564252f21b30ce81c34cca497ef3e42d712d1266cf1459`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
