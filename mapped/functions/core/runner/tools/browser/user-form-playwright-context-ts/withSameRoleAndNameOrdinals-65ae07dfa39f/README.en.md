# `withSameRoleAndNameOrdinals`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/user-form-playwright-context.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/user-form-playwright-context-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:767447-767468](../../../../../../../../reference/runtime/host-main.cjs#L767447-L767468) | `FunctionDeclaration` | no | `refs, repeatedRefs` |
| [evaluation:562964-562985](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562964-L562985) | `FunctionDeclaration` | no | `refs, repeatedRefs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767447-767468](../../../../../../../../reference/runtime/host-main.cjs#L767447-L767468) | 3 | 2 | 0 | 1 | 0 | 0 |
| [evaluation:562964-562985](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562964-L562985) | 3 | 2 | 0 | 1 | 0 | 0 |

### host:767447

Calls written directly in this body: `group.forEach`, `group.refs.push`, `groups.get`, `groups.set`, `groups.values`, `new Map`.

SHA-256 of the source span: `f6070140a312e8f6a6ea099a1a9603ac8fd5579fadecba89e2e8e3f4154c50f6`.

### evaluation:562964

Calls written directly in this body: `group.forEach`, `group.refs.push`, `groups.get`, `groups.set`, `groups.values`, `new Map`.

SHA-256 of the source span: `f6070140a312e8f6a6ea099a1a9603ac8fd5579fadecba89e2e8e3f4154c50f6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
