# `budgetForkedEntries`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/subagents/executor-fork.ts` · [README do módulo](../../../../../../modules/core/runner/subagents/executor-fork-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:587578-587590](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587578-L587590) | `FunctionDeclaration` | não | `entries` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:587578-587590](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587578-L587590) | 2 | 1 | 0 | 1 | 0 | 0 |

### evaluation:587578

Chamadas escritas diretamente neste corpo: `clipMiddle`, `kept.push`, `kept.reverse`.

Alvos de atribuição ou incremento: `index`, `used`.

SHA-256 do trecho: `0d10e8e10f2aed3e6d4de342c905981dd19afbbfed953c145bcea8b0a05f060b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
