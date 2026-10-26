# `clampCredentialPurpose`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-credential-request.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-credential-request-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:725445-725447](../../../../../../../reference/runtime/host-main.cjs#L725445-L725447) | `FunctionDeclaration` | no | `purpose` |
| [evaluation:524587-524589](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524587-L524589) | `FunctionDeclaration` | no | `purpose` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:725445-725447](../../../../../../../reference/runtime/host-main.cjs#L725445-L725447) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:524587-524589](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524587-L524589) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:725445

Calls written directly in this body: `clampLine`.

SHA-256 of the source span: `169acc5abea2065f856f1135effb32e2f44a5885fa3a99b495b88395f77aaa84`.

### evaluation:524587

Calls written directly in this body: `clampLine`.

SHA-256 of the source span: `169acc5abea2065f856f1135effb32e2f44a5885fa3a99b495b88395f77aaa84`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
