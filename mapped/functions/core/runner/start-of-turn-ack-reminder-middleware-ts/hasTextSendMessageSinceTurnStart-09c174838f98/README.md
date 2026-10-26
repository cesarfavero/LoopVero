# `hasTextSendMessageSinceTurnStart`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/start-of-turn-ack-reminder-middleware.ts` · [README do módulo](../../../../../modules/core/runner/start-of-turn-ack-reminder-middleware-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:587039-587053](../../../../../../reference/runtime/sand-eval-runner.cjs#L587039-L587053) | `FunctionDeclaration` | não | `messages` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:587039-587053](../../../../../../reference/runtime/sand-eval-runner.cjs#L587039-L587053) | 3 | 1 | 0 | 3 | 0 | 0 |

### evaluation:587039

Chamadas escritas diretamente neste corpo: `hasTextSendMessageCall`, `isInjectedReminderMessage`.

Alvos de atribuição ou incremento: `index`.

SHA-256 do trecho: `55fddd8ffcb9853a75c374ea9c77c0cac234c660ee1b2d0fafc3f0587f0832cb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
