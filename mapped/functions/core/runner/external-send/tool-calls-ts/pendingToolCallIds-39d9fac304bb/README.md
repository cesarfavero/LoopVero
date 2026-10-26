# `pendingToolCallIds`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/external-send/tool-calls.ts` · [README do módulo](../../../../../../modules/core/runner/external-send/tool-calls-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:539152-539164](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539152-L539164) | `FunctionDeclaration` | não | `pendingToolCalls` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:539152-539164](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539152-L539164) | 3 | 2 | 0 | 1 | 0 | 0 |

### evaluation:539152

Chamadas escritas diretamente neste corpo: `.add`, `.filter`, `checkpointedMessageSchema.safeParse`, `new Set`, `safeJsonParse`, `toolCallIdPartSchema.safeParse`.

SHA-256 do trecho: `923ac9ca33c45460dcf48191a18e49e261b63f33162e9ba5efcfead793fd3e1f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
