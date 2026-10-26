# `parseBotBlockTextProbeResult`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-action-audit.ts` · [Module README](../../../../../modules/core/runner/sand-action-audit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:512519-512546](../../../../../../reference/runtime/sand-eval-runner.cjs#L512519-L512546) | `FunctionDeclaration` | no | `stdout, request3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:512519-512546](../../../../../../reference/runtime/sand-eval-runner.cjs#L512519-L512546) | 5 | 1 | 0 | 4 | 0 | 0 |

### evaluation:512519

Calls written directly in this body: `.findLast`, `Array.isArray`, `isUnknownRecord2`, `markerLine.indexOf`, `markerLine.slice`, `new Map`, `parseJsonOrUndefined2`, `request3.targets.find`, `requestedTextProbeVerdict`, `stdout.split`, `verdicts.has`, `verdicts.set`.

SHA-256 of the source span: `8a4a809a28ea985d57fcff15f7ee2c7e0307dc39d89d2df85f5d6a9f3a8b6647`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
