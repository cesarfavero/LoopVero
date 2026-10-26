# `isInfrastructureError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/communicate-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/communicate-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:725018-725027](../../../../../../../reference/runtime/host-main.cjs#L725018-L725027) | `FunctionDeclaration` | no | `error64` |
| [evaluation:479989-479998](../../../../../../../reference/runtime/sand-eval-runner.cjs#L479989-L479998) | `FunctionDeclaration` | no | `error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:725018-725027](../../../../../../../reference/runtime/host-main.cjs#L725018-L725027) | 1 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:479989-479998](../../../../../../../reference/runtime/sand-eval-runner.cjs#L479989-L479998) | 1 | 1 | 0 | 2 | 0 | 0 |

### host:725018

Calls written directly in this body: `INFRASTRUCTURE_ERROR_NAMES.has`, `current2.message.includes`.

Assignment or increment targets: `current2`, `depth`.

SHA-256 of the source span: `fb685aebd5e44c7386a79e653333a48cc05e8b05eb865ab316d204f27f67dc42`.

### evaluation:479989

Calls written directly in this body: `INFRASTRUCTURE_ERROR_NAMES.has`, `current2.message.includes`.

Assignment or increment targets: `current2`, `depth`.

SHA-256 of the source span: `bcf498d3e669fb3dd3daf9a821167fe9f1a72cf4117b031ed33c14a212654f5f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
