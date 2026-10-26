# `resolveSessionOrRefusal`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/voice-call-runtime.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/voice-call-runtime-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:742412-742422](../../../../../../../reference/runtime/host-main.cjs#L742412-L742422) | `FunctionDeclaration` | sim | `tm, agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742412-742422](../../../../../../../reference/runtime/host-main.cjs#L742412-L742422) | 2 | 0 | 1 | 3 | 0 | 1 |

### host:742412

Chamadas escritas diretamente neste corpo: `isAgentAbsent`, `reportFallback`, `tm.sessions.deletedAgentIds.has`, `tm.sessions.leaseBackgroundSession`.

SHA-256 do trecho: `593a69cb5c10e108cdc672945ee905bb16b10978701a1ee9bacb3b0d4ca7d125`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
