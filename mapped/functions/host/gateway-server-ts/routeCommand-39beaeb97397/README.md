# `routeCommand`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/gateway/README.md).

**Módulo:** `host/gateway-server.ts` · [README do módulo](../../../../modules/host/gateway-server-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:493530-493579](../../../../../reference/runtime/host-main.cjs#L493530-L493579) | `FunctionDeclaration` | sim | `api, method, body, res, req, onCommandError, onCommandComplete` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:493530-493579](../../../../../reference/runtime/host-main.cjs#L493530-L493579) | 4 | 0 | 1 | 2 | 1 | 3 |

### host:493530

Chamadas escritas diretamente neste corpo: `Date.now`, `beginGatewayCommandTrace`, `classifyGatewayCommandError`, `clientWantsSlimAvatars`, `commandSpan.span.end`, `commandTrace`, `gzipOptionsFor`, `isSandGatewayMethod`, `onCommandComplete`, `onCommandError`, `requestId`, `respondErrorPayload`, `respondJson`, `runGatewayCommand`, `statusForCommandError`.

Alvos de atribuição ou incremento: `result`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `ac02c34546adb8b070aacf8dc3f7474d39fc4a74c1232f9e6aae8a09084bee0b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
