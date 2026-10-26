# `nonEmptyTrimmed`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/agents/bot-templates.ts` · [Module README](../../../../../modules/shared/agents/bot-templates-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:484828-484832](../../../../../../reference/runtime/host-main.cjs#L484828-L484832) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:484828-484832](../../../../../../reference/runtime/host-main.cjs#L484828-L484832) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:484828

Calls written directly in this body: `value.trim`.

SHA-256 of the source span: `317a55f986ec7ee08c5f079609f14401435c23c6468d041a48853090927e0f2b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
