# `buildComputerActionCoreSchema`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-computer-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-computer-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:776914-776981](../../../../../../../reference/runtime/host-main.cjs#L776914-L776981) | `FunctionDeclaration` | no | `actions2 = COMPUTER_ACTIONS, options2` |
| [evaluation:576559-576626](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576559-L576626) | `FunctionDeclaration` | no | `actions2 = COMPUTER_ACTIONS, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:776914-776981](../../../../../../../reference/runtime/host-main.cjs#L776914-L776981) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:576559-576626](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576559-L576626) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:776914

Calls written directly in this body: `.int`, `.max`, `.min`, `.optional`, `boxPixelSchema`, `external_exports2.array`, `external_exports2.enum`, `external_exports2.number`, `external_exports2.object`, `external_exports2.string`, `heldModifiersSchema`, `scrollAmountSchema`, `withFieldDescription`.

SHA-256 of the source span: `9fc785b752c423f9657cccd9ae9f08201c8b4e9e8631d58a3ca16518da850cdf`.

### evaluation:576559

Calls written directly in this body: `.int`, `.max`, `.min`, `.optional`, `boxPixelSchema`, `external_exports3.array`, `external_exports3.enum`, `external_exports3.number`, `external_exports3.object`, `external_exports3.string`, `heldModifiersSchema`, `scrollAmountSchema`, `withFieldDescription`.

SHA-256 of the source span: `31aa12a6160fd24c3c284f0a61df56ede074be18742c1af3c3b1ed39de403bb4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
