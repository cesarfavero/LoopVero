# `isBackendDownStatus`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/cursor-backend/backend-reachability.ts` · [README do módulo](../../../../../../modules/shared/node/cursor-backend/backend-reachability-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:711227-711229](../../../../../../../reference/runtime/host-main.cjs#L711227-L711229) | `FunctionDeclaration` | não | `status` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:711227-711229](../../../../../../../reference/runtime/host-main.cjs#L711227-L711229) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:711227

Chamadas escritas diretamente neste corpo: `BACKEND_DOWN_HTTP_STATUSES.has`.

SHA-256 do trecho: `fc69e681037b8a840f02e6c01bbd51b1fa2b0d5337fd617ffd4c531601811abc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
