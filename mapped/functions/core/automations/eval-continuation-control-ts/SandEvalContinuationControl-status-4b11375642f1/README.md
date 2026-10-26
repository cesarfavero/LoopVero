# `SandEvalContinuationControl.status`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `core/automations/eval-continuation-control.ts` · [README do módulo](../../../../../modules/core/automations/eval-continuation-control-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:628630-628632](../../../../../../reference/runtime/sand-eval-runner.cjs#L628630-L628632) | `method` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:628630-628632](../../../../../../reference/runtime/sand-eval-runner.cjs#L628630-L628632) | 0 | 0 | 1 | 1 | 0 | 0 |

### evaluation:628630

Chamadas escritas diretamente neste corpo: `parseScenarioStatus`, `this.call`.

SHA-256 do trecho: `10659200d2776ef84bc25c021f39ffa440ff258e6c6d78d6115be783ed6732ab`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
