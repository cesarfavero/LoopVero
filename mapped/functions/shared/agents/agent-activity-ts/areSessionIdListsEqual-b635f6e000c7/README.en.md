# `areSessionIdListsEqual`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/agents/agent-activity.ts` · [Module README](../../../../../modules/shared/agents/agent-activity-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:490215-490219](../../../../../../reference/runtime/host-main.cjs#L490215-L490219) | `FunctionDeclaration` | no | `left, right` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:490215-490219](../../../../../../reference/runtime/host-main.cjs#L490215-L490219) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:490215

Calls written directly in this body: `left.every`.

SHA-256 of the source span: `00dd293ba41ed96a1db0ba778658dd39f6b52475d9c4c5cf219c630e4ec83999`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
