# `createNeedsAuthCards`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/needs-auth-cards.ts` · [README do módulo](../../../../../modules/core/mcp/needs-auth-cards-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:584929-585060](../../../../../../reference/runtime/sand-eval-runner.cjs#L584929-L585060) | `FunctionDeclaration` | não | `deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584929-585060](../../../../../../reference/runtime/sand-eval-runner.cjs#L584929-L585060) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:584929

Chamadas escritas diretamente neste corpo: `createNeedsAuthHold`, `mcp.resolvePendingSignInSlot.bind`, `new Map`.

SHA-256 do trecho: `379d869aec2ba73b93043ce3556d4c32223b166db3dd9de4187ade888a042dc1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
