# `verifyAgentInboxDraft`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/email/agent-inbox-drafts.ts` · [Module README](../../../../../modules/core/email/agent-inbox-drafts-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:734924-734986](../../../../../../reference/runtime/host-main.cjs#L734924-L734986) | `FunctionDeclaration` | yes | `args` |
| [evaluation:539348-539410](../../../../../../reference/runtime/sand-eval-runner.cjs#L539348-L539410) | `FunctionDeclaration` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:734924-734986](../../../../../../reference/runtime/host-main.cjs#L734924-L734986) | 11 | 0 | 2 | 11 | 0 | 1 |
| [evaluation:539348-539410](../../../../../../reference/runtime/sand-eval-runner.cjs#L539348-L539410) | 11 | 0 | 2 | 11 | 0 | 1 |

### host:734924

Calls written directly in this body: `addresses.join`, `args.from.toLowerCase`, `attachmentPaths`, `describe5`, `described2.map`, `errorMessage`, `ownedInboxes`, `sendingAddressOwnership`.

Assignment or increment targets: `described2`.

SHA-256 of the source span: `b9a8a3c1ef654481534655616bf04c05d3fc043f2dfe890e9e704647fb413a46`.

### evaluation:539348

Calls written directly in this body: `addresses.join`, `args.from.toLowerCase`, `attachmentPaths`, `describe4`, `described2.map`, `errorMessage2`, `ownedInboxes`, `sendingAddressOwnership`.

Assignment or increment targets: `described2`.

SHA-256 of the source span: `a4582a44c80572f218d3c375712afc4d623451417680569c4cd05b9f0d77f9be`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
