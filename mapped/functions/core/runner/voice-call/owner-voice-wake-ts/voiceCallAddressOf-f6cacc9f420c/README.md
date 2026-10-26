# `voiceCallAddressOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/voice-call/owner-voice-wake.ts` · [README do módulo](../../../../../../modules/core/runner/voice-call/owner-voice-wake-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:752181-752184](../../../../../../../reference/runtime/host-main.cjs#L752181-L752184) | `FunctionDeclaration` | não | `line` |
| [evaluation:529879-529882](../../../../../../../reference/runtime/sand-eval-runner.cjs#L529879-L529882) | `FunctionDeclaration` | não | `line` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:752181-752184](../../../../../../../reference/runtime/host-main.cjs#L752181-L752184) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:529879-529882](../../../../../../../reference/runtime/sand-eval-runner.cjs#L529879-L529882) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:752181

Chamadas escritas diretamente neste corpo: `CALL_HEADER.exec`, `VoiceCallChannel.callIdOf`.

SHA-256 do trecho: `22ef5302536205fff27d01e07e93aa76aeba1ba8eaf698a8ae34a79f6bdaa7d3`.

### evaluation:529879

Chamadas escritas diretamente neste corpo: `CALL_HEADER.exec`, `VoiceCallChannel.callIdOf`.

SHA-256 do trecho: `22ef5302536205fff27d01e07e93aa76aeba1ba8eaf698a8ae34a79f6bdaa7d3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
