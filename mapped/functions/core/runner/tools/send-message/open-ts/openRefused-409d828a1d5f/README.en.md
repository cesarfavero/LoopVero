# `openRefused`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-message/open.ts` · [Module README](../../../../../../../modules/core/runner/tools/send-message/open-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:557833-557837](../../../../../../../../reference/runtime/host-main.cjs#L557833-L557837) | `FunctionDeclaration` | no | `reason` |
| [evaluation:550647-550651](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L550647-L550651) | `FunctionDeclaration` | no | `reason` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:557833-557837](../../../../../../../../reference/runtime/host-main.cjs#L557833-L557837) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:550647-550651](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L550647-L550651) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:557833

Calls written directly in this body: `new SandToolInputError`.

SHA-256 of the source span: `ecabf211b4f8e1ac12685c212d9a1380969235f07536be3b5263e4a14eff93f8`.

### evaluation:550647

Calls written directly in this body: `new SandToolInputError`.

SHA-256 of the source span: `ecabf211b4f8e1ac12685c212d9a1380969235f07536be3b5263e4a14eff93f8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
