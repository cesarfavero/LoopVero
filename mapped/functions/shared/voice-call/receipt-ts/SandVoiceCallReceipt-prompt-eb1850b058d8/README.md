# `_SandVoiceCallReceipt.prompt`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/voice-call/receipt.ts` · [README do módulo](../../../../../modules/shared/voice-call/receipt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:714458-714469](../../../../../../reference/runtime/host-main.cjs#L714458-L714469) | `method` | não | `record3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714458-714469](../../../../../../reference/runtime/host-main.cjs#L714458-L714469) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:714458

Chamadas escritas diretamente neste corpo: `.map`, `JSON.stringify`, `_SandVoiceCallReceipt.hasNothingToSummarize`, `record3.nudges.flatMap`, `record3.turns.filter`.

SHA-256 do trecho: `ce33d106ddf45cdcc1b29e665fa537a85003f119991e3eb41abc29f210cb9e8b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
