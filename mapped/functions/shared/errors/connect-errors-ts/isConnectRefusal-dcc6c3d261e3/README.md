# `isConnectRefusal`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/errors/connect-errors.ts` · [README do módulo](../../../../../modules/shared/errors/connect-errors-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:451230-451232](../../../../../../reference/runtime/host-main.cjs#L451230-L451232) | `FunctionDeclaration` | não | `error64` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:451230-451232](../../../../../../reference/runtime/host-main.cjs#L451230-L451232) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:451230

Chamadas escritas diretamente neste corpo: `REFUSAL_CODES.has`.

SHA-256 do trecho: `6b564eecf0fa13cf69510541d4e20c02cb52de70387b6d11e615f3c322be08b8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
