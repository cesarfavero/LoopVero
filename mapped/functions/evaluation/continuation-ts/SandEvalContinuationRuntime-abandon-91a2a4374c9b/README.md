# `_SandEvalContinuationRuntime.abandon`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `evaluation/continuation.ts` · [README do módulo](../../../../modules/evaluation/continuation-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:628847-628851](../../../../../reference/runtime/sand-eval-runner.cjs#L628847-L628851) | `method` | sim | `reason` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:628847-628851](../../../../../reference/runtime/sand-eval-runner.cjs#L628847-L628851) | 0 | 0 | 1 | 1 | 0 | 0 |

### evaluation:628847

Chamadas escritas diretamente neste corpo: `Date.parse`, `this.control.abandon`.

Alvos de atribuição ou incremento: `this.currentScenarioMs`.

SHA-256 do trecho: `3d70f67c217eda8b8bb14fcb911bf01beb96f55514ef74681904f80b57f83450`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
