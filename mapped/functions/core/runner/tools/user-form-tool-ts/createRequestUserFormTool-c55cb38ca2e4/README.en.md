# `createRequestUserFormTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/user-form-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/user-form-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:726743-726795](../../../../../../../reference/runtime/host-main.cjs#L726743-L726795) | `FunctionDeclaration` | no | `deps` |
| [evaluation:561358-561410](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561358-L561410) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726743-726795](../../../../../../../reference/runtime/host-main.cjs#L726743-L726795) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:561358-561410](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561358-L561410) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:726743

Calls written directly in this body: `advertisedRequestUserFormToolParameters`, `buildUserFormVaultKeysSection`, `defineCommunicateTool`, `fieldTargetSentence`, `requestUserFormToolParameters`, `secureValuesUserFormDescription`.

SHA-256 of the source span: `abe24b1aef095100b4e150c98a2419db063372565883fadb0026ddf75a27082a`.

### evaluation:561358

Calls written directly in this body: `advertisedRequestUserFormToolParameters`, `buildUserFormVaultKeysSection`, `defineCommunicateTool`, `fieldTargetSentence`, `requestUserFormToolParameters`, `secureValuesUserFormDescription`.

SHA-256 of the source span: `a2bfb630ba750796a897f0003d1c213d0dbb5857f2968d6c987f232cbec38fae`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
