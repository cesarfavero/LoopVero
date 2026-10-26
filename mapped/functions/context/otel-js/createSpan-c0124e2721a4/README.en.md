# `createSpan`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `context/otel.js` · [Module README](../../../../modules/context/otel-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:225854-225860](../../../../../reference/runtime/host-main.cjs#L225854-L225860) | `FunctionDeclaration` | no | `ctx, options2` |
| [evaluation:2368-2374](../../../../../reference/runtime/sand-eval-runner.cjs#L2368-L2374) | `FunctionDeclaration` | no | `ctx, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225854-225860](../../../../../reference/runtime/host-main.cjs#L225854-L225860) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:2368-2374](../../../../../reference/runtime/sand-eval-runner.cjs#L2368-L2374) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:225854

Calls written directly in this body: `getSpan2`, `isChildSpanSuppressed`, `new DisposableSpan`, `withSpan`.

SHA-256 of the source span: `088ebbf30d27fc38b8e5bfc5fb8904beeada8bb1ba8247789ef9782f4ed8c9d6`.

### evaluation:2368

Calls written directly in this body: `getSpan2`, `isChildSpanSuppressed`, `new DisposableSpan`, `withSpan`.

SHA-256 of the source span: `088ebbf30d27fc38b8e5bfc5fb8904beeada8bb1ba8247789ef9782f4ed8c9d6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
