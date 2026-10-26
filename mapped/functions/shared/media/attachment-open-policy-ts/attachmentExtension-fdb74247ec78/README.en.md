# `attachmentExtension`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/media/attachment-open-policy.ts` · [Module README](../../../../../modules/shared/media/attachment-open-policy-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:497084-497090](../../../../../../reference/runtime/host-main.cjs#L497084-L497090) | `FunctionDeclaration` | no | `nameOrPath` |
| [evaluation:480621-480627](../../../../../../reference/runtime/sand-eval-runner.cjs#L480621-L480627) | `FunctionDeclaration` | no | `nameOrPath` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:497084-497090](../../../../../../reference/runtime/host-main.cjs#L497084-L497090) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:480621-480627](../../../../../../reference/runtime/sand-eval-runner.cjs#L480621-L480627) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:497084

Calls written directly in this body: `.toLowerCase`, `base.lastIndexOf`, `base.slice`, `nameOrPath.split`.

SHA-256 of the source span: `aeb74c309a4bef8d4369859f23e4b5cedf136b3559d641cd383ab6502f4e850d`.

### evaluation:480621

Calls written directly in this body: `.toLowerCase`, `base.lastIndexOf`, `base.slice`, `nameOrPath.split`.

SHA-256 of the source span: `aeb74c309a4bef8d4369859f23e4b5cedf136b3559d641cd383ab6502f4e850d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
