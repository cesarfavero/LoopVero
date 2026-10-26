# `AgentLifecycle.setAgentAvatarBytes`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/agent-lifecycle.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/agent-lifecycle-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:733843-733848](../../../../../../../reference/runtime/host-main.cjs#L733843-L733848) | `method` | sim | `agentId, pngBytes` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:733843-733848](../../../../../../../reference/runtime/host-main.cjs#L733843-L733848) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:733843

Chamadas escritas diretamente neste corpo: `this.withAvatarMutation`.

SHA-256 do trecho: `46fe70e7fea388ae6a5d396691ac1a2c07cdc062f2f0ec3f4309a57272f9ea6a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
