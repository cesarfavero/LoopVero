# `BoxStoreTransfer.syncSymlink`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/box-store-transfer.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/box-store-transfer-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:479626-479640](../../../../../../../reference/runtime/host-main.cjs#L479626-L479640) | `method` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:479626-479640](../../../../../../../reference/runtime/host-main.cjs#L479626-L479640) | 1 | 0 | 1 | 2 | 0 | 1 |

### host:479626

Chamadas escritas diretamente neste corpo: `errorMessage`, `this.fs.readlink`, `this.localStat.delete`, `this.log`, `this.manifestStore.setManifestEntry`.

SHA-256 do trecho: `6adca0bae982e9fa249b67c8f32f2bb93d53e592b46a689312710ef1079d42e1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
