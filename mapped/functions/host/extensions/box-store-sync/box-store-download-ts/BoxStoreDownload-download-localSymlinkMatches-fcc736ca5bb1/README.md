# `BoxStoreDownload.download/localSymlinkMatches`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/box-store-download.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/box-store-download-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:477845-477856](../../../../../../../reference/runtime/host-main.cjs#L477845-L477856) | `ArrowFunctionExpression` | sim | `destEntry, entry` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:477845-477856](../../../../../../../reference/runtime/host-main.cjs#L477845-L477856) | 1 | 0 | 2 | 2 | 0 | 0 |

### host:477845

Chamadas escritas diretamente neste corpo: `.then`, `info2.isSymbolicLink`.

SHA-256 do trecho: `59312c6ac4158895a721dbd582aeb34831f3df46b9412d6b41c955b42313cbff`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
