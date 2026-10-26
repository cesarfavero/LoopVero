# `isSentTeamId`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/inference/README.md).

**Módulo:** `shared/node/cursor-backend/cursor-inference.ts` · [README do módulo](../../../../../../modules/shared/node/cursor-backend/cursor-inference-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:224992-224994](../../../../../../../reference/runtime/host-main.cjs#L224992-L224994) | `FunctionDeclaration` | não | `teamId` |
| [evaluation:512055-512057](../../../../../../../reference/runtime/sand-eval-runner.cjs#L512055-L512057) | `FunctionDeclaration` | não | `teamId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:224992-224994](../../../../../../../reference/runtime/host-main.cjs#L224992-L224994) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:512055-512057](../../../../../../../reference/runtime/sand-eval-runner.cjs#L512055-L512057) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:224992

Chamadas escritas diretamente neste corpo: `Number.isSafeInteger`.

SHA-256 do trecho: `4f870562c2e720a92e0d4791bfd3d3b8c2106edd8abfdc0d379cd7a775a994ec`.

### evaluation:512055

Chamadas escritas diretamente neste corpo: `Number.isSafeInteger`.

SHA-256 do trecho: `4f870562c2e720a92e0d4791bfd3d3b8c2106edd8abfdc0d379cd7a775a994ec`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
