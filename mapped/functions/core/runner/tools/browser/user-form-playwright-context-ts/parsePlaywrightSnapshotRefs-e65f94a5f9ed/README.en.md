# `parsePlaywrightSnapshotRefs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/user-form-playwright-context.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/user-form-playwright-context-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:767413-767446](../../../../../../../../reference/runtime/host-main.cjs#L767413-L767446) | `FunctionDeclaration` | no | `text3` |
| [evaluation:562930-562963](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562930-L562963) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767413-767446](../../../../../../../../reference/runtime/host-main.cjs#L767413-L767446) | 7 | 2 | 0 | 1 | 0 | 0 |
| [evaluation:562930-562963](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562930-L562963) | 7 | 2 | 0 | 1 | 0 | 0 |

### host:767413

Calls written directly in this body: `/^\s*/.exec`, `SNAPSHOT_LEADING_ATTRIBUTES_PATTERN.exec`, `SNAPSHOT_REF_ATTRIBUTE_PATTERN.exec`, `frameStack.findLast`, `frameStack.pop`, `frameStack.push`, `new Map`, `new Set`, `parsed2.name.trim`, `refs.has`, `refs.set`, `repeatedRefs.add`, `roleNameAndAttributes`, `snapshotKeyOf`, `text3.split`, `withSameRoleAndNameOrdinals`.

SHA-256 of the source span: `c038466452ca51d936f091a10020170d0f04ca166f0f8ba6a0d096f924751311`.

### evaluation:562930

Calls written directly in this body: `/^\s*/.exec`, `SNAPSHOT_LEADING_ATTRIBUTES_PATTERN.exec`, `SNAPSHOT_REF_ATTRIBUTE_PATTERN.exec`, `frameStack.findLast`, `frameStack.pop`, `frameStack.push`, `new Map`, `new Set`, `parsed.name.trim`, `refs.has`, `refs.set`, `repeatedRefs.add`, `roleNameAndAttributes`, `snapshotKeyOf`, `text3.split`, `withSameRoleAndNameOrdinals`.

SHA-256 of the source span: `4646128637c3718ab761acc47c449681d426d98b7c5ce27a7fb94b2383cb4049`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
