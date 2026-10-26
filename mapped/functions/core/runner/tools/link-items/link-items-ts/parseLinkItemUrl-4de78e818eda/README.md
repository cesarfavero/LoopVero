# `parseLinkItemUrl`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/link-items/link-items.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/link-items/link-items-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:741065-741075](../../../../../../../../reference/runtime/host-main.cjs#L741065-L741075) | `FunctionDeclaration` | não | `url2` |
| [evaluation:482012-482022](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L482012-L482022) | `FunctionDeclaration` | não | `url2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:741065-741075](../../../../../../../../reference/runtime/host-main.cjs#L741065-L741075) | 2 | 0 | 0 | 4 | 0 | 1 |
| [evaluation:482012-482022](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L482012-L482022) | 2 | 0 | 0 | 4 | 0 | 1 |

### host:741065

Chamadas escritas diretamente neste corpo: `new URL`.

Alvos de atribuição ou incremento: `parsed2`.

SHA-256 do trecho: `cae0eeb993372d4cacd4d597c0564c829d3938701ee83d7a482147e980c970b3`.

### evaluation:482012

Chamadas escritas diretamente neste corpo: `new URL`.

Alvos de atribuição ou incremento: `parsed`.

SHA-256 do trecho: `2ab6614f6f49b933b6116549293dca4473990af81fee74dc70306832b8e79dfa`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
