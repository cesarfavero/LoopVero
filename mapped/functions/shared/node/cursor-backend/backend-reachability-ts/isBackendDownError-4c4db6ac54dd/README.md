# `isBackendDownError`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/cursor-backend/backend-reachability.ts` · [README do módulo](../../../../../../modules/shared/node/cursor-backend/backend-reachability-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:711230-711240](../../../../../../../reference/runtime/host-main.cjs#L711230-L711240) | `FunctionDeclaration` | não | `error64` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:711230-711240](../../../../../../../reference/runtime/host-main.cjs#L711230-L711240) | 5 | 0 | 0 | 5 | 0 | 0 |

### host:711230

Chamadas escritas diretamente neste corpo: `BACKEND_DOWN_ERRNOS.has`, `Number`, `TRANSPORT_STATUS_MESSAGE.exec`, `findSystemErrno`, `isBackendDownStatus`.

SHA-256 do trecho: `fe7ed9e87f885e964a6dc1e5c43fbeb17cf6854c1009974f19e20e5ced25e2d9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
