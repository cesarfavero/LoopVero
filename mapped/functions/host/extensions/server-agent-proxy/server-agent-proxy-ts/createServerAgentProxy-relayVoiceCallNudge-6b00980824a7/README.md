# `createServerAgentProxy/relayVoiceCallNudge`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/server-agent-proxy/server-agent-proxy.ts` · [README do módulo](../../../../../../modules/host/extensions/server-agent-proxy/server-agent-proxy-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:714928-714942](../../../../../../../reference/runtime/host-main.cjs#L714928-L714942) | `ArrowFunctionExpression` | sim | `{ agentId, callId, request: request5 }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714928-714942](../../../../../../../reference/runtime/host-main.cjs#L714928-L714942) | 1 | 0 | 1 | 1 | 1 | 0 |

### host:714928

Chamadas escritas diretamente neste corpo: `SendTaskTool.definition.output.parse`, `new ServerVoiceHarnessRefusedError`, `voiceHarness.callTool`.

Alvos de lançamento explícito: `ServerVoiceHarnessRefusedError`.

SHA-256 do trecho: `6c275c1addd4b1a3afba829ef70c8ff5447149f47c220caa57ac85ac7e465459`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
