# `createToolCallIdentity/resolveModelToolName`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tool-call-identity.ts` · [README do módulo](../../../../../modules/core/runner/tool-call-identity-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:553804-553811](../../../../../../reference/runtime/sand-eval-runner.cjs#L553804-L553811) | `FunctionDeclaration` | não | `event, callId, outlineName` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:553804-553811](../../../../../../reference/runtime/sand-eval-runner.cjs#L553804-L553811) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:553804

Chamadas escritas diretamente neste corpo: `modelToolNamesByCallId.delete`, `modelToolNamesByCallId.get`, `surfaceUnresolvedPendingByCallId.delete`.

SHA-256 do trecho: `6f963f7f52bbe0c0ca8ca2b9bb930aa286943e822986375fcef618b093aca9a0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
