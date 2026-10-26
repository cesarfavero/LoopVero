# `SandAgentDb.markViewed`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-db.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-db-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:718530-718542](../../../../../../../reference/runtime/host-main.cjs#L718530-L718542) | `method` | no | `at3 = Date.now(), options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:718530-718542](../../../../../../../reference/runtime/host-main.cjs#L718530-L718542) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:718530

Calls written directly in this body: `this.updateUnreadState`.

SHA-256 of the source span: `e171e26ac6649b61421011313d34c76b0662b3fd91a943891ad1e1460bc53a6b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
