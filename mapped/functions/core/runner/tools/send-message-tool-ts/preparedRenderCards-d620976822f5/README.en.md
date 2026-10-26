# `preparedRenderCards`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-message-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:760900-760909](../../../../../../../reference/runtime/host-main.cjs#L760900-L760909) | `FunctionDeclaration` | yes | `ctx, cards, entries` |
| [evaluation:551715-551724](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551715-L551724) | `FunctionDeclaration` | yes | `ctx, cards, entries` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760900-760909](../../../../../../../reference/runtime/host-main.cjs#L760900-L760909) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:551715-551724](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551715-L551724) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:760900

Calls written directly in this body: `Promise.all`, `cards.items.map`, `entries.map`, `new Map`.

SHA-256 of the source span: `36c654c976e49e1012cacfeac7240e82d008fa53fc0a992d4bb0bddaeaa69134`.

### evaluation:551715

Calls written directly in this body: `Promise.all`, `cards.items.map`, `entries.map`, `new Map`.

SHA-256 of the source span: `36c654c976e49e1012cacfeac7240e82d008fa53fc0a992d4bb0bddaeaa69134`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
