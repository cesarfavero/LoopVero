# `createOfferSlackConnectTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/team/team-access-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/team/team-access-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:781679-781685](../../../../../../../../reference/runtime/host-main.cjs#L781679-L781685) | `ArrowFunctionExpression` | yes | `_ctx, args, d` |
| [evaluation:582026-582032](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582026-L582032) | `ArrowFunctionExpression` | yes | `_ctx, args, d` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781679-781685](../../../../../../../../reference/runtime/host-main.cjs#L781679-L781685) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:582026-582032](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582026-L582032) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:781679

Calls written directly in this body: `Date.now`, `d.onSendMessage`.

SHA-256 of the source span: `3aa1fcf976b7a8ef214c45f05a21ab8ace011137024ce605c6526ca2cb32adc0`.

### evaluation:582026

Calls written directly in this body: `Date.now`, `d.onSendMessage`.

SHA-256 of the source span: `3aa1fcf976b7a8ef214c45f05a21ab8ace011137024ce605c6526ca2cb32adc0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
