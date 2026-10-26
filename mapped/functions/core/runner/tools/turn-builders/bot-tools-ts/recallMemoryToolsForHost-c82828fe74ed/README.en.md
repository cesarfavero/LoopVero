# `recallMemoryToolsForHost`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/turn-builders/bot-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/bot-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:772061-772066](../../../../../../../../reference/runtime/host-main.cjs#L772061-L772066) | `FunctionDeclaration` | no | `host` |
| [evaluation:571294-571299](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L571294-L571299) | `FunctionDeclaration` | no | `host` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:772061-772066](../../../../../../../../reference/runtime/host-main.cjs#L772061-L772066) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:571294-571299](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L571294-L571299) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:772061

Calls written directly in this body: `createLookupRecallMemoryTool`, `recallMemoryTools`, `selectStateToolStores`.

SHA-256 of the source span: `d9ee436d109bb6d8bb4f51d68a105ae4bb0309a10e14218c0db687116e679500`.

### evaluation:571294

Calls written directly in this body: `createLookupRecallMemoryTool`, `recallMemoryTools`, `selectStateToolStores`.

SHA-256 of the source span: `d9ee436d109bb6d8bb4f51d68a105ae4bb0309a10e14218c0db687116e679500`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
