# `isSlackV1_5ThreadBoundSession`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/claude-helpers.js` · [Module README](../../../../../modules/agent-engine/prompts/claude-helpers-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:635560-635566](../../../../../../reference/runtime/host-main.cjs#L635560-L635566) | `FunctionDeclaration` | no | `props` |
| [evaluation:423618-423624](../../../../../../reference/runtime/sand-eval-runner.cjs#L423618-L423624) | `FunctionDeclaration` | no | `props` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:635560-635566](../../../../../../reference/runtime/host-main.cjs#L635560-L635566) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:423618-423624](../../../../../../reference/runtime/sand-eval-runner.cjs#L423618-L423624) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:635560

Calls written directly in this body: `props.namedAgentSessionKind.trim`.

SHA-256 of the source span: `d0034a63d1e3057e49901ba7fdfe004c2eed3caf43182582b4c5698b0cbcf50a`.

### evaluation:423618

Calls written directly in this body: `props.namedAgentSessionKind.trim`.

SHA-256 of the source span: `d0034a63d1e3057e49901ba7fdfe004c2eed3caf43182582b4c5698b0cbcf50a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
