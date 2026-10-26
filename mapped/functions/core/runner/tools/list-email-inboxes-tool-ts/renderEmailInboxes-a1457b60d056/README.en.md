# `renderEmailInboxes`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/list-email-inboxes-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/list-email-inboxes-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:764895-764904](../../../../../../../reference/runtime/host-main.cjs#L764895-L764904) | `FunctionDeclaration` | no | `inboxes` |
| [evaluation:558263-558272](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558263-L558272) | `FunctionDeclaration` | no | `inboxes` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764895-764904](../../../../../../../reference/runtime/host-main.cjs#L764895-L764904) | 2 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:558263-558272](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558263-L558272) | 2 | 1 | 0 | 2 | 0 | 0 |

### host:764895

Calls written directly in this body: `lines2.join`, `lines2.push`.

SHA-256 of the source span: `cfe19e2e11c002100562b9937e6b0be47d5bd5c3f0453c4f9699c427b2d4ad23`.

### evaluation:558263

Calls written directly in this body: `lines2.join`, `lines2.push`.

SHA-256 of the source span: `cfe19e2e11c002100562b9937e6b0be47d5bd5c3f0453c4f9699c427b2d4ad23`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
