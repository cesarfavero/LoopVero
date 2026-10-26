# `DecisionRecordingClassifierExecutor.execute/refuseAtTheCancelNotTheSettle`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/action-audit/tool-decision-audit.ts` · [README do módulo](../../../../../../modules/core/runner/action-audit/tool-decision-audit-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:489999-490003](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489999-L490003) | `ArrowFunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:489999-490003](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489999-L490003) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:489999

Chamadas escritas diretamente neste corpo: `record4`.

Alvos de atribuição ou incremento: `refusedOnce`.

SHA-256 do trecho: `8532fec59498a376c8a1d48c2869b60641291220b044770f59b9b3d185b3181e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
