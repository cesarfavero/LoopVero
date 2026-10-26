# `accountScopeOfPrincipal`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/cursor-token.ts` · [README do módulo](../../../../../modules/shared/node/cursor-token-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:175734-175736](../../../../../../reference/runtime/host-main.cjs#L175734-L175736) | `FunctionDeclaration` | não | `{ principal }` |
| [evaluation:511713-511715](../../../../../../reference/runtime/sand-eval-runner.cjs#L511713-L511715) | `FunctionDeclaration` | não | `{ principal }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:175734-175736](../../../../../../reference/runtime/host-main.cjs#L175734-L175736) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:511713-511715](../../../../../../reference/runtime/sand-eval-runner.cjs#L511713-L511715) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:175734

Chamadas escritas diretamente neste corpo: `.digest`, `.update`.

SHA-256 do trecho: `a394ebc170283cbcc6509c2757d81517ee6a510e99434e6b8d6eefd234faa023`.

### evaluation:511713

Chamadas escritas diretamente neste corpo: `.digest`, `.update`.

SHA-256 do trecho: `09226d192536cb2413abd6ae46e3da9e907b5d6d614ca23a0193f3f4791bc96e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
