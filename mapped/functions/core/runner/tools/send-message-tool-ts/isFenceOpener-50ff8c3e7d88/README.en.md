# `isFenceOpener`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-message-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:760693-760696](../../../../../../../reference/runtime/host-main.cjs#L760693-L760696) | `FunctionDeclaration` | no | `marker17, info2` |
| [evaluation:551508-551511](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551508-L551511) | `FunctionDeclaration` | no | `marker17, info2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760693-760696](../../../../../../../reference/runtime/host-main.cjs#L760693-L760696) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:551508-551511](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551508-L551511) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:760693

Calls written directly in this body: `/\\[nr]/.test`, `info2.includes`, `marker17.startsWith`.

SHA-256 of the source span: `71d70a3ffa3143503d280c2afef50e68bdd696521283b995226a0c2ca88c1818`.

### evaluation:551508

Calls written directly in this body: `/\\[nr]/.test`, `info2.includes`, `marker17.startsWith`.

SHA-256 of the source span: `71d70a3ffa3143503d280c2afef50e68bdd696521283b995226a0c2ca88c1818`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
