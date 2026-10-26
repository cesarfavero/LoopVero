# `resolveFrozenToolDescriptions`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/frozen-tool-descriptions.ts` · [README do módulo](../../../../../modules/core/runner/frozen-tool-descriptions-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:586455-586511](../../../../../../reference/runtime/sand-eval-runner.cjs#L586455-L586511) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:586455-586511](../../../../../../reference/runtime/sand-eval-runner.cjs#L586455-L586511) | 5 | 2 | 0 | 3 | 0 | 0 |

### evaluation:586455

Chamadas escritas diretamente neste corpo: `descriptions.set`, `descriptions2.set`, `new Map`, `sameRecord`, `withOptionalRecords`.

Alvos de atribuição ou incremento: `drifted[computed]`, `pinned2[computed]`, `pinned[computed]`, `pinsChanged`, `schemas2[computed]`, `schemas[computed]`.

SHA-256 do trecho: `372f545a3d6e37f257558a1fcc4c4fe9893fabfb30ecf9f8df5919c662d2013c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
