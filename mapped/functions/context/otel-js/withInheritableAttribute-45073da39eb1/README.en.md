# `withInheritableAttribute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `context/otel.js` · [Module README](../../../../modules/context/otel-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:2307-2317](../../../../../reference/runtime/sand-eval-runner.cjs#L2307-L2317) | `FunctionDeclaration` | no | `ctx, key, value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:2307-2317](../../../../../reference/runtime/sand-eval-runner.cjs#L2307-L2317) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:2307

Calls written directly in this body: `ctx.get`, `ctx.with`, `getSpan2`, `span.setAttribute`.

SHA-256 of the source span: `a3f34de2badfa2445295f4f6f11a36c1a7827ffcf2fb2eb0d870eb922e985bd5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
