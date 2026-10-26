# `StoreDbBundleCapture.isAgentDbBundleCommitted`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/store-db-bundle-capture.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/store-db-bundle-capture-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:479980-479984](../../../../../../../reference/runtime/host-main.cjs#L479980-L479984) | `method` | não | `manifest, targets` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:479980-479984](../../../../../../../reference/runtime/host-main.cjs#L479980-L479984) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:479980

Chamadas escritas diretamente neste corpo: `targets.every`, `this.manifestStore.isLiveManifest`.

SHA-256 do trecho: `8edbd4705e2cc0a3f40a8fe31a3b3c7e0effdbcf7011f053dd0b7c76455d5492`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
