# `isToolDiscoveryBlockTag`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-core/prompt-context-usage/prompt-blocks.js` · [Module README](../../../../../modules/agent-core/prompt-context-usage/prompt-blocks-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:476150-476152](../../../../../../reference/runtime/host-main.cjs#L476150-L476152) | `FunctionDeclaration` | no | `tagName2` |
| [evaluation:255460-255462](../../../../../../reference/runtime/sand-eval-runner.cjs#L255460-L255462) | `FunctionDeclaration` | no | `tagName` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476150-476152](../../../../../../reference/runtime/host-main.cjs#L476150-L476152) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:255460-255462](../../../../../../reference/runtime/sand-eval-runner.cjs#L255460-L255462) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:476150

Calls written directly in this body: `isDynamicToolBlockTag`, `isMcpBlockTag`.

SHA-256 of the source span: `ec1aba96f71693be68e7327a1bbd5bf6b6e485f1187565067764d0f0209bffb3`.

### evaluation:255460

Calls written directly in this body: `isDynamicToolBlockTag`, `isMcpBlockTag`.

SHA-256 of the source span: `0b50bd590f79580d3234c6a9866cb9e733f5199bfbc12f5143c4119a834f024f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
