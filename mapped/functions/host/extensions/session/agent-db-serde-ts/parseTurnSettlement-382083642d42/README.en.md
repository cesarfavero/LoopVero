# `parseTurnSettlement`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-db-serde.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-db-serde-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:718058-718076](../../../../../../../reference/runtime/host-main.cjs#L718058-L718076) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:718058-718076](../../../../../../../reference/runtime/host-main.cjs#L718058-L718076) | 9 | 0 | 0 | 4 | 0 | 0 |

### host:718058

Calls written directly in this body: `Number.isFinite`, `SAND_TURN_SETTLEMENT_OUTCOMES.find`, `isUnknownRecord2`, `parseJsonOrUndefined`, `parseTurnBotBlock`.

SHA-256 of the source span: `85e8ec7d71887013bff205f70438898e0f54eada0b82d5fc2b770741273d4822`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
