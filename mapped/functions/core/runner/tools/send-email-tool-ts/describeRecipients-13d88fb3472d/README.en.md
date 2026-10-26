# `describeRecipients`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-email-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/send-email-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:764351-764356](../../../../../../../reference/runtime/host-main.cjs#L764351-L764356) | `FunctionDeclaration` | no | `to3, cc, bcc` |
| [evaluation:557719-557724](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557719-L557724) | `FunctionDeclaration` | no | `to3, cc, bcc` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764351-764356](../../../../../../../reference/runtime/host-main.cjs#L764351-L764356) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:557719-557724](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557719-L557724) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:764351

Calls written directly in this body: `bcc.join`, `cc.join`, `parts.join`, `parts.push`, `to3.join`.

SHA-256 of the source span: `8afecb414b912ddb91ec032bdae89a7cabb51822e8810ea96db12d74ae335078`.

### evaluation:557719

Calls written directly in this body: `bcc.join`, `cc.join`, `parts.join`, `parts.push`, `to3.join`.

SHA-256 of the source span: `8afecb414b912ddb91ec032bdae89a7cabb51822e8810ea96db12d74ae335078`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
