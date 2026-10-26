# `startAgentIdentity/applyReads`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/agent-identity/extension.ts` · [Module README](../../../../../../modules/host/extensions/agent-identity/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:496589-496599](../../../../../../../reference/runtime/host-main.cjs#L496589-L496599) | `ArrowFunctionExpression` | no | `isOn` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:496589-496599](../../../../../../../reference/runtime/host-main.cjs#L496589-L496599) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:496589

Calls written directly in this body: `service.reconcileNow`, `startFirstReadReconcile`.

Assignment or increment targets: `hasEnabledReads`, `readsEnabled`.

SHA-256 of the source span: `6ad7c4bdeb06b55d005bffa5ebe04115b1e331d60f4447ef45e2b9c45261094b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
