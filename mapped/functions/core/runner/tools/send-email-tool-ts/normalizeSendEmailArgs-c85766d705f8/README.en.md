# `normalizeSendEmailArgs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-email-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/send-email-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:764276-764322](../../../../../../../reference/runtime/host-main.cjs#L764276-L764322) | `FunctionDeclaration` | no | `args` |
| [evaluation:557644-557690](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557644-L557690) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764276-764322](../../../../../../../reference/runtime/host-main.cjs#L764276-L764322) | 6 | 0 | 0 | 1 | 4 | 0 |
| [evaluation:557644-557690](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557644-L557690) | 6 | 0 | 0 | 1 | 4 | 0 |

### host:764276

Calls written directly in this body: `.map`, `args.body.trim`, `args.from.toLowerCase`, `args.html_body.trim`, `new SandToolInputError`, `new Set`, `nonEmptyList`, `normalizeDisplayName`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `a0167dcf84e36888dfdd4ab79343b213e3f3d9defbf633d672b6d6eca2101f1a`.

### evaluation:557644

Calls written directly in this body: `.map`, `args.body.trim`, `args.from.toLowerCase`, `args.html_body.trim`, `new SandToolInputError`, `new Set`, `nonEmptyList`, `normalizeDisplayName`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `a0167dcf84e36888dfdd4ab79343b213e3f3d9defbf633d672b6d6eca2101f1a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
