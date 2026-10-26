# `httpOriginOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/cursor-backend/isolated-deployment.ts` · [README do módulo](../../../../../../modules/shared/node/cursor-backend/isolated-deployment-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:451570-451572](../../../../../../../reference/runtime/host-main.cjs#L451570-L451572) | `FunctionDeclaration` | não | `url2` |
| [evaluation:597116-597118](../../../../../../../reference/runtime/sand-eval-runner.cjs#L597116-L597118) | `FunctionDeclaration` | não | `url2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:451570-451572](../../../../../../../reference/runtime/host-main.cjs#L451570-L451572) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:597116-597118](../../../../../../../reference/runtime/sand-eval-runner.cjs#L597116-L597118) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:451570

Chamadas escritas diretamente neste corpo: `httpProtocolOf`.

SHA-256 do trecho: `75c97244e75dbdfe18fdc92b57f46cfeaafb5f0d89a5981574d055001d4fb847`.

### evaluation:597116

Chamadas escritas diretamente neste corpo: `httpProtocolOf`.

SHA-256 do trecho: `75c97244e75dbdfe18fdc92b57f46cfeaafb5f0d89a5981574d055001d4fb847`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
