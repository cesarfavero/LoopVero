# `firstUnusedId`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/transcript-entry-ids.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/transcript-entry-ids-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:734352-734359](../../../../../../../reference/runtime/host-main.cjs#L734352-L734359) | `FunctionDeclaration` | não | `existingIds, mint2, startIndex` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:734352-734359](../../../../../../../reference/runtime/host-main.cjs#L734352-L734359) | 0 | 1 | 0 | 1 | 0 | 0 |

### host:734352

Chamadas escritas diretamente neste corpo: `existingIds.has`, `mint2`.

Alvos de atribuição ou incremento: `id`, `index`.

SHA-256 do trecho: `dde55e98c7ccf29ba1ac5f21f2ef1c10647c8918fe76b9ff821ee3e6c26d55e0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
