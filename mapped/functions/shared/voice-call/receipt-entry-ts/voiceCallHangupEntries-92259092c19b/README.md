# `voiceCallHangupEntries`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/voice-call/receipt-entry.ts` · [README do módulo](../../../../../modules/shared/voice-call/receipt-entry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:714496-714507](../../../../../../reference/runtime/host-main.cjs#L714496-L714507) | `FunctionDeclaration` | não | `record3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714496-714507](../../../../../../reference/runtime/host-main.cjs#L714496-L714507) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:714496

Chamadas escritas diretamente neste corpo: `SandVoiceCallReceipt.isNoOp`, `SandVoiceCallRecords.conversation`, `SandVoiceCallRecords.summarize`.

SHA-256 do trecho: `9761763f4e42baf4f77e3806fb1c7704925273e3a7caa2a6e26d1002e3600a51`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
