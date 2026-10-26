# `getComposer2CloudTestingSectionElements`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/composer2-cloud-testing-sections.js` · [Module README](../../../../../modules/agent-engine/prompts/composer2-cloud-testing-sections-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:638577-638602](../../../../../../reference/runtime/host-main.cjs#L638577-L638602) | `FunctionDeclaration` | no | `props, options2` |
| [evaluation:429170-429195](../../../../../../reference/runtime/sand-eval-runner.cjs#L429170-L429195) | `FunctionDeclaration` | no | `props, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:638577-638602](../../../../../../reference/runtime/host-main.cjs#L638577-L638602) | 3 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:429170-429195](../../../../../../reference/runtime/sand-eval-runner.cjs#L429170-L429195) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:638577

Calls written directly in this body: `GitOrNoRepositoryInstructions`, `context2.browserTools.find`, `getBrowserMcpProviderName`, `getComposer2CloudSectionContext`, `isSlackV1_5ThreadBoundSession`, `jsx`, `jsxs`, `ownerAllowsAgentMergeInPrompt`.

SHA-256 of the source span: `bda09567917af8f0747a636594f92777d256402f50bd993ef898e5965ff458c1`.

### evaluation:429170

Calls written directly in this body: `GitOrNoRepositoryInstructions`, `context2.browserTools.find`, `getBrowserMcpProviderName`, `getComposer2CloudSectionContext`, `isSlackV1_5ThreadBoundSession`, `jsx`, `jsxs`, `ownerAllowsAgentMergeInPrompt`.

SHA-256 of the source span: `bda09567917af8f0747a636594f92777d256402f50bd993ef898e5965ff458c1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
