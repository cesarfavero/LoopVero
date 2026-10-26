# `SandAgentSessionStore.setSessionHiddenFromSidebar`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/agent-session.ts` · [README do módulo](../../../../../../modules/host/extensions/session/agent-session-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:723501-723505](../../../../../../../reference/runtime/host-main.cjs#L723501-L723505) | `method` | não | `agentId, isHidden` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723501-723505](../../../../../../../reference/runtime/host-main.cjs#L723501-L723505) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:723501

Chamadas escritas diretamente neste corpo: `getSandSettingsPath`, `this.getAgentDir`, `writeSandSettingsFile`.

SHA-256 do trecho: `e5b4e94bae9877386a2e3b1f4a85c0dc30df6392b8fa2f2aecc03c4068bfcb3c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
