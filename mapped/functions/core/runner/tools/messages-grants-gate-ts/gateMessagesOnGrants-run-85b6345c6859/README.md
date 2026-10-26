# `gateMessagesOnGrants/run`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/messages-grants-gate.ts` · [README do módulo](../../../../../../modules/core/runner/tools/messages-grants-gate-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:777855-777909](../../../../../../../reference/runtime/host-main.cjs#L777855-L777909) | `ArrowFunctionExpression` | sim | `ctx, op, display` |
| [evaluation:577590-577644](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577590-L577644) | `ArrowFunctionExpression` | sim | `ctx, op, display` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777855-777909](../../../../../../../reference/runtime/host-main.cjs#L777855-L777909) | 7 | 0 | 6 | 3 | 3 | 0 |
| [evaluation:577590-577644](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577590-L577644) | 7 | 0 | 6 | 3 | 3 | 0 |

### host:777855

Chamadas escritas diretamente neste corpo: `messages2.run`, `messagesGrantsMissingMessage`, `new SandLocalToolPermissionDeniedError`, `note`, `performance.now`, `probe`, `refusingAbortedTransport`.

Alvos de lançamento explícito: `SandLocalToolPermissionDeniedError`.

SHA-256 do trecho: `184b20030d27cbee43318f5f056cf0b5694841225f35b73122d9f1f485148e51`.

### evaluation:577590

Chamadas escritas diretamente neste corpo: `messages.run`, `messagesGrantsMissingMessage`, `new SandLocalToolPermissionDeniedError`, `note`, `performance.now`, `probe`, `refusingAbortedTransport`.

Alvos de lançamento explícito: `SandLocalToolPermissionDeniedError`.

SHA-256 do trecho: `11959fa7795a13da6dd5969e913da3cba835d741177ca3c3dcbada1e4631f40e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
