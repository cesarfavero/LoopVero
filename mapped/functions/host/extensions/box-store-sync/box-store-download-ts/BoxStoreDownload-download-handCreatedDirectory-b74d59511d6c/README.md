# `BoxStoreDownload.download/handCreatedDirectory`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/box-store-download.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/box-store-download-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:477658-477665](../../../../../../../reference/runtime/host-main.cjs#L477658-L477665) | `ArrowFunctionExpression` | sim | `directory` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:477658-477665](../../../../../../../reference/runtime/host-main.cjs#L477658-L477665) | 3 | 0 | 3 | 1 | 0 | 0 |

### host:477658

Chamadas escritas diretamente neste corpo: `directory.handle.chown`, `directory.handle.stat`, `mayHandOverTo`, `options2.chown`.

SHA-256 do trecho: `e3527d65380e12b98fea066c9a47d770f2a6f41501376d8db35905a907e0f548`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
