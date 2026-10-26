# `createBackendReturnWake/arm`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/cursor-backend/backend-reachability.ts` · [README do módulo](../../../../../../modules/shared/node/cursor-backend/backend-reachability-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:711289-711301](../../../../../../../reference/runtime/host-main.cjs#L711289-L711301) | `FunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:711289-711301](../../../../../../../reference/runtime/host-main.cjs#L711289-L711301) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:711289

Chamadas escritas diretamente neste corpo: `armed.wake.dispose`, `new AbortController`.

Alvos de atribuição ou incremento: `armed`.

SHA-256 do trecho: `6f3726e48c32bec23f9b6c54e5c14cca527e8f305dc6fb63b55f44398308690c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
