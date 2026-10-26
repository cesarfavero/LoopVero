# `getSpan2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `context/otel.js` · [Module README](../../../../modules/context/otel-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:225813-225815](../../../../../reference/runtime/host-main.cjs#L225813-L225815) | `FunctionDeclaration` | no | `ctx` |
| [evaluation:2301-2303](../../../../../reference/runtime/sand-eval-runner.cjs#L2301-L2303) | `FunctionDeclaration` | no | `ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225813-225815](../../../../../reference/runtime/host-main.cjs#L225813-L225815) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:2301-2303](../../../../../reference/runtime/sand-eval-runner.cjs#L2301-L2303) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:225813

Calls written directly in this body: `ctx.get`.

SHA-256 of the source span: `bdfb726b2e405a00213e1aa6dce7c2487ddb03ecde1ca3a67e3fd24d6842867f`.

### evaluation:2301

Calls written directly in this body: `ctx.get`.

SHA-256 of the source span: `bdfb726b2e405a00213e1aa6dce7c2487ddb03ecde1ca3a67e3fd24d6842867f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
