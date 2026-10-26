# `visitContentPart`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-core/prompt-context-usage/prompt-context-parts.js` · [Module README](../../../../../modules/agent-core/prompt-context-usage/prompt-context-parts-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:476296-476336](../../../../../../reference/runtime/host-main.cjs#L476296-L476336) | `FunctionDeclaration` | no | `scope, part, index` |
| [evaluation:255606-255646](../../../../../../reference/runtime/sand-eval-runner.cjs#L255606-L255646) | `FunctionDeclaration` | no | `scope, part, index` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476296-476336](../../../../../../reference/runtime/host-main.cjs#L476296-L476336) | 13 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:255606-255646](../../../../../../reference/runtime/sand-eval-runner.cjs#L255606-L255646) | 13 | 0 | 0 | 2 | 0 | 0 |

### host:476296

Calls written directly in this body: `contentPath`, `visitField`, `visitValue`.

SHA-256 of the source span: `89e1cb9adb858b3b1e3aabe7b0494e03ac7aa7bf1af32ece64bc5e0ae009fe69`.

### evaluation:255606

Calls written directly in this body: `contentPath`, `visitField`, `visitValue`.

SHA-256 of the source span: `89e1cb9adb858b3b1e3aabe7b0494e03ac7aa7bf1af32ece64bc5e0ae009fe69`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
