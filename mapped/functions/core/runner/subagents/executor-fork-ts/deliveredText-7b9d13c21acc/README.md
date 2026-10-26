# `deliveredText`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/subagents/executor-fork.ts` · [README do módulo](../../../../../../modules/core/runner/subagents/executor-fork-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:587559-587568](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587559-L587568) | `FunctionDeclaration` | não | `toolName, rawArgs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:587559-587568](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587559-L587568) | 4 | 0 | 0 | 2 | 0 | 0 |

### evaluation:587559

Chamadas escritas diretamente neste corpo: `isSandUserDeliveryToolName`, `resolveEffectiveToolCall`.

SHA-256 do trecho: `bbf45bc57c7d1a90516ebe5bc6132ca0f4d46d98ab918104a3ca5194c1a88dcb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
