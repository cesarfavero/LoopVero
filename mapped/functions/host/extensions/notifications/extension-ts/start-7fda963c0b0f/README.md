# `start`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/notifications/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/notifications/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:703522-703551](../../../../../../../reference/runtime/host-main.cjs#L703522-L703551) | `ArrowFunctionExpression` | não | `context2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:703522-703551](../../../../../../../reference/runtime/host-main.cjs#L703522-L703551) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:703522

Chamadas escritas diretamente neste corpo: `context2.host.events.subscribe`, `context2.onStop`, `createSandCursorBackendClient`, `createSandMobilePushSender`, `new SandMobilePushNotifier`.

SHA-256 do trecho: `26f12b1c15f8512fffb71895e4490628fc9c04175010cf693e156ce5c65ec7b7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
