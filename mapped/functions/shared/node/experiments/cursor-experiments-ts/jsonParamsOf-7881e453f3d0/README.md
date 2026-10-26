# `jsonParamsOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/experiments/cursor-experiments.ts` · [README do módulo](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:552514-552520](../../../../../../../reference/runtime/host-main.cjs#L552514-L552520) | `FunctionDeclaration` | não | `params` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552514-552520](../../../../../../../reference/runtime/host-main.cjs#L552514-L552520) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:552514

Chamadas escritas diretamente neste corpo: `Object.entries`, `isJsonValue`.

Alvos de atribuição ou incremento: `result[computed]`.

SHA-256 do trecho: `3f3b24f638a4b1394ac88fd00a97b16d7a12b98d3f4bbb7d382ba1ad5de187da`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
