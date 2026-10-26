# `getSandBackendClientHeaders`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/sand-client-metadata.ts` · [README do módulo](../../../../../modules/shared/node/sand-client-metadata-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:175868-175878](../../../../../../reference/runtime/host-main.cjs#L175868-L175878) | `FunctionDeclaration` | não | `identity` |
| [evaluation:511803-511813](../../../../../../reference/runtime/sand-eval-runner.cjs#L511803-L511813) | `FunctionDeclaration` | não | `identity2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:175868-175878](../../../../../../reference/runtime/host-main.cjs#L175868-L175878) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:511803-511813](../../../../../../reference/runtime/sand-eval-runner.cjs#L511803-L511813) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:175868

Chamadas escritas diretamente neste corpo: `clientSourceHeaderOf`, `sandBackendUserAgentOf`.

SHA-256 do trecho: `f1ec21cd771aa7c8689a5c2c12c15cab02556daca9be64f2d420014db082b5a6`.

### evaluation:511803

Chamadas escritas diretamente neste corpo: `clientSourceHeaderOf`, `sandBackendUserAgentOf`.

SHA-256 do trecho: `c9d85b3b344c1fcdd88ec421e38998da845de6357bafa944564a5e31fb637d58`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
