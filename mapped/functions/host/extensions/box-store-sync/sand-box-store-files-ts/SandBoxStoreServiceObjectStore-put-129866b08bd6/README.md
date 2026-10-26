# `SandBoxStoreServiceObjectStore.put`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/sand-box-store-files.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/sand-box-store-files-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:474877-474887](../../../../../../../reference/runtime/host-main.cjs#L474877-L474887) | `method` | sim | `key, bytes, opts` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:474877-474887](../../../../../../../reference/runtime/host-main.cjs#L474877-L474887) | 2 | 0 | 3 | 2 | 0 | 0 |

### host:474877

Chamadas escritas diretamente neste corpo: `this.commitManifest`, `this.putContentAddressed`, `this.putMutable`.

SHA-256 do trecho: `578240326c35e8431760d332c0d7df40c92157ce1d0dfeab4db2c9a0164e92f4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
