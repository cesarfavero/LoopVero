# `parseScenarioStatus`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `core/automations/eval-continuation-control.ts` · [README do módulo](../../../../../modules/core/automations/eval-continuation-control-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:628592-628600](../../../../../../reference/runtime/sand-eval-runner.cjs#L628592-L628600) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:628592-628600](../../../../../../reference/runtime/sand-eval-runner.cjs#L628592-L628600) | 1 | 0 | 0 | 1 | 1 | 0 |

### evaluation:628592

Chamadas escritas diretamente neste corpo: `new SandEvalContinuationControlError`, `sandEvalScenarioStatusSchema.safeParse`.

Alvos de lançamento explícito: `SandEvalContinuationControlError`.

SHA-256 do trecho: `fcba96e319b03108506fb1fd291055fcfe57d64f0a7563a4c5408323b6329843`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
