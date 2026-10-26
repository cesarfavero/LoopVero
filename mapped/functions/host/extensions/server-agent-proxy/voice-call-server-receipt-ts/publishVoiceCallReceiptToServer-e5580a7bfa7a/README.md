# `publishVoiceCallReceiptToServer`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/server-agent-proxy/voice-call-server-receipt.ts` · [README do módulo](../../../../../../modules/host/extensions/server-agent-proxy/voice-call-server-receipt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:714527-714541](../../../../../../../reference/runtime/host-main.cjs#L714527-L714541) | `FunctionDeclaration` | sim | `record3, commit2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714527-714541](../../../../../../../reference/runtime/host-main.cjs#L714527-L714541) | 3 | 0 | 1 | 2 | 2 | 0 |

### host:714527

Chamadas escritas diretamente neste corpo: `commit2`, `new VoiceCallReceiptPublishError`, `parseAgentId`, `voiceCallReceiptCommit`.

Alvos de lançamento explícito: `VoiceCallReceiptPublishError`.

SHA-256 do trecho: `2c7c722026543c5541215ceba8ee629df4b268c7955544cb6c2c5bc06bf577e5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
