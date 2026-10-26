# `getToolDescriptionUpdatesForTurn`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-run-shell.ts` · [Module README](../../../../../modules/core/runner/turn-run-shell-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:591302-591313](../../../../../../reference/runtime/sand-eval-runner.cjs#L591302-L591313) | `FunctionDeclaration` | no | `host` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:591302-591313](../../../../../../reference/runtime/sand-eval-runner.cjs#L591302-L591313) | 2 | 0 | 0 | 3 | 0 | 0 |

### evaluation:591302

Calls written directly in this body: `host.getConversationState`, `host.toolDescriptionSnapshots`, `renderFrozenToolDescriptionUpdates`, `resolveFrozenToolDescriptionUpdates`, `store.getToolDescriptionSnapshot`.

SHA-256 of the source span: `f83de6c3a9a21b0cc6fb6ae7946403ae6901e789dc25af946cce21e8b52ffcd7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
