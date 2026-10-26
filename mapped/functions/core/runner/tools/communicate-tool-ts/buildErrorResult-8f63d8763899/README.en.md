# `buildErrorResult`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/communicate-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/communicate-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:725072-725079](../../../../../../../reference/runtime/host-main.cjs#L725072-L725079) | `FunctionDeclaration` | no | `message` |
| [evaluation:480043-480050](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480043-L480050) | `FunctionDeclaration` | no | `message` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:725072-725079](../../../../../../../reference/runtime/host-main.cjs#L725072-L725079) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:480043-480050](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480043-L480050) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:725072

Calls written directly in this body: `new CommunicateUpdateError`, `new CommunicateUpdateResult`.

SHA-256 of the source span: `62a84fe5a9fd9043df60a5255ee3e7c464dc0528fd7d4506671b097678cfe3b5`.

### evaluation:480043

Calls written directly in this body: `new CommunicateUpdateError`, `new CommunicateUpdateResult`.

SHA-256 of the source span: `62a84fe5a9fd9043df60a5255ee3e7c464dc0528fd7d4506671b097678cfe3b5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
