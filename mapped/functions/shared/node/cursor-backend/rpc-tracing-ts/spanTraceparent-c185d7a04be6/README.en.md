# `spanTraceparent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/cursor-backend/rpc-tracing.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/rpc-tracing-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:224825-224830](../../../../../../../reference/runtime/host-main.cjs#L224825-L224830) | `FunctionDeclaration` | no | `span` |
| [evaluation:511858-511863](../../../../../../../reference/runtime/sand-eval-runner.cjs#L511858-L511863) | `FunctionDeclaration` | no | `span` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:224825-224830](../../../../../../../reference/runtime/host-main.cjs#L224825-L224830) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:511858-511863](../../../../../../../reference/runtime/sand-eval-runner.cjs#L511858-L511863) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:224825

Calls written directly in this body: `span.spanContext`, `trace.isSpanContextValid`.

SHA-256 of the source span: `c0d6832859f49807ff89de8ebe2d5eb44c865dbf24cef1debf3b148a96b27caf`.

### evaluation:511858

Calls written directly in this body: `span.spanContext`, `trace.isSpanContextValid`.

SHA-256 of the source span: `c0d6832859f49807ff89de8ebe2d5eb44c865dbf24cef1debf3b148a96b27caf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
