# `start`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/agent-identity/extension.ts` · [Module README](../../../../../../modules/host/extensions/agent-identity/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:496553-496564](../../../../../../../reference/runtime/host-main.cjs#L496553-L496564) | `ArrowFunctionExpression` | no | `context2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:496553-496564](../../../../../../../reference/runtime/host-main.cjs#L496553-L496564) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:496553

Calls written directly in this body: `context2.onStop`, `resyncIdentityAfterBlockedTurns`, `startAgentIdentity`.

SHA-256 of the source span: `9de5106d22b9f3d482ba4b9e8339f510e4491ff9daf11bf2ac4b40ee6e4b735a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
