# `SessionRuntime.isAgentGone`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/session-runtime.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/session-runtime-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:738297-738299](../../../../../../../reference/runtime/host-main.cjs#L738297-L738299) | `method` | não | `agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738297-738299](../../../../../../../reference/runtime/host-main.cjs#L738297-L738299) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:738297

Chamadas escritas diretamente neste corpo: `this.deletedAgentIds.has`, `this.tm.sessionStore.agentExists`.

SHA-256 do trecho: `eafbc2ee4ca17f31a1279009ee03b103a2913d7134efd747a12f5d42d39f29e0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
