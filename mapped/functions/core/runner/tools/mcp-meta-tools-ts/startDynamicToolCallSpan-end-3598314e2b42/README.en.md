# `startDynamicToolCallSpan/end`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/mcp-meta-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/mcp-meta-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:761851-761852](../../../../../../../reference/runtime/host-main.cjs#L761851-L761852) | `ArrowFunctionExpression` | no | `(none)` |
| [host:761857-761861](../../../../../../../reference/runtime/host-main.cjs#L761857-L761861) | `ArrowFunctionExpression` | no | `outcome, errorClass` |
| [evaluation:554125-554126](../../../../../../../reference/runtime/sand-eval-runner.cjs#L554125-L554126) | `ArrowFunctionExpression` | no | `(none)` |
| [evaluation:554131-554135](../../../../../../../reference/runtime/sand-eval-runner.cjs#L554131-L554135) | `ArrowFunctionExpression` | no | `outcome, errorClass` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:761851-761852](../../../../../../../reference/runtime/host-main.cjs#L761851-L761852) | 0 | 0 | 0 | 0 | 0 | 0 |
| [host:761857-761861](../../../../../../../reference/runtime/host-main.cjs#L761857-L761861) | 1 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:554125-554126](../../../../../../../reference/runtime/sand-eval-runner.cjs#L554125-L554126) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:554131-554135](../../../../../../../reference/runtime/sand-eval-runner.cjs#L554131-L554135) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:761851

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `a4ea409bf05f706f32fb8a264110cd4a92d039cd051d9c20d470e6cb97dc5b24`.

### host:761857

Calls written directly in this body: `disposable.span.setAttribute`, `disposable[computed]`.

SHA-256 of the source span: `cd471d1d37f48152fbe4bb40efe99a69c356b5ebe0f102a501dbdc00d7812335`.

### evaluation:554125

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `a4ea409bf05f706f32fb8a264110cd4a92d039cd051d9c20d470e6cb97dc5b24`.

### evaluation:554131

Calls written directly in this body: `disposable.span.setAttribute`, `disposable[computed]`.

SHA-256 of the source span: `cd471d1d37f48152fbe4bb40efe99a69c356b5ebe0f102a501dbdc00d7812335`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
