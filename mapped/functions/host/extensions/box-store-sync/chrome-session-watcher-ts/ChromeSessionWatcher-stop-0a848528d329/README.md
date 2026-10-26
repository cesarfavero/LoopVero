# `ChromeSessionWatcher.stop`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/chrome-session-watcher.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/chrome-session-watcher-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:481878-481886](../../../../../../../reference/runtime/host-main.cjs#L481878-L481886) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:481878-481886](../../../../../../../reference/runtime/host-main.cjs#L481878-L481886) | 0 | 0 | 0 | 0 | 0 | 1 |

### host:481878

Chamadas escritas diretamente neste corpo: `this.trigger.dispose`, `this.watcher.close`.

Alvos de atribuição ou incremento: `this.stopped`, `this.watcher`.

SHA-256 do trecho: `bcf18320187ebb01c7b3700d3774ec61183492356e8d560f80040b297c118287`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
