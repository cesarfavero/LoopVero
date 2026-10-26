# `isSandUserDeliveryToolCall`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/send-message-reminder-middleware.ts` · [README do módulo](../../../../../modules/core/runner/send-message-reminder-middleware-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:483064-483066](../../../../../../reference/runtime/sand-eval-runner.cjs#L483064-L483066) | `FunctionDeclaration` | não | `part` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:483064-483066](../../../../../../reference/runtime/sand-eval-runner.cjs#L483064-L483066) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:483064

Chamadas escritas diretamente neste corpo: `invokesFirstPartyTool`.

SHA-256 do trecho: `768f5e533b11fa57509d1fa19cb0385d2de65e4cb81f1efe3d42c99369cc4c7c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
