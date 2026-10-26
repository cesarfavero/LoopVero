# `runSandAutoReviewClassifier`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/sand-auto-review-classifier-run.ts` · [README do módulo](../../../../../modules/core/runner/sand-auto-review-classifier-run-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:693658-693708](../../../../../../reference/runtime/host-main.cjs#L693658-L693708) | `FunctionDeclaration` | sim | `args` |
| [evaluation:490894-490944](../../../../../../reference/runtime/sand-eval-runner.cjs#L490894-L490944) | `FunctionDeclaration` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:693658-693708](../../../../../../reference/runtime/host-main.cjs#L693658-L693708) | 6 | 0 | 2 | 5 | 1 | 1 |
| [evaluation:490894-490944](../../../../../../reference/runtime/sand-eval-runner.cjs#L490894-L490944) | 6 | 0 | 2 | 5 | 1 | 1 |

### host:693658

Chamadas escritas diretamente neste corpo: `.filter`, `args.buildTarget`, `args.loadConversationContext`, `args.resourceAccessor.get`, `blockReason.trim`, `executeSmartModeClassifierWithMeasurement2`, `getConversationGroupId`, `getConversationId`, `new SmartModeClassifierArgs`, `proposalOf`, `sandAutoReviewAppliedRules`, `smartModeBlockSignalsOf`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `9df6d9f6ba7c3ef6cda2803ecbd28b5f9ef94aa38e19bd0689972aec6e4e457e`.

### evaluation:490894

Chamadas escritas diretamente neste corpo: `.filter`, `args.buildTarget`, `args.loadConversationContext`, `args.resourceAccessor.get`, `blockReason.trim`, `executeSmartModeClassifierWithMeasurement2`, `getConversationGroupId`, `getConversationId`, `new SmartModeClassifierArgs`, `proposalOf`, `sandAutoReviewAppliedRules`, `smartModeBlockSignalsOf`.

Alvos de lançamento explícito: `error63`.

SHA-256 do trecho: `99ac0c94274f476951922490bbb25deab76075e9c570515b596dd36f7c7f23c7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
