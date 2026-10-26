# `displayOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-messages-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-messages-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:777978-777982](../../../../../../../reference/runtime/host-main.cjs#L777978-L777982) | `FunctionDeclaration` | no | `args` |
| [evaluation:577713-577717](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577713-L577717) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777978-777982](../../../../../../../reference/runtime/host-main.cjs#L777978-L777982) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:577713-577717](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577713-L577717) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:777978

Calls written directly in this body: `.replace`, `.slice`, `.trim`, `args.recipientName.replace`.

SHA-256 of the source span: `d414ba80e44dff15d01d6690642526467681374d0f58e178c7c512bdfd6df634`.

### evaluation:577713

Calls written directly in this body: `.replace`, `.slice`, `.trim`, `args.recipientName.replace`.

SHA-256 of the source span: `d414ba80e44dff15d01d6690642526467681374d0f58e178c7c512bdfd6df634`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
