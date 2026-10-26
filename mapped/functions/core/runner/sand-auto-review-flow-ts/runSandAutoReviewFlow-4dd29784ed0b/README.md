# `runSandAutoReviewFlow`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/sand-auto-review-flow.ts` · [README do módulo](../../../../../modules/core/runner/sand-auto-review-flow-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:762105-762196](../../../../../../reference/runtime/host-main.cjs#L762105-L762196) | `FunctionDeclaration` | sim | `args` |
| [evaluation:554715-554806](../../../../../../reference/runtime/sand-eval-runner.cjs#L554715-L554806) | `FunctionDeclaration` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:762105-762196](../../../../../../reference/runtime/host-main.cjs#L762105-L762196) | 29 | 0 | 2 | 9 | 0 | 0 |
| [evaluation:554715-554806](../../../../../../reference/runtime/sand-eval-runner.cjs#L554715-L554806) | 29 | 0 | 2 | 9 | 0 | 0 |

### host:762105

Chamadas escritas diretamente neste corpo: `.catch`, `args.onUserDenied`, `cancelled`, `classify3`, `fingerprintSandAutoReviewTarget`, `options2.getApprovalExpiryPolicy`, `recordRuleRefusalTheToolReportsAsText`, `recordedCardRefusal`, `requestReviewedApproval`, `sandAutoReviewCautionNote`, `spec.fingerprintPayload`, `spec.requireApproval`, `spec.summarize`, `spec.summaryCopy`.

Alvos de atribuição ou incremento: `proposedRule`, `proposedRuleReplaces`.

SHA-256 do trecho: `f0488ff56c1bac03e6a48b9b07aa975f0afb10953798ae7efa19d1f7d6d7388b`.

### evaluation:554715

Chamadas escritas diretamente neste corpo: `.catch`, `args.onUserDenied`, `cancelled`, `classify2`, `fingerprintSandAutoReviewTarget`, `options2.getApprovalExpiryPolicy`, `recordRuleRefusalTheToolReportsAsText`, `recordedCardRefusal`, `requestReviewedApproval`, `sandAutoReviewCautionNote`, `spec.fingerprintPayload`, `spec.requireApproval`, `spec.summarize`, `spec.summaryCopy`.

Alvos de atribuição ou incremento: `proposedRule`, `proposedRuleReplaces`.

SHA-256 do trecho: `9207a852790fafcf89d4346c787d01be8401b6cff35310bee274c93a5c92276a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
