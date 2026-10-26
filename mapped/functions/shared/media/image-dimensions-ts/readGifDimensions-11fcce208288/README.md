# `readGifDimensions`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/media/image-dimensions.ts` · [README do módulo](../../../../../modules/shared/media/image-dimensions-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:497504-497512](../../../../../../reference/runtime/host-main.cjs#L497504-L497512) | `FunctionDeclaration` | não | `buffer` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:497504-497512](../../../../../../reference/runtime/host-main.cjs#L497504-L497512) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:497504

Chamadas escritas diretamente neste corpo: `String.fromCharCode`, `buffer.subarray`, `dataViewOf`, `toImageDimensions`, `view.getUint16`.

SHA-256 do trecho: `f2dfe0f9c2a97b73ba8a2ac917532adfddd3cfd709d03e2f97c115e6d9ff3644`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
