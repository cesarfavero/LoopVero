# `BoxStoreManifestStore.deleteManifestEntryWithIndex`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/box-store-manifest.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/box-store-manifest-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:477103-477109](../../../../../../../reference/runtime/host-main.cjs#L477103-L477109) | `method` | não | `manifest, relPath, counts` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:477103-477109](../../../../../../../reference/runtime/host-main.cjs#L477103-L477109) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:477103

Chamadas escritas diretamente neste corpo: `.markChanged`, `manifest.delete`, `this.adjustAncestorRefCounts`, `this.manifestRevisionState`, `this.uncommittedStoreDbEntries.delete`.

SHA-256 do trecho: `bf336f623d35ace4c84ed9bf8b79a4dea85d875eeadc1751b6342cb4ae61b6bb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
