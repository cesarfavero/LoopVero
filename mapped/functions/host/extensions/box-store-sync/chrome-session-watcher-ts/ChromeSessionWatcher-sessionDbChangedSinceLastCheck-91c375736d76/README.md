# `ChromeSessionWatcher.sessionDbChangedSinceLastCheck`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/chrome-session-watcher.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/chrome-session-watcher-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:481859-481871](../../../../../../../reference/runtime/host-main.cjs#L481859-L481871) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:481859-481871](../../../../../../../reference/runtime/host-main.cjs#L481859-L481871) | 2 | 1 | 0 | 1 | 0 | 0 |

### host:481859

Chamadas escritas diretamente neste corpo: `this.lastMtimes.get`, `this.lastMtimes.set`, `this.statMtimeMs`.

Alvos de atribuição ou incremento: `changed`.

SHA-256 do trecho: `f5c38fec562b1ac1d8961641a3aea6d4912161313db0befd2e6b417e6acbdacb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
