# `openDirectoryNoFollow2`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/no-follow-walk.ts` · [README do módulo](../../../../modules/host/no-follow-walk-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:453544-453552](../../../../../reference/runtime/host-main.cjs#L453544-L453552) | `FunctionDeclaration` | sim | `parent, name18` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453544-453552](../../../../../reference/runtime/host-main.cjs#L453544-L453552) | 0 | 0 | 2 | 1 | 1 | 1 |

### host:453544

Chamadas escritas diretamente neste corpo: `entryOf`, `refusedParentOr2`.

Alvos de lançamento explícito: `AwaitExpression`.

SHA-256 do trecho: `cf26280a702b8b960a8a34ebf4abbdd79f60ce10f3edec860e8f4dec7775ed4b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
