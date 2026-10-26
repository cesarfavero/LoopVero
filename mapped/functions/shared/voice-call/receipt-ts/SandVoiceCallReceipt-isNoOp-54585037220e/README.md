# `_SandVoiceCallReceipt.isNoOp`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/voice-call/receipt.ts` · [README do módulo](../../../../../modules/shared/voice-call/receipt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:714446-714448](../../../../../../reference/runtime/host-main.cjs#L714446-L714448) | `method` | não | `record3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714446-714448](../../../../../../reference/runtime/host-main.cjs#L714446-L714448) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:714446

Chamadas escritas diretamente neste corpo: `SandVoiceCallRecords.hasNoDuration`, `SandVoiceCallRecords.summarize`.

SHA-256 do trecho: `9f2d689fe669da384a53bbac38408cfa30576ccbde9d651cb976604f5f55c475`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
