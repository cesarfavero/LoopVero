# `cookieOriginRequestEntryFromWire`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `shared/chrome-import/cookie-origin-approval.ts` · [Module README](../../../../../modules/shared/chrome-import/cookie-origin-approval-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:485886-485888](../../../../../../reference/runtime/host-main.cjs#L485886-L485888) | `FunctionDeclaration` | no | `entry` |
| [evaluation:574704-574706](../../../../../../reference/runtime/sand-eval-runner.cjs#L574704-L574706) | `FunctionDeclaration` | no | `entry` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:485886-485888](../../../../../../reference/runtime/host-main.cjs#L485886-L485888) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:574704-574706](../../../../../../reference/runtime/sand-eval-runner.cjs#L574704-L574706) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:485886

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `fbf098fc0e23919d552a34666117d4022802216e19e6f37e9ba0ca9badc3a464`.

### evaluation:574704

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `fbf098fc0e23919d552a34666117d4022802216e19e6f37e9ba0ca9badc3a464`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
