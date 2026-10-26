# `buildTurnTools`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/turn-toolset.ts` · [Module README](../../../../../../modules/core/runner/tools/turn-toolset-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:582666-582733](../../../../../../../reference/runtime/sand-eval-runner.cjs#L582666-L582733) | `FunctionDeclaration` | no | `host, turn, props` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:582666-582733](../../../../../../../reference/runtime/sand-eval-runner.cjs#L582666-L582733) | 4 | 0 | 0 | 3 | 0 | 0 |

### evaluation:582666

Calls written directly in this body: `.map`, `contextHintedTools.map`, `createTurnToolContext`, `decisions.enforce`, `deviceToolsForTurn`, `dynamicToolPlacementFor`, `fencedToolSet`, `listedTools.map`, `phoneTools.map`, `resolveSandTurnToolDecisions`, `runTurnToolBuilders`, `sharePassSubagentTools`, `tools.push`, `withLegacyUpdateStateForwarding`, `withReadonlySubagentRefusals`.

SHA-256 of the source span: `25c27c3caeff669deeef1004bce17ff7364db94ad8208fd7f4f24ce71bf6f634`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
