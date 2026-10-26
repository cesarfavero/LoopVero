# `accountScopeOfToken`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/cursor-token.ts` · [README do módulo](../../../../../modules/shared/node/cursor-token-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:175737-175739](../../../../../../reference/runtime/host-main.cjs#L175737-L175739) | `FunctionDeclaration` | não | `{ accessToken }` |
| [evaluation:511716-511718](../../../../../../reference/runtime/sand-eval-runner.cjs#L511716-L511718) | `FunctionDeclaration` | não | `{ accessToken }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:175737-175739](../../../../../../reference/runtime/host-main.cjs#L175737-L175739) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:511716-511718](../../../../../../reference/runtime/sand-eval-runner.cjs#L511716-L511718) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:175737

Chamadas escritas diretamente neste corpo: `accountScopeOfPrincipal`, `parseJwtPayload`.

SHA-256 do trecho: `1dcbf4ca59262bee786af2b11c94c17ecebf79dcb9034d8d717161af363efd45`.

### evaluation:511716

Chamadas escritas diretamente neste corpo: `accountScopeOfPrincipal`, `parseJwtPayload`.

SHA-256 do trecho: `1dcbf4ca59262bee786af2b11c94c17ecebf79dcb9034d8d717161af363efd45`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
