# `composeEvalRunnerGates`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/evals/runner-options.ts` · [README do módulo](../../../../../modules/core/evals/runner-options-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:596591-596744](../../../../../../reference/runtime/sand-eval-runner.cjs#L596591-L596744) | `FunctionDeclaration` | não | `overrides = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:596591-596744](../../../../../../reference/runtime/sand-eval-runner.cjs#L596591-L596744) | 2 | 1 | 0 | 1 | 0 | 0 |

### evaluation:596591

Chamadas escritas diretamente neste corpo: `composeSandRunnerGates`, `fixedGate`, `isKeyOf`.

Alvos de atribuição ou incremento: `gates[computed]`.

SHA-256 do trecho: `e6e507662a3158d4098b829c60d1a37d03f4c72bb131dd1deb6ccf452b6a4b5e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
