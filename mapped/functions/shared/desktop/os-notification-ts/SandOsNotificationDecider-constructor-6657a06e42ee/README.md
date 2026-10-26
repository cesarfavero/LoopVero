# `SandOsNotificationDecider.constructor`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/desktop/os-notification.ts` · [README do módulo](../../../../../modules/shared/desktop/os-notification-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:703274-703277](../../../../../../reference/runtime/host-main.cjs#L703274-L703277) | `method` | não | `throttleWindowMs = SAND_OS_NOTIFICATION_THROTTLE_MS, dedupe = "last-message"` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:703274-703277](../../../../../../reference/runtime/host-main.cjs#L703274-L703277) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:703274

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

Alvos de atribuição ou incremento: `this.dedupe`, `this.throttleWindowMs`.

SHA-256 do trecho: `d0b8747a756e4d9bdf9c12f6e9237299761f17a1c34d23aaedbd0c9009a54302`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
