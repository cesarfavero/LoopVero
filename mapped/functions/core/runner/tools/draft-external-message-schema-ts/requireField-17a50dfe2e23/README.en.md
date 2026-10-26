# `requireField`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-external-message-schema.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-external-message-schema-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:755055-755061](../../../../../../../reference/runtime/host-main.cjs#L755055-L755061) | `FunctionDeclaration` | no | `ctx, field, platform2` |
| [evaluation:539680-539686](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539680-L539686) | `FunctionDeclaration` | no | `ctx, field, platform` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755055-755061](../../../../../../../reference/runtime/host-main.cjs#L755055-L755061) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:539680-539686](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539680-L539686) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:755055

Calls written directly in this body: `ctx.addIssue`.

SHA-256 of the source span: `8ab2bb215571892128a3eb348f1c8293622c48706ed0f1c8b2932c37e796918c`.

### evaluation:539680

Calls written directly in this body: `ctx.addIssue`.

SHA-256 of the source span: `43a9a45648232c14d3b833186cc9605efcf06be13e6ef3392c71a1646527f58e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
