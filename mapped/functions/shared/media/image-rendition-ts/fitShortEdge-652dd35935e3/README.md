# `fitShortEdge`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/media/image-rendition.ts` · [README do módulo](../../../../../modules/shared/media/image-rendition-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:487297-487303](../../../../../../reference/runtime/host-main.cjs#L487297-L487303) | `FunctionDeclaration` | não | `dimensions, edge` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:487297-487303](../../../../../../reference/runtime/host-main.cjs#L487297-L487303) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:487297

Chamadas escritas diretamente neste corpo: `Math.max`, `Math.min`, `scaledOnGrid`.

SHA-256 do trecho: `370343f76f6b1be9a3974a4fe9550dc88b0433f955dd427a1c794624cebcfabd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
