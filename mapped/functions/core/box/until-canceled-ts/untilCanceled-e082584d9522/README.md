# `untilCanceled`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/box/until-canceled.ts` · [README do módulo](../../../../../modules/core/box/until-canceled-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:553792-553803](../../../../../../reference/runtime/host-main.cjs#L553792-L553803) | `FunctionDeclaration` | sim | `ctx, start` |
| [evaluation:575561-575572](../../../../../../reference/runtime/sand-eval-runner.cjs#L575561-L575572) | `FunctionDeclaration` | sim | `ctx, start` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:553792-553803](../../../../../../reference/runtime/host-main.cjs#L553792-L553803) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:575561-575572](../../../../../../reference/runtime/sand-eval-runner.cjs#L575561-L575572) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:553792

Chamadas escritas diretamente neste corpo: `Promise.race`, `Promise.withResolvers`, `signal.addEventListener`, `signal.removeEventListener`, `signal.throwIfAborted`, `start`.

SHA-256 do trecho: `8fc614aa4e143b7a0b6a1e6f50ce5553146649ba08a51777eb044062e6f7ec56`.

### evaluation:575561

Chamadas escritas diretamente neste corpo: `Promise.race`, `Promise.withResolvers`, `signal.addEventListener`, `signal.removeEventListener`, `signal.throwIfAborted`, `start`.

SHA-256 do trecho: `8fc614aa4e143b7a0b6a1e6f50ce5553146649ba08a51777eb044062e6f7ec56`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
