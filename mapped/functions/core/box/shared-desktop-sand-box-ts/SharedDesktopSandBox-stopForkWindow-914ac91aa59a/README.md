# `SharedDesktopSandBox.stopForkWindow`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/box/shared-desktop-sand-box.ts` · [README do módulo](../../../../../modules/core/box/shared-desktop-sand-box-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:554555-554572](../../../../../../reference/runtime/host-main.cjs#L554555-L554572) | `method` | não | `ctx, seat, opts = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:554555-554572](../../../../../../reference/runtime/host-main.cjs#L554555-L554572) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:554555

Chamadas escritas diretamente neste corpo: `.then`, `Promise.resolve`, `inFlight.stopped.then`, `stopped2.then`, `this.windowStops.get`, `this.windowStops.set`.

SHA-256 do trecho: `a981d9f55afff8b22f70898e79ef7a6e620dcaa3293999235f6a1258050a8311`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
