# `describeListEmailInboxes`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/list-email-inboxes-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/list-email-inboxes-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:764888-764894](../../../../../../../reference/runtime/host-main.cjs#L764888-L764894) | `FunctionDeclaration` | no | `draftsOnly` |
| [evaluation:558256-558262](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558256-L558262) | `FunctionDeclaration` | no | `draftsOnly` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764888-764894](../../../../../../../reference/runtime/host-main.cjs#L764888-L764894) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:558256-558262](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558256-L558262) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:764888

Calls written directly in this body: `.join`.

SHA-256 of the source span: `3a32fe032443d478cd723b056130fe926d8ce0437859fe5423cd3e2f444688b9`.

### evaluation:558256

Calls written directly in this body: `.join`.

SHA-256 of the source span: `3a32fe032443d478cd723b056130fe926d8ce0437859fe5423cd3e2f444688b9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
