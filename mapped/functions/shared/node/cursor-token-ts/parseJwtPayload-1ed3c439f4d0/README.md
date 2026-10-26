# `parseJwtPayload`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/cursor-token.ts` · [README do módulo](../../../../../modules/shared/node/cursor-token-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:175715-175725](../../../../../../reference/runtime/host-main.cjs#L175715-L175725) | `FunctionDeclaration` | não | `token` |
| [evaluation:511694-511704](../../../../../../reference/runtime/sand-eval-runner.cjs#L511694-L511704) | `FunctionDeclaration` | não | `token` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:175715-175725](../../../../../../reference/runtime/host-main.cjs#L175715-L175725) | 2 | 0 | 0 | 3 | 0 | 1 |
| [evaluation:511694-511704](../../../../../../reference/runtime/sand-eval-runner.cjs#L511694-L511704) | 2 | 0 | 0 | 3 | 0 | 1 |

### host:175715

Chamadas escritas diretamente neste corpo: `.toString`, `Buffer.from`, `JSON.parse`, `jwtPayloadSchema.safeParse`, `token.split`.

SHA-256 do trecho: `5dc0b17970850f9c14fc0637fa2afea7cc492d3f1ae5058c080dc73d356c4e91`.

### evaluation:511694

Chamadas escritas diretamente neste corpo: `.toString`, `Buffer.from`, `JSON.parse`, `jwtPayloadSchema.safeParse`, `token.split`.

SHA-256 do trecho: `1c4fb2bef80f6cef31acd47ea27f519e5e74d0e0d4c047db34d113bead0343a2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
