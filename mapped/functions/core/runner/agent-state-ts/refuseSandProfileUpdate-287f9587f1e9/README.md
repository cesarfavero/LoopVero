# `refuseSandProfileUpdate`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/agent-state.ts` · [README do módulo](../../../../../modules/core/runner/agent-state-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:554676-554686](../../../../../../reference/runtime/sand-eval-runner.cjs#L554676-L554686) | `FunctionDeclaration` | não | `patch2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:554676-554686](../../../../../../reference/runtime/sand-eval-runner.cjs#L554676-L554686) | 2 | 0 | 0 | 3 | 0 | 0 |

### evaluation:554676

Chamadas escritas diretamente neste corpo: `changedSandProfileFields`, `patch2.name.trim`, `stateWriteFailed`.

SHA-256 do trecho: `5220bca406bb784abc6b39e54b4ec516fab4aac87d99250422c734a14f16169a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
