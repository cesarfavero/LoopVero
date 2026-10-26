# `failedToolUse`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-messages-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-messages-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:778177-778186](../../../../../../../reference/runtime/host-main.cjs#L778177-L778186) | `FunctionDeclaration` | não | `op, error64, durationMs` |
| [evaluation:577912-577921](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577912-L577921) | `FunctionDeclaration` | não | `op, error63, durationMs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:778177-778186](../../../../../../../reference/runtime/host-main.cjs#L778177-L778186) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:577912-577921](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577912-L577921) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:778177

Chamadas escritas diretamente neste corpo: `boundErrorClass`, `isMessagesDecline`, `sandMessagesErrorCode`.

SHA-256 do trecho: `306db1f303573ba5d272c503668749ba701dae2475e9e7906b45fbd48d39ef51`.

### evaluation:577912

Chamadas escritas diretamente neste corpo: `boundErrorClass`, `isMessagesDecline`, `sandMessagesErrorCode`.

SHA-256 do trecho: `b5273386daab14613a2bde1b5b3e25eb737353a63358f62e8f65b77bb9315408`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
