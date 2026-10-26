# `createToolCallIdentity/recordModelToolName`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tool-call-identity.ts` · [README do módulo](../../../../../modules/core/runner/tool-call-identity-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:553792-553803](../../../../../../reference/runtime/sand-eval-runner.cjs#L553792-L553803) | `FunctionDeclaration` | não | `toolCallId, name18` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:553792-553803](../../../../../../reference/runtime/sand-eval-runner.cjs#L553792-L553803) | 3 | 0 | 0 | 0 | 0 | 0 |

### evaluation:553792

Chamadas escritas diretamente neste corpo: `.next`, `host.emitUpdate`, `modelToolNamesByCallId.delete`, `modelToolNamesByCallId.keys`, `modelToolNamesByCallId.set`, `surfaceUnresolvedPendingByCallId.delete`, `surfaceUnresolvedPendingByCallId.get`.

SHA-256 do trecho: `d3366c0a3e992a25c1044dd128f5c12df4ae74965011e6c4f8df4d075d289192`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
