# `describeCall`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/device-local-tools/mobile-read-contacts.ts` · [Module README](../../../../../modules/core/device-local-tools/mobile-read-contacts-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:759416-759419](../../../../../../reference/runtime/host-main.cjs#L759416-L759419) | `ArrowFunctionExpression` | no | `input2` |
| [evaluation:549576-549579](../../../../../../reference/runtime/sand-eval-runner.cjs#L549576-L549579) | `ArrowFunctionExpression` | no | `input2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:759416-759419](../../../../../../reference/runtime/host-main.cjs#L759416-L759419) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:549576-549579](../../../../../../reference/runtime/sand-eval-runner.cjs#L549576-L549579) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:759416

Calls written directly in this body: `describeReadContacts`, `readContactsParameters.safeParse`.

SHA-256 of the source span: `c60ddfc951e15d9ad9a6a0b74214327440be520b13ae0196c42924cfb1ca40e9`.

### evaluation:549576

Calls written directly in this body: `describeReadContacts`, `readContactsParameters.safeParse`.

SHA-256 of the source span: `9442735391760a59218440047e7ad56d35d9839ef70e635bba14857acc07a495`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
