# `dynamicToolNamesOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/prompt-prefix-observation.ts` · [Module README](../../../../../modules/core/runner/prompt-prefix-observation-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:546463-546469](../../../../../../reference/runtime/sand-eval-runner.cjs#L546463-L546469) | `FunctionDeclaration` | no | `message` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:546463-546469](../../../../../../reference/runtime/sand-eval-runner.cjs#L546463-L546469) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:546463

Calls written directly in this body: `.filter`, `CURSOR_NAMESPACE_TOOLS.exec`, `dynamicToolsByIdentity.get`, `dynamicToolsByIdentity.has`, `dynamicToolsByIdentity.set`, `listed.split`, `messageText`.

SHA-256 of the source span: `fedead881b41b1597a99ec91a51b2ab3eb8e854a1171ef8cf3c443880cb5248e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
