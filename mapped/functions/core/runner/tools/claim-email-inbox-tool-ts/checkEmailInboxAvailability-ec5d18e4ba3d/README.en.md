# `checkEmailInboxAvailability`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/claim-email-inbox-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/claim-email-inbox-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:764858-764875](../../../../../../../reference/runtime/host-main.cjs#L764858-L764875) | `FunctionDeclaration` | yes | `deps, args` |
| [evaluation:558226-558243](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558226-L558243) | `FunctionDeclaration` | yes | `deps, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764858-764875](../../../../../../../reference/runtime/host-main.cjs#L764858-L764875) | 2 | 0 | 1 | 1 | 1 | 0 |
| [evaluation:558226-558243](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558226-L558243) | 2 | 0 | 1 | 1 | 1 | 0 |

### host:764858

Calls written directly in this body: `args.usernames.map`, `deps.email.checkAddressAvailability`, `names3.flatMap`, `new Map`, `new SandEmailError`, `new Set`, `renderEmailAddressAvailability`, `usernames.forEach`.

Explicit throw targets: `SandEmailError`.

SHA-256 of the source span: `1b5500191d865fd10a8c8bd1e4d44d1e68c4593f08cd62eea619c5d6a02a1c9f`.

### evaluation:558226

Calls written directly in this body: `args.usernames.map`, `deps.email.checkAddressAvailability`, `names3.flatMap`, `new Map`, `new SandEmailError`, `new Set`, `renderEmailAddressAvailability`, `usernames.forEach`.

Explicit throw targets: `SandEmailError`.

SHA-256 of the source span: `1b5500191d865fd10a8c8bd1e4d44d1e68c4593f08cd62eea619c5d6a02a1c9f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
