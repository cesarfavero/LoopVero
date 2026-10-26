# `automationTriggerWithInvalidMessage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/state-tools/trigger-schema.ts` · [Module README](../../../../../../../modules/core/runner/tools/state-tools/trigger-schema-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:762493-762502](../../../../../../../../reference/runtime/host-main.cjs#L762493-L762502) | `FunctionDeclaration` | no | `copy, invalidMessage` |
| [evaluation:555103-555112](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L555103-L555112) | `FunctionDeclaration` | no | `copy, invalidMessage` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:762493-762502](../../../../../../../../reference/runtime/host-main.cjs#L762493-L762502) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:555103-555112](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L555103-L555112) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:762493

Calls written directly in this body: `.transform`, `automationTriggerSchema`, `external_exports2.unknown`.

SHA-256 of the source span: `3a7e38ba06f5c5c2c58927d80916264958c5b1d8936e5890670be7ee9e79476b`.

### evaluation:555103

Calls written directly in this body: `.transform`, `automationTriggerSchema`, `external_exports3.unknown`.

SHA-256 of the source span: `d1c11439ce2d729772a3b66c86ca5c534c3e08816db6d2f425b1cce897c137ff`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
