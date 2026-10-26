# `isLocalToolRefusal`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/action-audit/file-transfer-audit.ts` · [README do módulo](../../../../../../modules/core/runner/action-audit/file-transfer-audit-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:770395-770397](../../../../../../../reference/runtime/host-main.cjs#L770395-L770397) | `FunctionDeclaration` | não | `error64` |
| [evaluation:569118-569120](../../../../../../../reference/runtime/sand-eval-runner.cjs#L569118-L569120) | `FunctionDeclaration` | não | `error63` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:770395-770397](../../../../../../../reference/runtime/host-main.cjs#L770395-L770397) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:569118-569120](../../../../../../../reference/runtime/sand-eval-runner.cjs#L569118-L569120) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:770395

Chamadas escritas diretamente neste corpo: `DAEMON_REFUSAL_CODES.has`, `isMessagesDecline`, `sandMessagesErrorCode`.

SHA-256 do trecho: `b9bb657ae3d22d1af502713cced8ef4dee4f44fc1e029deae5de2c05c2bc2cba`.

### evaluation:569118

Chamadas escritas diretamente neste corpo: `DAEMON_REFUSAL_CODES.has`, `isMessagesDecline`, `sandMessagesErrorCode`.

SHA-256 do trecho: `7b205fbbaf9a5bb1b56697c2daecce63db02833ffac1329f31107030a6a9c29b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
