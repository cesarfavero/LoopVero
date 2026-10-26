# `isSandOutboundMessageToolCall`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/loop-detection-policy.ts` · [README do módulo](../../../../../modules/core/runner/loop-detection-policy-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:483334-483336](../../../../../../reference/runtime/sand-eval-runner.cjs#L483334-L483336) | `FunctionDeclaration` | não | `toolName, args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:483334-483336](../../../../../../reference/runtime/sand-eval-runner.cjs#L483334-L483336) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:483334

Chamadas escritas diretamente neste corpo: `isSandUserDeliveryToolCall`.

SHA-256 do trecho: `db22da11b9bf83db92e2eb8fbbe8b11b71bb40985edf93a8664003e63e112aa5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
