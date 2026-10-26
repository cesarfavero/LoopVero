# `stripWhitespace`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/user-info.js` · [Module README](../../../../../modules/agent-engine/prompts/user-info-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:640328-640330](../../../../../../reference/runtime/host-main.cjs#L640328-L640330) | `FunctionDeclaration` | no | `s3` |
| [evaluation:430942-430944](../../../../../../reference/runtime/sand-eval-runner.cjs#L430942-L430944) | `FunctionDeclaration` | no | `s3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640328-640330](../../../../../../reference/runtime/host-main.cjs#L640328-L640330) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:430942-430944](../../../../../../reference/runtime/sand-eval-runner.cjs#L430942-L430944) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:640328

Calls written directly in this body: `s3.replace`.

SHA-256 of the source span: `48bd9daf21f5de2c0074a2a2281cd9b000f06d6d6f336a4be94dda0f682ba2d2`.

### evaluation:430942

Calls written directly in this body: `s3.replace`.

SHA-256 of the source span: `48bd9daf21f5de2c0074a2a2281cd9b000f06d6d6f336a4be94dda0f682ba2d2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
