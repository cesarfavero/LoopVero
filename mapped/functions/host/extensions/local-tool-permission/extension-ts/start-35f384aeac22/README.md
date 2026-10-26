# `start`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `host/extensions/local-tool-permission/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/local-tool-permission/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:682226-682251](../../../../../../../reference/runtime/host-main.cjs#L682226-L682251) | `ArrowFunctionExpression` | não | `context2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682226-682251](../../../../../../../reference/runtime/host-main.cjs#L682226-L682251) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:682226

Chamadas escritas diretamente neste corpo: `context2.host.events.on`, `context2.host.whenBackgroundWorkReady.then`, `context2.onStop`.

SHA-256 do trecho: `0fc55400054101798e90ade13c678333f2acd074e809cde6a9570ffeb7733df7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
