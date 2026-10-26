# `textOf4`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/budgets-recovery/README.md).

**Módulo:** `core/runner/turn-budget/step-cap.ts` · [README do módulo](../../../../../../modules/core/runner/turn-budget/step-cap-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:587293-587296](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587293-L587296) | `FunctionDeclaration` | não | `message` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:587293-587296](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587293-L587296) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:587293

Chamadas escritas diretamente neste corpo: `.join`, `message.content.flatMap`.

SHA-256 do trecho: `6d63d35ad28c9314f0c1d0d73713e155f9fac0cb10ffcd7206152cb721165eb9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
