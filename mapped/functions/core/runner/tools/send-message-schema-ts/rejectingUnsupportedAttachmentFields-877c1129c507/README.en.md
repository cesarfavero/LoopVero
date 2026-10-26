# `rejectingUnsupportedAttachmentFields`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-message-schema.ts` · [Module README](../../../../../../modules/core/runner/tools/send-message-schema-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:741789-741803](../../../../../../../reference/runtime/host-main.cjs#L741789-L741803) | `FunctionDeclaration` | no | `schema3` |
| [evaluation:482736-482750](../../../../../../../reference/runtime/sand-eval-runner.cjs#L482736-L482750) | `FunctionDeclaration` | no | `schema3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:741789-741803](../../../../../../../reference/runtime/host-main.cjs#L741789-L741803) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:482736-482750](../../../../../../../reference/runtime/sand-eval-runner.cjs#L482736-L482750) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:741789

Calls written directly in this body: `external_exports2.preprocess`.

SHA-256 of the source span: `ec2c1b214addb23b058515c1d000050854f13e8e585878f4573e48d89792c5a9`.

### evaluation:482736

Calls written directly in this body: `external_exports3.preprocess`.

SHA-256 of the source span: `baa164adcd1c6f66a888457c2370c0abad3739114ade53716d5a5d6236d6a30e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
