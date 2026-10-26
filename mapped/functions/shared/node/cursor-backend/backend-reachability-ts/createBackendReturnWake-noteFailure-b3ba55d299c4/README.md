# `createBackendReturnWake/noteFailure`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/cursor-backend/backend-reachability.ts` · [README do módulo](../../../../../../modules/shared/node/cursor-backend/backend-reachability-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:711280-711282](../../../../../../../reference/runtime/host-main.cjs#L711280-L711282) | `FunctionExpression` | não | `error64` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:711280-711282](../../../../../../../reference/runtime/host-main.cjs#L711280-L711282) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:711280

Chamadas escritas diretamente neste corpo: `isBackendDownError`.

Alvos de atribuição ou incremento: `sawDown`.

SHA-256 do trecho: `13ef81378dd48dc1ce326ba9c42d4089f0ac4675b2d4f5f479406230d6975158`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
