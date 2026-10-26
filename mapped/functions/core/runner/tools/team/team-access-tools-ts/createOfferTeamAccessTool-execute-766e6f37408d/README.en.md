# `createOfferTeamAccessTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/team/team-access-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/team/team-access-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:781646-781656](../../../../../../../../reference/runtime/host-main.cjs#L781646-L781656) | `ArrowFunctionExpression` | yes | `_ctx, args, d` |
| [host:781664-781670](../../../../../../../../reference/runtime/host-main.cjs#L781664-L781670) | `ArrowFunctionExpression` | yes | `_ctx, args, d` |
| [evaluation:581993-582003](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581993-L582003) | `ArrowFunctionExpression` | yes | `_ctx, args, d` |
| [evaluation:582011-582017](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582011-L582017) | `ArrowFunctionExpression` | yes | `_ctx, args, d` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781646-781656](../../../../../../../../reference/runtime/host-main.cjs#L781646-L781656) | 1 | 0 | 0 | 2 | 0 | 0 |
| [host:781664-781670](../../../../../../../../reference/runtime/host-main.cjs#L781664-L781670) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:581993-582003](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581993-L582003) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:582011-582017](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582011-L582017) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:781646

Calls written directly in this body: `Date.now`, `d.onSendMessage`, `normalizeSendMessageTextContent`, `teamCopy.completeTurn`, `teamCopy.isOwnerOffDesktop`.

SHA-256 of the source span: `de52ad6062dda7e8e1ff8c26ead0d0ee3ec1aaba0d8d179a773bb5571a058186`.

### host:781664

Calls written directly in this body: `Date.now`, `d.onSendMessage`.

SHA-256 of the source span: `68efc98f4d4f2e136368348f6d8474c7ec9d7616fe07dec736d3a477d84d8a7e`.

### evaluation:581993

Calls written directly in this body: `Date.now`, `d.onSendMessage`, `normalizeSendMessageTextContent`, `teamCopy.completeTurn`, `teamCopy.isOwnerOffDesktop`.

SHA-256 of the source span: `de52ad6062dda7e8e1ff8c26ead0d0ee3ec1aaba0d8d179a773bb5571a058186`.

### evaluation:582011

Calls written directly in this body: `Date.now`, `d.onSendMessage`.

SHA-256 of the source span: `68efc98f4d4f2e136368348f6d8474c7ec9d7616fe07dec736d3a477d84d8a7e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
