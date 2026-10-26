# `proposalOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/sand-auto-review-classifier-run.ts` · [README do módulo](../../../../../modules/core/runner/sand-auto-review-classifier-run-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:693635-693640](../../../../../../reference/runtime/host-main.cjs#L693635-L693640) | `FunctionDeclaration` | não | `success2` |
| [evaluation:490871-490876](../../../../../../reference/runtime/sand-eval-runner.cjs#L490871-L490876) | `FunctionDeclaration` | não | `success2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:693635-693640](../../../../../../reference/runtime/host-main.cjs#L693635-L693640) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:490871-490876](../../../../../../reference/runtime/sand-eval-runner.cjs#L490871-L490876) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:693635

Chamadas escritas diretamente neste corpo: `success2.proposedAllowRule.trim`, `success2.proposedAllowRuleReplaces.trim`.

SHA-256 do trecho: `44a9cced88a519c17779cedd69ff28cc1162e9c2b9de38a8c3299f0bdfa38bf0`.

### evaluation:490871

Chamadas escritas diretamente neste corpo: `success2.proposedAllowRule.trim`, `success2.proposedAllowRuleReplaces.trim`.

SHA-256 do trecho: `44a9cced88a519c17779cedd69ff28cc1162e9c2b9de38a8c3299f0bdfa38bf0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
