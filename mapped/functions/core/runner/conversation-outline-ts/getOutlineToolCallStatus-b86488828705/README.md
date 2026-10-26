# `getOutlineToolCallStatus`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/conversation-outline.ts` · [README do módulo](../../../../../modules/core/runner/conversation-outline-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:719734-719740](../../../../../../reference/runtime/host-main.cjs#L719734-L719740) | `FunctionDeclaration` | não | `event, toolCall2` |
| [evaluation:526247-526253](../../../../../../reference/runtime/sand-eval-runner.cjs#L526247-L526253) | `FunctionDeclaration` | não | `event, toolCall2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:719734-719740](../../../../../../reference/runtime/host-main.cjs#L719734-L719740) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:526247-526253](../../../../../../reference/runtime/sand-eval-runner.cjs#L526247-L526253) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:719734

Chamadas escritas diretamente neste corpo: `decodeSandToolActivity`, `isFailedTaskToolCall`.

SHA-256 do trecho: `6eb45a0132e00297d2b7576d0d790ea2c9a6363447680e0fdeabc51e1540df74`.

### evaluation:526247

Chamadas escritas diretamente neste corpo: `decodeSandToolActivity`, `isFailedTaskToolCall`.

SHA-256 do trecho: `6eb45a0132e00297d2b7576d0d790ea2c9a6363447680e0fdeabc51e1540df74`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
