# `BoxStoreDownload.download/mkdirOwned`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/box-store-download.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/box-store-download-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:477724-477727](../../../../../../../reference/runtime/host-main.cjs#L477724-L477727) | `ArrowFunctionExpression` | sim | `dir` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:477724-477727](../../../../../../../reference/runtime/host-main.cjs#L477724-L477727) | 0 | 0 | 2 | 0 | 0 | 0 |

### host:477724

Chamadas escritas diretamente neste corpo: `directory.handle.close`, `openRestoreParent`.

SHA-256 do trecho: `f66975c58fc46fa75a4d8d2f40b24837d3c155d9aee2ae5496468a24dbf4f0d5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
