# `contactText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/secure-values/vault-contact.ts` · [Module README](../../../../../../modules/core/runner/secure-values/vault-contact-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:724601-724603](../../../../../../../reference/runtime/host-main.cjs#L724601-L724603) | `FunctionDeclaration` | no | `(none)` |
| [evaluation:550080-550082](../../../../../../../reference/runtime/sand-eval-runner.cjs#L550080-L550082) | `FunctionDeclaration` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724601-724603](../../../../../../../reference/runtime/host-main.cjs#L724601-L724603) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:550080-550082](../../../../../../../reference/runtime/sand-eval-runner.cjs#L550080-L550082) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:724601

Calls written directly in this body: `.max`, `.optional`, `.trim`, `external_exports2.string`.

SHA-256 of the source span: `ab60646af7f3fbc6ef6b2e7704ea008d6e59cd80d4742fb35f852299c094ead6`.

### evaluation:550080

Calls written directly in this body: `.max`, `.optional`, `.trim`, `external_exports3.string`.

SHA-256 of the source span: `e871da5dd12263f375030bb364489db7fd00db3d19783a28f666ba6088c9f805`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
