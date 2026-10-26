# `traced`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/secure-values/browser-secure-fill-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/secure-values/browser-secure-fill-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:766786-766793](../../../../../../../../reference/runtime/host-main.cjs#L766786-L766793) | `FunctionDeclaration` | yes | `ctx, name18, run` |
| [evaluation:562305-562312](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562305-L562312) | `FunctionDeclaration` | yes | `ctx, name18, run` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766786-766793](../../../../../../../../reference/runtime/host-main.cjs#L766786-L766793) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:562305-562312](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562305-L562312) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:766786

Calls written directly in this body: `.end`, `ctx.withName`, `getSpan2`, `run`, `withSpan`.

SHA-256 of the source span: `dc599b0e8a24b9a29a8e2c64656449e20be3b47430052abf0cdf0ee36411057d`.

### evaluation:562305

Calls written directly in this body: `.end`, `ctx.withName`, `getSpan2`, `run`, `withSpan`.

SHA-256 of the source span: `dc599b0e8a24b9a29a8e2c64656449e20be3b47430052abf0cdf0ee36411057d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
