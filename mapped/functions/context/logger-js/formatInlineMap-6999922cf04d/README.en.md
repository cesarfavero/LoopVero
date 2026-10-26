# `formatInlineMap`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `context/logger.js` · [Module README](../../../../modules/context/logger-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:225591-225613](../../../../../reference/runtime/host-main.cjs#L225591-L225613) | `FunctionDeclaration` | no | `value, options2, colors, depth, seen, path33` |
| [evaluation:2079-2101](../../../../../reference/runtime/sand-eval-runner.cjs#L2079-L2101) | `FunctionDeclaration` | no | `value, options2, colors, depth, seen, path33` |
| [state-worker:21468-21490](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21468-L21490) | `FunctionDeclaration` | no | `value, options, colors, depth, seen, path` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225591-225613](../../../../../reference/runtime/host-main.cjs#L225591-L225613) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:2079-2101](../../../../../reference/runtime/sand-eval-runner.cjs#L2079-L2101) | 3 | 0 | 0 | 3 | 0 | 0 |
| [state-worker:21468-21490](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21468-L21490) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:225591

Calls written directly in this body: `.map`, `Array.from`, `Math.min`, `colors.dim`, `entries.slice`, `items.join`, `items.push`, `seen.add`, `seen.delete`, `seen.has`, `value.entries`.

SHA-256 of the source span: `2b51751317e32cd3752fd2718a1577e027cd7d67933998645cf5a50955b79416`.

### evaluation:2079

Calls written directly in this body: `.map`, `Array.from`, `Math.min`, `colors.dim`, `entries.slice`, `items.join`, `items.push`, `seen.add`, `seen.delete`, `seen.has`, `value.entries`.

SHA-256 of the source span: `2b51751317e32cd3752fd2718a1577e027cd7d67933998645cf5a50955b79416`.

### state-worker:21468

Calls written directly in this body: `.map`, `Array.from`, `Math.min`, `colors.dim`, `entries.slice`, `items.join`, `items.push`, `seen.add`, `seen.delete`, `seen.has`, `value.entries`.

SHA-256 of the source span: `17e28fb00258d8678a3e5996431a64331f235dae09b1e6aeff18c43840dc7483`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
