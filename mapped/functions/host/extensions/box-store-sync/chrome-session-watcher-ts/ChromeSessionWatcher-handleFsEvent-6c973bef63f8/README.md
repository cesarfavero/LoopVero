# `ChromeSessionWatcher.handleFsEvent`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/chrome-session-watcher.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/chrome-session-watcher-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:481847-481855](../../../../../../../reference/runtime/host-main.cjs#L481847-L481855) | `method` | não | `filename` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:481847-481855](../../../../../../../reference/runtime/host-main.cjs#L481847-L481855) | 4 | 0 | 0 | 3 | 0 | 0 |

### host:481847

Chamadas escritas diretamente neste corpo: `this.isSessionDbFile`, `this.sessionDbChangedSinceLastCheck`, `this.trigger`.

SHA-256 do trecho: `0fb03b15cb4828ba53f19a72cca98cda7e8c31cc43b2b1f036e4c8dce5628c0a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
