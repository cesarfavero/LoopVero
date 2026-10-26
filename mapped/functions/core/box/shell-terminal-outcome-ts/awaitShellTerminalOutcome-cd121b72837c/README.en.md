# `awaitShellTerminalOutcome`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/shell-terminal-outcome.ts` · [Module README](../../../../../modules/core/box/shell-terminal-outcome-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:590226-590252](../../../../../../reference/runtime/host-main.cjs#L590226-L590252) | `FunctionDeclaration` | yes | `watch4` |
| [evaluation:529949-529975](../../../../../../reference/runtime/sand-eval-runner.cjs#L529949-L529975) | `FunctionDeclaration` | yes | `watch2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:590226-590252](../../../../../../reference/runtime/host-main.cjs#L590226-L590252) | 6 | 1 | 2 | 5 | 0 | 1 |
| [evaluation:529949-529975](../../../../../../reference/runtime/sand-eval-runner.cjs#L529949-L529975) | 6 | 1 | 2 | 5 | 0 | 1 |

### host:590226

Calls written directly in this body: `Math.min`, `delay3`, `msUntilLimit`, `parseShellTerminalFooter`, `shellRewatchPollMs`, `watch4.limit`, `watch4.read`, `watch4.shouldStop`, `withTimeout`.

Assignment or increment targets: `missingReads`.

SHA-256 of the source span: `27ed19bfd6c440a4afb3cd802c3992d598d7158e432f032e9faa7b1237218807`.

### evaluation:529949

Calls written directly in this body: `Math.min`, `delay2`, `msUntilLimit`, `parseShellTerminalFooter`, `shellRewatchPollMs`, `watch2.limit`, `watch2.read`, `watch2.shouldStop`, `withTimeout`.

Assignment or increment targets: `missingReads`.

SHA-256 of the source span: `6e76209fc2d8f5276d75d51121f5e218fd30be59e372be00d5ab1e7f241ba29d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
