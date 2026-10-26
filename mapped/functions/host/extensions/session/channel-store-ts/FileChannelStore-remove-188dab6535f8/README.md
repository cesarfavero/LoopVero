# `FileChannelStore.remove`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/channel-store.ts` · [README do módulo](../../../../../../modules/host/extensions/session/channel-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:721321-721339](../../../../../../../reference/runtime/host-main.cjs#L721321-L721339) | `method` | não | `platform2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:721321-721339](../../../../../../../reference/runtime/host-main.cjs#L721321-L721339) | 3 | 0 | 0 | 4 | 1 | 2 |

### host:721321

Chamadas escritas diretamente neste corpo: `.isDirectory`, `isMissingPathError`, `isSafeFolderId`, `new SandChannelLookupFailedError`, `removeSandDataFileSync`, `removeSandDataTreeSync`, `reportFallback`, `this.configPath`, `this.dir.scheduleNotify`, `this.stat`.

Alvos de lançamento explícito: `SandChannelLookupFailedError`.

SHA-256 do trecho: `b99c248bdc84ac23f4682511756f6a7ec7320711cec2aadbcbcd5f5598c1e7e6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
