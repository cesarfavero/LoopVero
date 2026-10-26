# `AutomationRuntime.runOnPerAgentChain`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/automations/README.md).

**Módulo:** `host/extensions/transcript/automation-runtime.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/automation-runtime-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:734063-734077](../../../../../../../reference/runtime/host-main.cjs#L734063-L734077) | `method` | não | `chains, agentId, task` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:734063-734077](../../../../../../../reference/runtime/host-main.cjs#L734063-L734077) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:734063

Chamadas escritas diretamente neste corpo: `Promise.resolve`, `chains.get`, `chains.set`, `previous.then`, `result.then`, `settled.then`.

SHA-256 do trecho: `59ee4346bb42d3dd39c832de823734e01bf5ae0a53e0418171da21e176b7fa9e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
