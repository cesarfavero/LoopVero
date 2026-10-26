# `createToolHandoff/stopOtherTools`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/tool-handoff.ts` · [README do módulo](../../../../../../modules/core/runner/tools/tool-handoff-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:569314-569321](../../../../../../../reference/runtime/sand-eval-runner.cjs#L569314-L569321) | `FunctionDeclaration` | não | `{ toolCallId }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:569314-569321](../../../../../../../reference/runtime/sand-eval-runner.cjs#L569314-L569321) | 1 | 1 | 0 | 0 | 0 | 0 |

### evaluation:569314

Chamadas escritas diretamente neste corpo: `call.cancel`, `new SandRunAbortError`.

Alvos de atribuição ou incremento: `handedOff`.

SHA-256 do trecho: `6e152cafd7757440078d35ad4d634d2b2c46c6fc215a09ebbbf6211ab91f81cd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
