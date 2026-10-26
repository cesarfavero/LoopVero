# `parseClaimEmailUsername`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/claim-email-inbox-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/claim-email-inbox-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:764737-764763](../../../../../../../reference/runtime/host-main.cjs#L764737-L764763) | `FunctionDeclaration` | no | `raw` |
| [evaluation:558105-558131](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558105-L558131) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764737-764763](../../../../../../../reference/runtime/host-main.cjs#L764737-L764763) | 6 | 0 | 0 | 1 | 4 | 0 |
| [evaluation:558105-558131](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558105-L558131) | 6 | 0 | 0 | 1 | 4 | 0 |

### host:764737

Calls written directly in this body: `.toLowerCase`, `USERNAME_PATTERN.test`, `domain2.endsWith`, `new SandToolInputError`, `raw.trim`, `trimmed.lastIndexOf`, `trimmed.slice`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `3a1bdc950f470e1f16d8e2d9440fa8e24740121a0e80059a6ed518422ee6fae9`.

### evaluation:558105

Calls written directly in this body: `.toLowerCase`, `USERNAME_PATTERN.test`, `domain2.endsWith`, `new SandToolInputError`, `raw.trim`, `trimmed.lastIndexOf`, `trimmed.slice`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `3a1bdc950f470e1f16d8e2d9440fa8e24740121a0e80059a6ed518422ee6fae9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
