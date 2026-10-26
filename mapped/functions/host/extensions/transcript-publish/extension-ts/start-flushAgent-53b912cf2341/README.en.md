# `start/flushAgent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript-publish/extension.ts` · [Module README](../../../../../../modules/host/extensions/transcript-publish/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:784297-784297](../../../../../../../reference/runtime/host-main.cjs#L784297-L784297) | `ArrowFunctionExpression` | yes | `(none)` |
| [host:784370-784373](../../../../../../../reference/runtime/host-main.cjs#L784370-L784373) | `ArrowFunctionExpression` | yes | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:784297-784297](../../../../../../../reference/runtime/host-main.cjs#L784297-L784297) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:784297 uses an implicit arrow-function return.
| [host:784370-784373](../../../../../../../reference/runtime/host-main.cjs#L784370-L784373) | 2 | 0 | 1 | 2 | 0 | 0 |

### host:784297

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `2f0030063b5ed9a28a29a6a24691291e9c37f7a8e857d5b93a7696a4c6b23266`.

### host:784370

Calls written directly in this body: `publisher.flushAgent`.

SHA-256 of the source span: `aa8b3e6d2024e177991ad961888e06bb296a67f9f5002126b3bd14647fab88bc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
