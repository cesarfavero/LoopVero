# `readSlackPartnerProfileName`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-route-verification.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-route-verification-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:735316-735325](../../../../../../../reference/runtime/host-main.cjs#L735316-L735325) | `FunctionDeclaration` | yes | `execute, route` |
| [evaluation:540881-540890](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540881-L540890) | `FunctionDeclaration` | yes | `execute, route` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:735316-735325](../../../../../../../reference/runtime/host-main.cjs#L735316-L735325) | 2 | 0 | 1 | 3 | 0 | 0 |
| [evaluation:540881-540890](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540881-L540890) | 2 | 0 | 1 | 3 | 0 | 0 |

### host:735316

Calls written directly in this body: `SLACK_USER_ID.test`, `execute`, `parseSlackProfileDisplayName`.

SHA-256 of the source span: `9462b5f63345e4416268f20bc915bf3a283f8229295f4db428e0d262b876500c`.

### evaluation:540881

Calls written directly in this body: `SLACK_USER_ID.test`, `execute`, `parseSlackProfileDisplayName`.

SHA-256 of the source span: `9462b5f63345e4416268f20bc915bf3a283f8229295f4db428e0d262b876500c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
