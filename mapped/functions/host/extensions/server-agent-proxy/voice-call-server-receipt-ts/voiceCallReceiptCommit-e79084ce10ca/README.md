# `voiceCallReceiptCommit`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/server-agent-proxy/voice-call-server-receipt.ts` · [README do módulo](../../../../../../modules/host/extensions/server-agent-proxy/voice-call-server-receipt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:714513-714526](../../../../../../../reference/runtime/host-main.cjs#L714513-L714526) | `FunctionDeclaration` | não | `agentId, record3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714513-714526](../../../../../../../reference/runtime/host-main.cjs#L714513-L714526) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:714513

Chamadas escritas diretamente neste corpo: `entries.map`, `voiceCallHangupEntries`.

SHA-256 do trecho: `f646ea22ada81109a93a1f5c73a5e17ccea54697e58d26fbba50501080bda121`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
