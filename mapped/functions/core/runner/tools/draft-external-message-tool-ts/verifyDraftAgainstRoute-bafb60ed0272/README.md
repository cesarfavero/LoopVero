# `verifyDraftAgainstRoute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-external-message-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-external-message-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:755294-755331](../../../../../../../reference/runtime/host-main.cjs#L755294-L755331) | `FunctionDeclaration` | não | `draft, resolution` |
| [evaluation:541174-541211](../../../../../../../reference/runtime/sand-eval-runner.cjs#L541174-L541211) | `FunctionDeclaration` | não | `draft, resolution` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755294-755331](../../../../../../../reference/runtime/host-main.cjs#L755294-L755331) | 8 | 0 | 0 | 1 | 3 | 0 |
| [evaluation:541174-541211](../../../../../../../reference/runtime/sand-eval-runner.cjs#L541174-L541211) | 8 | 0 | 0 | 1 | 3 | 0 |

### host:755294

Chamadas escritas diretamente neste corpo: `Math.ceil`, `canSendAs`, `isHostedGmailRoute`, `new DraftRefusedError`, `sendable.join`.

Alvos de lançamento explícito: `DraftRefusedError`.

SHA-256 do trecho: `1b7d0c4c8d2d2f9148a56a75c1dbd319f05fdeab084698bd1b1915b650db9f3f`.

### evaluation:541174

Chamadas escritas diretamente neste corpo: `Math.ceil`, `canSendAs`, `isHostedGmailRoute`, `new DraftRefusedError`, `sendable.join`.

Alvos de lançamento explícito: `DraftRefusedError`.

SHA-256 do trecho: `1b7d0c4c8d2d2f9148a56a75c1dbd319f05fdeab084698bd1b1915b650db9f3f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
